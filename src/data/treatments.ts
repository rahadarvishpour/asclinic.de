import type { UiKey } from "../i18n/ui";

export function unsplash(id: string, w = 900, q = 70) {
  return `https://images.unsplash.com/${id}?fm=jpg&q=${q}&w=${w}&auto=format&fit=crop`;
}

/** srcset for a remote Unsplash photo, so the browser downloads a thumbnail on
 *  small screens instead of the full-width file. Pair with a `sizes` attribute
 *  describing how wide the image actually renders. */
export function unsplashSrcSet(id: string, widths: number[], q = 70) {
  return widths.map((w) => `${unsplash(id, w, q)} ${w}w`).join(", ");
}

export interface Treatment {
  slug: string;
  photoId: string;
}

// Thumbnails grid — Section 01 (Aesthetics & specialist injections). Card titles
// and alt text come from the treatment's own detail-page copy (TREATMENT_PAGES),
// so they are translated once and never drift between grid and detail page.
// Photography under the Unsplash License (no attribution required); see
// the credit line rendered under the grid for the photographer roster.
export const TREATMENTS: Treatment[] = [
  { slug: "lip-filler", photoId: "photo-1551184451-76b762941ad6" },
  { slug: "botox", photoId: "photo-1512290923902-8a9f81dc236c" },
  { slug: "mesobotox", photoId: "photo-1616394584738-fc6e612e71b9" },
  { slug: "eyes-mesotherapy", photoId: "photo-1555820585-c5ae44394b79" },
  { slug: "cheek-filler", photoId: "photo-1526413232644-8a40f03cc03b" },
  { slug: "jawline-filler", photoId: "photo-1581182815808-b6eb627a8798" },
  { slug: "8-point-lift", photoId: "photo-1552693673-1bf958298935" },
  { slug: "full-face-botox", photoId: "photo-1570172619644-dfd03ed5d881" },
  { slug: "fat-dissolving", photoId: "photo-1544717304-a2db4a7b16ee" },
  { slug: "skin-booster", photoId: "photo-1573461160327-b450ce3d8e7f" },
  { slug: "fillart", photoId: "photo-1540555700478-4be289fbecef" },
  { slug: "profhilo", photoId: "photo-1603274737277-f43f54446c7b" },
  { slug: "bio-lifting", photoId: "photo-1501644898242-cfea317d7faf" },
  { slug: "mesotherapy-mesocan", photoId: "photo-1616391182219-e080b4d1043a" },
  { slug: "hair-meso", photoId: "photo-1785860333038-5c6dce348544" },
  { slug: "prp-meso-hair", photoId: "photo-1785861001619-b263ebd4e615" }
];

/** Homepage cards whose copy lives in the UI dictionary, so every locale renders
 *  in its own language. The keys resolve through t(locale, key). */
export interface HairService {
  slug: string;
  photoId: string;
  /** Photographer's name; the surrounding "Photo by … on Unsplash" wording is translated at render time. */
  photographer: string;
  creditHref: string;
  titleKey: UiKey;
  altKey: UiKey;
  descKey: UiKey;
  linkKey: UiKey;
}

export const HAIR_SERVICES: HairService[] = [
  {
    slug: "hair-transplant",
    photoId: "photo-1643837833100-8b2ebd7127bc",
    photographer: "Amr Taha",
    creditHref: "https://unsplash.com/@amr_taha?utm_source=asclinic&utm_medium=referral",
    titleKey: "hair.s1.title",
    altKey: "hair.s1.alt",
    descKey: "hair.s1.desc",
    linkKey: "hair.link1"
  },
  {
    slug: "eyebrow-transplant",
    photoId: "photo-1564278692313-b2d65996fc93",
    photographer: "takwa abdo",
    creditHref: "https://unsplash.com/@takwa?utm_source=asclinic&utm_medium=referral",
    titleKey: "hair.s2.title",
    altKey: "hair.s2.alt",
    descKey: "hair.s2.desc",
    linkKey: "hair.link2"
  },
  {
    slug: "beard-transplant",
    photoId: "photo-1475669913832-fd187510b578",
    photographer: "Vinicius Amano",
    creditHref: "https://unsplash.com/@viniciusamano?utm_source=asclinic&utm_medium=referral",
    titleKey: "hair.s3.title",
    altKey: "hair.s3.alt",
    descKey: "hair.s3.desc",
    linkKey: "hair.link3"
  }
];

