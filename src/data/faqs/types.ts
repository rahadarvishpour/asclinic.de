export interface FaqItem {
  q: string;
  a: string;
}

export type FaqCategory = "inject" | "hair" | "surgery";

/** The three physician-written FAQ sets shown on the homepage, in one language. */
export type FaqSet = Record<FaqCategory, FaqItem[]>;
