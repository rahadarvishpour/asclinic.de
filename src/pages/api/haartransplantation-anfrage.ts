/** Endpoint behind the single CTA on /landing-haartransplantation-offer.
 *
 *  It accepts a multipart form (name, phone, e-mail, up to four photos, an
 *  optional message and the mandatory consent), mails it to the clinic and then
 *  hands the visitor to /danke. The success cookie it sets is what makes that
 *  thank-you page reachable at all — see src/pages/danke.astro.
 *
 *  Two response shapes, one code path: the enhanced form on the landing page
 *  sends `Accept: application/json` and renders errors inline, while a
 *  JavaScript-less browser gets plain 303 redirects and reads the outcome from
 *  the query string.
 */
import type { APIRoute } from "astro";
import { deliverLead, type LeadAttachment } from "../../lib/leadMail";
import { LANDING_PATH, LEAD_COOKIE, LEAD_COOKIE_MAX_AGE, THANKS_PATH } from "../../lib/leadCookie";

export const prerender = false;

const MAX_FILES = 4;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_TOTAL_BYTES = 26 * 1024 * 1024;
const MAX_TEXT = 4000;

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "image/avif"
]);
/** iOS and a few Android browsers upload HEIC as application/octet-stream, so
 *  the extension is consulted when the declared type is unhelpful. */
const ALLOWED_EXTENSIONS = /\.(jpe?g|png|webp|heic|heif|avif)$/i;

const PHOTO_FIELDS = ["foto1", "foto2", "foto3", "foto4"] as const;
const PHOTO_LABELS: Record<(typeof PHOTO_FIELDS)[number], string> = {
  foto1: "von vorne",
  foto2: "von oben",
  foto3: "von der Seite",
  foto4: "von hinten"
};

type ErrorCode =
  | "firstName"
  | "lastName"
  | "phone"
  | "email"
  | "consent"
  | "fileType"
  | "fileSize"
  | "totalSize"
  | "send";

/** Deliberately permissive: the address only has to be plausible enough to
 *  reply to, and an over-strict pattern rejects valid addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** A handful of submissions per address is generous for a real visitor and
 *  cheap insurance for an endpoint that sends mail. Resets with the process,
 *  which is fine — this guards against noise, not a determined attacker. */
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const recent = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) {
    for (const [k, times] of recent) if (times.every((t) => now - t >= RATE_WINDOW_MS)) recent.delete(k);
  }
  return hits.length > RATE_LIMIT;
}

const text = (value: FormDataEntryValue | null, limit = 200) =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, limit) : "";

/** Header injection guard: a newline in the subject would otherwise let a
 *  submitted name add headers of its own. */
const headerSafe = (value: string) => value.replace(/[\r\n]+/g, " ");

function safeFilename(name: string, fallback: string): string {
  const base = name.split(/[\\/]/).pop() ?? "";
  const cleaned = base.replace(/[^\w.\- ]+/g, "_").replace(/^\.+/, "").trim();
  return cleaned.length > 3 ? cleaned.slice(0, 90) : fallback;
}

const wantsJson = (request: Request) => (request.headers.get("accept") ?? "").includes("application/json");

