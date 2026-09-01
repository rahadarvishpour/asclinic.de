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

/** A contextual internal link offered under a section body: a treatment `slug`,
 *  a homepage section `anchor`, or any other site `path` — each resolved to the
 *  reader's own locale, so the anchor text describes the destination rather than
 *  repeating "here". */
export interface SectionLink {
  label: string;
  slug?: string;
  anchor?: string;
  path?: string;
}

/** A two-column comparison ("this treatment vs. that one"), for questions that
 *  are genuinely about a difference rather than a list. */
export interface CompareTable {
  headings: [string, string];
  rows: [string, string][];
}

/** An H2 block: a heading whose first sentence directly answers it (Rule 12),
 *  optionally followed by a scannable list. */
export interface RichSection {
  heading: string;
  body: string;
  points?: string[];
  compare?: CompareTable;
  links?: SectionLink[];
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
  /** Further intro paragraphs under the lead, for pages whose opening needs more
   *  than one paragraph to set out the approach before the first H2. */
  heroBody?: string[];
  /** "What is X?" — must stand alone if lifted out of the page. */
  directAnswer: RichSection;
  glanceHeading: string;
  glance: GlanceRow[];
  /** Uses, suitability, contraindications, risks, aftercare, results, longevity. */
  sections: RichSection[];
  process: { heading: string; steps: ProcessStep[] };
  /** Sections that only make sense once the reader knows how the appointment
   *  runs — results, healing, risks, aftercare — rendered after the steps. */
  sectionsAfterProcess?: RichSection[];
  /** "[Treatment] in Berlin at AS Clinic" — carries the real NAP details. */
  local: RichSection;
  why: { heading: string; points: ProcessStep[] };
  faqHeading: string;
  faqs: TreatmentFaq[];
  relatedHeading: string;
  related: RelatedTreatment[];
  ctaHeading: string;
  ctaBody: string;
  /** Closing note that the page is general information, not individual medical
   *  advice. Rendered last, in muted type. */
  disclaimer?: RichSection;
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
  /** Full page copy per locale. Locales are listed only when the copy for them
   *  actually exists: a treatment offered in fewer languages simply has no page
   *  at the missing locales' URLs, rather than falling back to English body text
   *  under a foreign `lang` attribute. English is always present. */
  content: Partial<Record<Locale, TreatmentContent>> & { en: TreatmentContent };
  /** Undefined until the clinic supplies a named reviewer; see MedicalReview. */
  review?: MedicalReview;
}