export interface SurgeryProcedure {
  slug: string;
  photoId: string;
  /** Photographer's name; the surrounding "Photo by … on Unsplash" wording is translated at render time. */
  photographer: string;
  creditHref: string;
  titleKey: UiKey;
  altKey: UiKey;
  chipKey: UiKey;
  descKey: UiKey;
}

export const SURGERY_PROCEDURES: SurgeryProcedure[] = [
  {
    slug: "blepharoplasty",
    photoId: "photo-1761819922656-d1b77eef49c0",
    photographer: "Corinne Sawers",
    creditHref: "https://unsplash.com/@corinneclionagroup?utm_source=asclinic&utm_medium=referral",
    titleKey: "surg.s1.title",
    altKey: "surg.s1.alt",
    chipKey: "surg.s1.chip",
    descKey: "surg.s1.desc"
  },
  {
    slug: "direct-lift",
    photoId: "photo-1761718209852-54ca4210183e",
    photographer: "kimia kazemi",
    creditHref: "https://unsplash.com/@kimick?utm_source=asclinic&utm_medium=referral",
    titleKey: "surg.s2.title",
    altKey: "surg.s2.alt",
    chipKey: "surg.s2.chip",
    descKey: "surg.s2.desc"
  }
];

export interface GallerySlide {
  slug: string;
  /** Unsplash id — used only when the slide has no local image. */
  photoId?: string;
  /** Photographer's name; the surrounding "Photo by … on Unsplash" wording is translated at render time. */
  photographer?: string;
  creditHref?: string;
  /** Filename (without extension) in src/assets/gallery/. Takes priority over photoId. */
  localSlug?: string;
  /** "contain" preserves the whole frame. Required for before/after comparisons,
   *  which a cover-crop would slice through the middle on a narrow screen. */
  fit?: "cover" | "contain";
  tagKey: UiKey;
  titleKey: UiKey;
  subKey: UiKey;
  altKey?: UiKey;
}

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    slug: "hair-transplant-before-after",
    localSlug: "hair-transplant-before-after",
    fit: "contain",
    tagKey: "gal.ba.tag", titleKey: "gal.ba.title", subKey: "gal.ba.sub", altKey: "gal.ba.alt"
  },
  {
    slug: "lip-contour",
    photoId: "photo-1570172619644-dfd03ed5d881",
    photographer: "Rosa Rafael",
    creditHref: "https://unsplash.com/@rosarafael?utm_source=asclinic&utm_medium=referral",
    tagKey: "gal.s1.tag", titleKey: "gal.s1.title", subKey: "gal.s1.sub"
  },
  {
    slug: "transplant-suite",
    photoId: "photo-1616391182219-e080b4d1043a",
    photographer: "Sam Moghadam",
    creditHref: "https://unsplash.com/@sammoghadam?utm_source=asclinic&utm_medium=referral",
    tagKey: "gal.s2.tag", titleKey: "gal.s2.title", subKey: "gal.s2.sub"
  },
  {
    slug: "upper-blepharoplasty",
    photoId: "photo-1555820585-c5ae44394b79",
    photographer: "Sunny Ng",
    creditHref: "https://unsplash.com/@sunnysmng?utm_source=asclinic&utm_medium=referral",
    tagKey: "gal.s3.tag", titleKey: "gal.s3.title", subKey: "gal.s3.sub"
  },
  {
    slug: "midface-lift",
    photoId: "photo-1552693673-1bf958298935",
    photographer: "karelys Ruiz",
    creditHref: "https://unsplash.com/@karelysruiz?utm_source=asclinic&utm_medium=referral",
    tagKey: "gal.s4.tag", titleKey: "gal.s4.title", subKey: "gal.s4.sub"
  },
  {
    slug: "recovery-protocol",
    photoId: "photo-1616394584738-fc6e612e71b9",
    photographer: "engin akyurt",
    creditHref: "https://unsplash.com/@enginakyurt?utm_source=asclinic&utm_medium=referral",
    tagKey: "gal.s5.tag", titleKey: "gal.s5.title", subKey: "gal.s5.sub"
  }
];

export const PHOTO_CREDITS =
  "Kamila Maciejewska, Antonika Chanel, engin akyurt, Sunny Ng, Aiony Haust, Fleur Kaan, karelys Ruiz, Rosa Rafael, Icons8 Team, Enecta, Camille Brodard, Content Pixie, Drew Dizzy Graham, Sam Moghadam, Sum Sum, Corinne Sawers, kimia kazemi";
