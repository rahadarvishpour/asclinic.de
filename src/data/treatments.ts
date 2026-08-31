export function unsplash(id: string, w = 900, q = 70) {
  return `https://images.unsplash.com/${id}?fm=jpg&q=${q}&w=${w}&auto=format&fit=crop`;
}

export interface Treatment {
  slug: string;
  title: string;
  alt: string;
  photoId: string;
}

// Thumbnails grid — Section 01 (Aesthetics & specialist injections).
// Photography under the Unsplash License (no attribution required); see
// the credit line rendered under the grid for the photographer roster.
export const TREATMENTS: Treatment[] = [
  { slug: "lip-filler", title: "Lip Filler", alt: "Close-up of natural lip filler result", photoId: "photo-1551184451-76b762941ad6" },
  { slug: "botox", title: "Botox", alt: "Smooth forehead after botox treatment", photoId: "photo-1512290923902-8a9f81dc236c" },
  { slug: "mesobotox", title: "Mesobotox", alt: "Fine-line mesobotox treatment area", photoId: "photo-1616394584738-fc6e612e71b9" },
  { slug: "eyes-mesotherapy", title: "Eyes Mesotherapy", alt: "Under-eye mesotherapy treatment area", photoId: "photo-1555820585-c5ae44394b79" },
  { slug: "cheek-filler", title: "Cheeks Filler", alt: "Midface cheek filler contour", photoId: "photo-1526413232644-8a40f03cc03b" },
  { slug: "jawline-filler", title: "Jawline Filler", alt: "Defined jawline filler result", photoId: "photo-1581182815808-b6eb627a8798" },
  { slug: "8-point-lift", title: "8 Point Lift Filler", alt: "Midface 8-point lift treatment", photoId: "photo-1552693673-1bf958298935" },
  { slug: "full-face-botox", title: "Full Face Botox", alt: "Full-face botox treatment plan", photoId: "photo-1570172619644-dfd03ed5d881" },
  { slug: "fat-dissolving", title: "Fat Dissolving Injection", alt: "Submental fat-dissolving injection area", photoId: "photo-1544717304-a2db4a7b16ee" },
  { slug: "skin-booster", title: "Skin Booster", alt: "Hydrated glowing skin after skin booster", photoId: "photo-1573461160327-b450ce3d8e7f" },
  { slug: "fillart", title: "Fillart", alt: "Layered Fillart facial contouring technique", photoId: "photo-1540555700478-4be289fbecef" },
  { slug: "profhilo", title: "Profhilo", alt: "Bio-remodelling Profhilo treatment", photoId: "photo-1603274737277-f43f54446c7b" },
  { slug: "bio-lifting", title: "Bio Lifting", alt: "Bio-lifting skin laxity treatment", photoId: "photo-1501644898242-cfea317d7faf" },
  { slug: "mesotherapy-mesocan", title: "Mesotherapy · Mesocan", alt: "Mesocan mesotherapy vitamin infusion", photoId: "photo-1616391182219-e080b4d1043a" },
  { slug: "hair-meso", title: "Hair Meso", alt: "Scalp hair-meso vitamin treatment", photoId: "photo-1785860333038-5c6dce348544" },
  { slug: "prp-meso-hair", title: "PRP Meso Hair", alt: "PRP meso hair injection into scalp", photoId: "photo-1785861001619-b263ebd4e615" }
];

export interface HairService {
  slug: string;
  slotId: string;
  title: string;
  alt: string;
  photoId: string;
  descriptionKey: string;
  linkKey: string;
}

