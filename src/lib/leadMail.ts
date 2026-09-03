/** Delivery of consultation requests submitted through the campaign landing
 *  page. The privacy notice (src/data/privacy.ts, §7 and §8) commits to two
 *  things this module has to honour: the submission is processed by the site's
 *  own application rather than an external form service, and it is delivered to
 *  info@asclinic.de. So: SMTP straight to the clinic's mailbox, no third party
 *  in between.
 *
 *  Credentials come from the environment at runtime — never from
 *  import.meta.env, which Astro inlines into the client bundle for anything it
 *  can reach at build time.
 *
 *  Configure on the server (e.g. in the systemd unit for astro-asclinic):
 *
 *    SMTP_HOST=smtp.strato.de
 *    SMTP_PORT=465
 *    SMTP_USER=info@asclinic.de
 *    SMTP_PASS=…
 *    LEAD_MAIL_FROM="AS Clinic Website <info@asclinic.de>"
 *    LEAD_MAIL_TO=info@asclinic.de          # optional, defaults to CLINIC.email
 *    LEAD_FALLBACK_DIR=/var/lib/asclinic/leads   # optional, see below
 *
 *  If SMTP is unconfigured or the send fails, the request is written to
 *  LEAD_FALLBACK_DIR instead of being dropped, so a mail outage never costs a
 *  lead. Those files carry health-related photos: keep the directory outside
 *  the web root, restrict its permissions, and clear it in step with the 30-day
 *  deletion promise in the privacy notice.
 */
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { CLINIC } from "../data/clinic";

export interface LeadAttachment {
  filename: string;
  contentType: string;
  content: Buffer;
}

export interface LeadMail {
  subject: string;
  text: string;
  replyTo?: string;
  attachments: LeadAttachment[];
}

export type LeadDelivery =
  | { ok: true; via: "smtp" }
  | { ok: true; via: "disk"; path: string; reason: string }
  | { ok: false; reason: string };

const FALLBACK_DIR = process.env.LEAD_FALLBACK_DIR ?? "./.leads";

let cached: Transporter | null | undefined;

function transport(): Transporter | null {
  if (cached !== undefined) return cached;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    cached = null;
    return cached;
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  cached = nodemailer.createTransport({
    host,
    port,
    // Port 465 is implicit TLS; 587 upgrades via STARTTLS. Either way the
    // credentials never travel in the clear.
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
    requireTLS: true
  });
  return cached;
}

/** Last-resort persistence so a lead survives a mail outage. One JSON file with
 *  the message body plus one file per photo, all under a single request id. */
async function storeOnDisk(mail: LeadMail, reason: string): Promise<LeadDelivery> {
  try {
    const id = `${new Date().toISOString().replace(/[:.]/g, "-")}-${randomUUID().slice(0, 8)}`;
    const dir = join(FALLBACK_DIR, id);
    await mkdir(dir, { recursive: true, mode: 0o700 });
    await writeFile(
      join(dir, "anfrage.txt"),
      `${mail.subject}\n\n${mail.text}\n\n[nicht per E-Mail zugestellt: ${reason}]\n`,
      { mode: 0o600 }
    );
    for (const [i, file] of mail.attachments.entries()) {
      await writeFile(join(dir, `${String(i + 1).padStart(2, "0")}-${file.filename}`), file.content, { mode: 0o600 });
    }
    return { ok: true, via: "disk", path: dir, reason };
  } catch (error) {
    console.error("[lead] could not be delivered or stored", { reason, error });
    return { ok: false, reason };
  }
}

export async function deliverLead(mail: LeadMail): Promise<LeadDelivery> {
  const smtp = transport();
  if (!smtp) {
    console.warn("[lead] SMTP is not configured (SMTP_HOST/SMTP_USER/SMTP_PASS) — storing on disk");
    return storeOnDisk(mail, "SMTP nicht konfiguriert");
  }

  try {
    await smtp.sendMail({
      from: process.env.LEAD_MAIL_FROM ?? `AS Clinic Website <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_MAIL_TO ?? CLINIC.email,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      attachments: mail.attachments.map((a) => ({
        filename: a.filename,
        contentType: a.contentType,
        content: a.content
      }))
    });
    return { ok: true, via: "smtp" };
  } catch (error) {
    console.error("[lead] SMTP delivery failed — storing on disk", error);
    return storeOnDisk(mail, error instanceof Error ? error.message : "SMTP-Fehler");
  }
}