export const POST: APIRoute = async ({ request, cookies, url, clientAddress }) => {
  const json = wantsJson(request);

  const fail = (code: ErrorCode, status = 400) =>
    json
      ? new Response(JSON.stringify({ ok: false, error: code }), {
          status,
          headers: { "content-type": "application/json; charset=utf-8" }
        })
      : new Response(null, { status: 303, headers: { location: `${LANDING_PATH}?fehler=${code}` } });

  const succeed = () => {
    cookies.set(LEAD_COOKIE, "1", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: url.protocol === "https:",
      maxAge: LEAD_COOKIE_MAX_AGE
    });
    return json
      ? new Response(JSON.stringify({ ok: true, redirect: THANKS_PATH }), {
          status: 200,
          headers: { "content-type": "application/json; charset=utf-8" }
        })
      : new Response(null, { status: 303, headers: { location: THANKS_PATH } });
  };

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail("send", 400);
  }

  // Honeypot: a field hidden from people and irresistible to form bots. Answer
  // as if it worked, so the bot has nothing to learn and retries nothing.
  if (text(form.get("website"))) return succeed();

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || clientAddress || "unknown";
  if (rateLimited(ip)) return fail("send", 429);

  const firstName = text(form.get("vorname"), 80);
  const lastName = text(form.get("nachname"), 80);
  const phone = text(form.get("telefon"), 40);
  const email = text(form.get("email"), 160);
  const message = typeof form.get("nachricht") === "string" ? String(form.get("nachricht")).trim().slice(0, MAX_TEXT) : "";
  const consent = form.get("einwilligung");

  if (!firstName) return fail("firstName");
  if (!lastName) return fail("lastName");
  if (phone.replace(/\D/g, "").length < 6) return fail("phone");
  if (!EMAIL.test(email)) return fail("email");
  if (!consent) return fail("consent");

  const attachments: LeadAttachment[] = [];
  let total = 0;
  for (const [index, field] of PHOTO_FIELDS.entries()) {
    const value = form.get(field);
    if (!(value instanceof File) || value.size === 0) continue;
    if (attachments.length >= MAX_FILES) break;

    const declared = value.type.toLowerCase();
    if (!ALLOWED_TYPES.has(declared) && !ALLOWED_EXTENSIONS.test(value.name)) return fail("fileType");
    if (value.size > MAX_FILE_BYTES) return fail("fileSize");
    total += value.size;
    if (total > MAX_TOTAL_BYTES) return fail("totalSize");

    const extension = value.name.match(ALLOWED_EXTENSIONS)?.[0] ?? ".jpg";
    attachments.push({
      filename: safeFilename(value.name, `foto-${index + 1}${extension}`),
      contentType: ALLOWED_TYPES.has(declared) ? declared : "application/octet-stream",
      // Buffering is bounded by the size checks above, so the whole request can
      // never exceed MAX_TOTAL_BYTES in memory.
      content: Buffer.from(await value.arrayBuffer())
    });
  }

  const photoSummary = PHOTO_FIELDS.map((field, i) => {
    const value = form.get(field);
    const has = value instanceof File && value.size > 0;
    return `  ${i + 1}. ${PHOTO_LABELS[field]}: ${has ? (value as File).name : "— nicht hochgeladen"}`;
  }).join("\n");

  const body = [
    "Neue Anfrage über die Landingpage Haartransplantation",
    "",
    `Vorname:      ${firstName}`,
    `Nachname:     ${lastName}`,
    `Telefon:      ${phone}`,
    `E-Mail:       ${email}`,
    "",
    `Fotos (${attachments.length} im Anhang):`,
    photoSummary,
    "",
    "Nachricht:",
    message || "— keine —",
    "",
    "---",
    `Einwilligung Datenschutz/Art. 9 DSGVO: erteilt am ${new Date().toISOString()}`,
    `Quelle: ${LANDING_PATH}`
  ].join("\n");

  const delivery = await deliverLead({
    subject: headerSafe(`Haartransplantation-Anfrage: ${firstName} ${lastName}`),
    text: body,
    replyTo: headerSafe(`${firstName} ${lastName} <${email}>`),
    attachments
  });

  if (!delivery.ok) return fail("send", 502);
  if (delivery.via === "disk") {
    // The visitor is told the request arrived, because it did — it is just
    // waiting in the fallback directory for someone to look at it.
    console.warn(`[lead] stored at ${delivery.path} instead of mailed (${delivery.reason})`);
  }
  return succeed();
};

/** A bare GET here is someone typing the URL, not a form post. Send them to the
 *  page the form lives on rather than returning a bald 404. */
export const GET: APIRoute = () =>
  new Response(null, { status: 303, headers: { location: LANDING_PATH } });
