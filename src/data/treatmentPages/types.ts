import type { UiKey, Locale } from "../../i18n/ui";

export interface TreatmentSection {
  heading: string;
  body: string;
}

export interface TreatmentFaq {
  q: string;
  a: string;
}

/** Everything on a treatment detail page that is language-dependent. */
export interface TreatmentContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroLead: string;
  imageAlt: string;
  chip: string;
  sections: TreatmentSection[];
  faqs: TreatmentFaq[];
}

export interface TreatmentPage {
  slug: string;
  /** categoryAnchorId: the homepage section id this treatment belongs to (e.g. "injectables"). categoryLabelKey: the UI dictionary key for its translated nav label (e.g. "nav.inject"). */
  category: { categoryLabelKey: UiKey; categoryAnchorId: string };
  /** Full page copy per locale — every locale is translated, so a German page never falls back to English body text. */
  content: Record<Locale, TreatmentContent>;
}
