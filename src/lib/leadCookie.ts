/** Shared between the form endpoint that sets it and the thank-you page that
 *  checks it, so the two can never drift apart on the name. */
export const LEAD_COOKIE = "as_anfrage";

/** Long enough to survive the redirect and a refresh or two, short enough that
 *  /danke does not stay open as a bookmarkable page. */
export const LEAD_COOKIE_MAX_AGE = 60 * 30;

export const LANDING_PATH = "/landing-haartransplantation-offer";
export const THANKS_PATH = "/danke";
