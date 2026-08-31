import type { UiKey, Locale } from "../../i18n/ui";

export interface TreatmentSection {
  heading: string;
  body: string;
}

export interface TreatmentFaq {
  q: string;
  a: string;
}

/** A row in the "at a Glance" quick-facts table (Rule 9). */
export interface GlanceRow {
  label: string;
  value: string;
}

/** An H2 block: a heading whose first sentence directly answers it (Rule 12),
 *  optionally followed by a scannable list. */
export interface RichSection {
  heading: string;
  body: string;
  points?: string[];
}

export interface ProcessStep {
  heading: string;
  body: string;
}

export interface RelatedTreatment {
  /** Slug of another treatment page; the link and title are resolved at render time. */
  slug: string;
  blurb: string;
}

/** Who medically reviewed the page, and when.
 *
 *  Left undefined until the clinic supplies real, attributable details — an
 *  invented reviewer or date would be a YMYL trust violation, so the byline and
 *  its Physician schema simply do not render while this is absent. */
export interface MedicalReview {
  reviewer: string;
  credentials: string;
  reviewedOn: string;
  updatedOn: string;
}

/** Long-form page copy structured for search, answer engines and generative
 *  engines: a self-contained direct answer, scannable facts, question-shaped
 *  headings, an explicit local section and related-treatment links.
 *
 *  Optional — a treatment without it renders the shorter legacy layout, so this
 *  can be rolled out one treatment at a time. */
export interface TreatmentArticle {
  /** "[Treatment] in Berlin" — the single H1 for the page. */
  h1: string;
  heroIntro: string;
  /** "What is X?" — must stand alone if lifted out of the page. */
  directAnswer: RichSection;
  glanceHeading: string;
  glance: GlanceRow[];
  /** Uses, suitability, contraindications, risks, aftercare, results, longevity. */
  sections: RichSection[];
  process: { heading: string; steps: ProcessStep[] };
  /** "[Treatment] in Berlin at AS Clinic" — carries the real NAP details. */
  local: RichSection;
  why: { heading: string; points: ProcessStep[] };
  faqHeading: string;
  faqs: TreatmentFaq[];
  relatedHeading: string;
  related: RelatedTreatment[];
  ctaHeading: string;
  ctaBody: string;
  /** ISO date used for schema.org dateModified. */
  updated: string;
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
  /** Present once the treatment has been rewritten to the long-form structure. */
  article?: TreatmentArticle;
}

export interface TreatmentPage {
  slug: string;
  /** categoryAnchorId: the homepage section id this treatment belongs to (e.g. "injectables"). categoryLabelKey: the UI dictionary key for its translated nav label (e.g. "nav.inject"). */
  category: { categoryLabelKey: UiKey; categoryAnchorId: string };
  /** Full page copy per locale — every locale is translated, so a German page never falls back to English body text. */
  content: Record<Locale, TreatmentContent>;
  /** Undefined until the clinic supplies a named reviewer; see MedicalReview. */
  review?: MedicalReview;
}