export const HAIR_SERVICES = [
  {
    slug: "hair-transplant",
    title: "Hair Transplant",
    alt: "Hair transplant donor area close-up",
    photoId: "photo-1643837833100-8b2ebd7127bc",
    credit: "Photo by Amr Taha on Unsplash",
    creditHref: "https://unsplash.com/@amr_taha?utm_source=asclinic&utm_medium=referral",
    description: "Single-follicle extraction and placement, 1,800–4,500 grafts, one sitting under local anaesthetic.",
    link: "Plan my grafts"
  },
  {
    slug: "eyebrow-transplant",
    title: "Eyebrow Transplant",
    alt: "Eyebrow transplant close-up detail",
    photoId: "photo-1564278692313-b2d65996fc93",
    credit: "Photo by takwa abdo on Unsplash",
    creditHref: "https://unsplash.com/@takwa?utm_source=asclinic&utm_medium=referral",
    description: "Single hairs laid almost flat to the skin, following the natural sweep of each brow section.",
    link: "Design my brows"
  },
  {
    slug: "beard-transplant",
    title: "Beard Transplant",
    alt: "Beard transplant portrait, close-cropped facial hair",
    photoId: "photo-1475669913832-fd187510b578",
    credit: "Photo by Vinicius Amano on Unsplash",
    creditHref: "https://unsplash.com/@viniciusamano?utm_source=asclinic&utm_medium=referral",
    description: "Finer punches, steeper angles and sparser placement, so density reads as stubble rather than a patch.",
    link: "Map my beard"
  }
] as const;

export const SURGERY_PROCEDURES = [
  {
    slug: "blepharoplasty",
    title: "Blepharoplasty",
    alt: "Eyelid surgery clinical portrait",
    photoId: "photo-1761819922656-d1b77eef49c0",
    credit: "Photo by Corinne Sawers on Unsplash",
    creditHref: "https://unsplash.com/@corinneclionagroup?utm_source=asclinic&utm_medium=referral",
    chip: "Theatre · 45–120 min",
    description: "Upper and lower eyelid surgery: hooded skin removed through the natural crease, fat pads repositioned rather than stripped. Socially presentable at day 10–14."
  },
  {
    slug: "direct-lift",
    title: "Direct Lift",
    alt: "Direct lift facial assessment",
    photoId: "photo-1761718209852-54ca4210183e",
    credit: "Photo by kimia kazemi on Unsplash",
    creditHref: "https://unsplash.com/@kimick?utm_source=asclinic&utm_medium=referral",
    chip: "Theatre · 60–90 min",
    description: "A precise excision above the brow or along the jaw that lifts tissue directly — chosen where threads or filler cannot hold the weight of real laxity."
  }
] as const;

export const GALLERY_SLIDES = [
  { slug: "lip-contour", tag: "Injectables", title: "Lip contour, 0.8 ml", sub: "Two weeks after · single session",
    photoId: "photo-1570172619644-dfd03ed5d881", credit: "Photo by Rosa Rafael on Unsplash", creditHref: "https://unsplash.com/@rosarafael?utm_source=asclinic&utm_medium=referral" },
  { slug: "transplant-suite", tag: "Hair", title: "The transplant suite", sub: "Where every graft session begins",
    photoId: "photo-1616391182219-e080b4d1043a", credit: "Photo by Sam Moghadam on Unsplash", creditHref: "https://unsplash.com/@sammoghadam?utm_source=asclinic&utm_medium=referral" },
  { slug: "upper-blepharoplasty", tag: "Surgery", title: "Upper blepharoplasty", sub: "Week 6 · local anaesthetic",
    photoId: "photo-1555820585-c5ae44394b79", credit: "Photo by Sunny Ng on Unsplash", creditHref: "https://unsplash.com/@sunnysmng?utm_source=asclinic&utm_medium=referral" },
  { slug: "midface-lift", tag: "Injectables", title: "8-point midface lift", sub: "Day 14 · 3 ml total",
    photoId: "photo-1552693673-1bf958298935", credit: "Photo by karelys Ruiz on Unsplash", creditHref: "https://unsplash.com/@karelysruiz?utm_source=asclinic&utm_medium=referral" },
  { slug: "recovery-protocol", tag: "Aftercare", title: "Recovery protocol", sub: "Four scheduled reviews, six weeks of access",
    photoId: "photo-1616394584738-fc6e612e71b9", credit: "Photo by engin akyurt on Unsplash", creditHref: "https://unsplash.com/@enginakyurt?utm_source=asclinic&utm_medium=referral" }
] as const;

export const PHOTO_CREDITS =
  "Kamila Maciejewska, Antonika Chanel, engin akyurt, Sunny Ng, Aiony Haust, Fleur Kaan, karelys Ruiz, Rosa Rafael, Icons8 Team, Enecta, Camille Brodard, Content Pixie, Drew Dizzy Graham, Sam Moghadam, Sum Sum, Corinne Sawers, kimia kazemi";
