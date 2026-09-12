/** Shared between the form endpoint that sets it and the thank-you page that
 *  checks it, so the two can never drift apart on the name. */
export const LEAD_COOKIE = "as_anfrage";

/** Long enough to survive the redirect and a refresh or two, short enough that
 *  /danke does not stay open as a bookmarkable page. */
export const LEAD_COOKIE_MAX_AGE = 60 * 30;

export const LANDING_PATH = "/landing-haartransplantation-offer";

/** Where the form sends a visitor after a successful submission. The trailing
 *  slash is load-bearing: the GTM container fires the `generate-lead`
 *  conversion on a Page Path of exactly "/danke/", and that trigger lives in
 *  GTM rather than in this repo. `trailingSlash: 'ignore'` in astro.config.mjs
 *  is what keeps this URL resolving; /danke still works for anything that
 *  links to it, and the page canonicalises to the slashless spelling. */
export const THANKS_PATH = "/danke/";
