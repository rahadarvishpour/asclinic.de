/** Shared shape for the site's legal documents (Impressum, Datenschutzerklärung).
 *
 *  These are legal texts supplied by the clinic: the wording is stored verbatim
 *  and never paraphrased, shortened or translated. Blocks keep the prose free of
 *  markup so LegalDocument.astro owns the styling:
 *    p       — one paragraph
 *    ul      — bullet list (the sources use "–" dashes)
 *    address — a postal address block, one line per array entry
 */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "address"; lines: string[] };

export interface LegalSection {
  /** Stable anchor id, so single clauses can be linked from e-mails or consent dialogs. */
  id: string;
  /** Clause number, where the source document numbers its clauses. */
  number?: number;
  heading: string;
  blocks: LegalBlock[];
}
