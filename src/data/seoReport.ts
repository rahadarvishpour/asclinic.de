/** Data for the private monthly Search Console report (src/pages/seo-bericht-….astro).
 *
 *  Update once a month:
 *   1. Append last month's totals to `months` (Search Console → Leistung,
 *      custom range = whole month, Web search).
 *   2. Add a new entry at the TOP of `reports` with that month's details.
 *   3. Set `updated` to today's date.
 *  Older reports stay below and remain readable on the page as an archive.
 */

export interface MonthTotals {
  /** YYYY-MM */
  month: string;
  clicks: number;
  impressions: number;
  /** percent, e.g. 2.2 */
  ctr: number;
  position: number;
}

export interface QueryRow {
  query: string;
  clicks: number;
  impressions: number;
  position: number;
  /** average position in the previous month, if the query appeared there */
  prevPosition?: number;
}

export interface PageRow {
  path: string;
  clicks: number;
  impressions: number;
  position: number;
}

export interface MonthlyReport {
  /** YYYY-MM */
  month: string;
  /** Short highlights shown at the top (German, client-facing). */
  highlights: string[];
  /** Points to keep an eye on next month. */
  watch: string[];
  /** What was done / is planned. */
  actions: string[];
  queries: QueryRow[];
  pages: PageRow[];
  devices: { device: string; clicks: number; impressions: number }[];
}

export const SEO_REPORT = {
  site: "asclinic.de",
  updated: "2026-10-13",
  /** Month the new website went live — marked on the charts. */
  relaunch: "2026-09",

  months: [
    { month: "2025-10", clicks: 275, impressions: 22708, ctr: 1.2, position: 11.7 },
    { month: "2025-11", clicks: 348, impressions: 25174, ctr: 1.4, position: 11.7 },
    { month: "2025-12", clicks: 377, impressions: 34430, ctr: 1.1, position: 14.0 },
    { month: "2026-01", clicks: 463, impressions: 43879, ctr: 1.1, position: 12.6 },
    { month: "2026-02", clicks: 441, impressions: 43667, ctr: 1.0, position: 10.5 },
    { month: "2026-03", clicks: 453, impressions: 57633, ctr: 0.8, position: 9.2 },
    { month: "2026-04", clicks: 388, impressions: 29612, ctr: 1.3, position: 11.4 },
    { month: "2026-05", clicks: 252, impressions: 15027, ctr: 1.7, position: 15.5 },
    { month: "2026-06", clicks: 249, impressions: 13044, ctr: 1.9, position: 14.1 },
    { month: "2026-07", clicks: 246, impressions: 11595, ctr: 2.1, position: 12.0 },
    { month: "2026-08", clicks: 272, impressions: 10778, ctr: 2.5, position: 12.7 },
    { month: "2026-09", clicks: 226, impressions: 10319, ctr: 2.2, position: 8.2 },
  ] satisfies MonthTotals[],

  reports: [
    {
      month: "2026-09",
      highlights: [
        "Im September ist die neue Website live gegangen. Die alte WordPress-Seite war im August gehackt worden; die neue Seite wurde komplett neu und sicher aufgebaut.",
        "Die durchschnittliche Position bei Google hat sich deutlich verbessert: von 12,7 im August auf 8,2 im September – der beste Wert der letzten 12 Monate.",
        "Wichtige allgemeine Suchbegriffe sind gestiegen, z. B. „haartransplantation berlin“ von Position 6,1 auf 4,6 und „hair transplant berlin“ von 8,8 auf 5,2.",
        "Rund 73 % der Klicks kommen vom Smartphone – die neue mobile Version ist daher besonders wichtig.",
      ],
      watch: [
        "Die Klicks lagen mit 226 etwas unter August (272). Nach einem Relaunch ist eine kurze Umstellungsphase normal, während Google die neuen Seiten einliest.",
        "Bei der Marken-Suche „as clinic berlin“ ist die Position von 1,2 auf 2,6 gefallen. Das beobachten wir; Ziel ist wieder Platz 1.",
        "Die Seite zur PRP-Behandlung erscheint erst auf Position ~32 und hat noch Potenzial.",
      ],
      actions: [
        "Neue, schnelle und sichere Website veröffentlicht (Deutsch, Englisch, Spanisch, Russisch, Persisch, Arabisch).",
        "Alte Adressen werden auf die neuen Seiten weitergeleitet, damit kein Google-Ranking verloren geht.",
        "Online-Terminbuchung und Anfrageformulare direkt auf den Behandlungsseiten eingebunden.",
      ],
      queries: [
        { query: "as clinic berlin", clicks: 48, impressions: 116, position: 2.6, prevPosition: 1.2 },
        { query: "haartransplantation berlin", clicks: 19, impressions: 1111, position: 4.6, prevPosition: 6.1 },
        { query: "as hair clinic berlin", clicks: 16, impressions: 51, position: 2.4, prevPosition: 1.2 },
        { query: "as clinic", clicks: 6, impressions: 25, position: 4.8, prevPosition: 4.1 },
        { query: "dilara erkan", clicks: 4, impressions: 11, position: 2.7, prevPosition: 2.8 },
        { query: "asclinic berlin", clicks: 3, impressions: 14, position: 1.1, prevPosition: 1.1 },
        { query: "hair transplant berlin", clicks: 2, impressions: 164, position: 5.2, prevPosition: 8.8 },
        { query: "berlin haartransplantation", clicks: 1, impressions: 148, position: 5.2, prevPosition: 8.7 },
        { query: "haartransplantation in berlin", clicks: 1, impressions: 106, position: 6.7 },
        { query: "haar transplantation berlin", clicks: 1, impressions: 97, position: 5.3 },
      ],
      pages: [
        { path: "/", clicks: 172, impressions: 9103, position: 6.0 },
        { path: "/about/", clicks: 24, impressions: 144, position: 6.6 },
        { path: "/prp-behandlung/", clicks: 8, impressions: 115, position: 31.6 },
        { path: "/galerie/", clicks: 6, impressions: 151, position: 6.9 },
        { path: "/augenbrauentransplantation-in-berlin/", clicks: 5, impressions: 153, position: 7.7 },
        { path: "/uber-uns", clicks: 4, impressions: 181, position: 7.3 },
        { path: "/en", clicks: 3, impressions: 99, position: 7.6 },
        { path: "/landing/barttransplantation/", clicks: 3, impressions: 14, position: 6.4 },
      ],
      devices: [
        { device: "Smartphone", clicks: 164, impressions: 4668 },
        { device: "Computer", clicks: 62, impressions: 5616 },
        { device: "Tablet", clicks: 0, impressions: 35 },
      ],
    },
  ] satisfies MonthlyReport[],
};
