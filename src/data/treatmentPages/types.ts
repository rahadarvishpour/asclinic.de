import type { UiKey } from "../../i18n/ui";

export interface TreatmentSection {
  heading: string;
  body: string;
}

export interface TreatmentFaq {
  q: string;
  a: string;
}

export interface TreatmentPage {
  slug: string;
  title: string;
  /** categoryAnchorId: the homepage section id this treatment belongs to (e.g. "injectables"). categoryLabelKey: the UI dictionary key for its translated nav label (e.g. "nav.inject"). */
  category: { categoryLabelKey: UiKey; categoryAnchorId: string };
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroLead: string;
  imageAlt: string;
  chip: string;
  sections: TreatmentSection[];
  faqs: TreatmentFaq[];
}
