/** Legacy (WordPress / successor-site) German URLs that map 1:1 onto a current page.
 *
 *  Kept out of `astro.config.mjs` `redirects` because those drop the query
 *  string; `src/middleware.ts` serves these as 301s and re-appends it.
 *  Keys are slashless — the middleware strips a trailing slash before looking
 *  up, so /kontakt and /kontakt/ both match.
 *
 *  Approved list only. Deliberately NOT here: the old blog articles, the
 *  general mesotherapy guide (/mesotherapie-berlin/), /mesotherapie/, /faq/,
 *  /uber-uns/, /about/, /leistungen/, /landing/mesotherapie, cost / Micro-FUE /
 *  CMDHI / mesotherapy-vs-PRP / before-after articles, WordPress archives and
 *  unsupported treatments — those keep answering 404. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // Hair transplant
  "/leistungen/haartransplantation": "/treatments/hair-transplant",
  "/landing/haartransplantation": "/treatments/hair-transplant",
  "/haartransplantation": "/treatments/hair-transplant",
  "/haartransplantation-in-berlin": "/treatments/hair-transplant",
  // Eyebrow transplant
  "/leistungen/augenbrauentransplantation": "/treatments/eyebrow-transplant",
  "/landing/augenbrauentransplantation": "/treatments/eyebrow-transplant",
  "/augenbrauentransplantation": "/treatments/eyebrow-transplant",
  "/augenbrauentransplantation-in-berlin": "/treatments/eyebrow-transplant",
  // Beard transplant
  "/leistungen/barttransplantation": "/treatments/beard-transplant",
  "/landing/barttransplantation": "/treatments/beard-transplant",
  "/barttransplantation-in-berlin": "/treatments/beard-transplant",
  "/barttransplantation-in-berlin-deutschland": "/treatments/beard-transplant",
  // Hair mesotherapy
  "/leistungen/mesotherapie": "/treatments/hair-meso",
  "/mesotherapie-haare": "/treatments/hair-meso",
  // PRP hair treatment
  "/leistungen/prp-behandlung": "/treatments/prp-meso-hair",
  "/landing/prp-behandlung": "/treatments/prp-meso-hair",
  "/prp-haarbehandlung-in-berlin-natuerlicher-haarwuchs-eigenbluttherapie": "/treatments/prp-meso-hair",
  // Other
  "/kontakt": "/contact",
  "/buchung": "/contact",
  "/cookie-richtlinie-eu": "/datenschutz",
  "/sitemap.xml": "/sitemap-index.xml",
  "/sitemap_index.xml": "/sitemap-index.xml",
  // Legacy English-slug About URL -> the canonical German "Über uns" page (added only after /uber-uns was live).
  // The middleware strips a trailing slash before lookup, so this covers /about and /about/.
  "/about": "/uber-uns",
};
