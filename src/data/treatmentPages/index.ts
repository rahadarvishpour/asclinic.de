import type { TreatmentPage, TreatmentContent } from "./types";
import type { Locale } from "../../i18n/ui";
import { LIP_FILLER } from "./lip-filler";
import { BOTOX } from "./botox";
import { MESOBOTOX } from "./mesobotox";
import { EYES_MESOTHERAPY } from "./eyes-mesotherapy";
import { CHEEK_FILLER } from "./cheek-filler";
import { JAWLINE_FILLER } from "./jawline-filler";
import { EIGHT_POINT_LIFT } from "./8-point-lift";
import { FULL_FACE_BOTOX } from "./full-face-botox";
import { FAT_DISSOLVING } from "./fat-dissolving";
import { SKIN_BOOSTER } from "./skin-booster";
import { FILLART } from "./fillart";
import { PROFHILO } from "./profhilo";
import { BIO_LIFTING } from "./bio-lifting";
import { MESOTHERAPY_MESOCAN } from "./mesotherapy-mesocan";
import { HAIR_MESO } from "./hair-meso";
import { PRP_MESO_HAIR } from "./prp-meso-hair";
import { EYEBROW_TRANSPLANT } from "./eyebrow-transplant";
import { BEARD_TRANSPLANT } from "./beard-transplant";
import { BLEPHAROPLASTY } from "./blepharoplasty";
import { DIRECT_LIFT } from "./direct-lift";

export const TREATMENT_PAGES: Record<string, TreatmentPage> = {
  [LIP_FILLER.slug]: LIP_FILLER,
  [BOTOX.slug]: BOTOX,
  [MESOBOTOX.slug]: MESOBOTOX,
  [EYES_MESOTHERAPY.slug]: EYES_MESOTHERAPY,
  [CHEEK_FILLER.slug]: CHEEK_FILLER,
  [JAWLINE_FILLER.slug]: JAWLINE_FILLER,
  [EIGHT_POINT_LIFT.slug]: EIGHT_POINT_LIFT,
  [FULL_FACE_BOTOX.slug]: FULL_FACE_BOTOX,
  [FAT_DISSOLVING.slug]: FAT_DISSOLVING,
  [SKIN_BOOSTER.slug]: SKIN_BOOSTER,
  [FILLART.slug]: FILLART,
  [PROFHILO.slug]: PROFHILO,
  [BIO_LIFTING.slug]: BIO_LIFTING,
  [MESOTHERAPY_MESOCAN.slug]: MESOTHERAPY_MESOCAN,
  [HAIR_MESO.slug]: HAIR_MESO,
  [PRP_MESO_HAIR.slug]: PRP_MESO_HAIR,
  [EYEBROW_TRANSPLANT.slug]: EYEBROW_TRANSPLANT,
  [BEARD_TRANSPLANT.slug]: BEARD_TRANSPLANT,
  [BLEPHAROPLASTY.slug]: BLEPHAROPLASTY,
  [DIRECT_LIFT.slug]: DIRECT_LIFT
};

/** Locale-resolved page copy. The English fallback exists only so a caller that
 *  reaches for a locale this treatment is not published in still renders. */
export function treatmentContent(page: TreatmentPage, locale: Locale): TreatmentContent {
  return page.content[locale] ?? page.content.en;
}

/** Whether this treatment is published in `locale` — used both to decide which
 *  URLs exist and which hreflang alternates may be advertised. */
export function hasLocale(page: TreatmentPage, locale: Locale): boolean {
  return Boolean(page.content[locale]);
}

/** The treatments that have a detail page in `locale`. */
export function treatmentPagesFor(locale: Locale): TreatmentPage[] {
  return Object.values(TREATMENT_PAGES).filter((page) => hasLocale(page, locale));
}

export type { TreatmentPage, TreatmentContent } from "./types";
