import type { ImageMetadata } from "astro";

/** Locally-sourced treatment photography, keyed by treatment slug.
 *
 *  Drop a `<slug>.jpg` into src/assets/treatments/ and it is picked up here
 *  automatically — no per-locale wiring needed. Astro optimises these at build
 *  time (resized + re-encoded to WebP), so the files here are masters, not the
 *  bytes shipped to the browser. Treatments without a file fall back to the
 *  Unsplash photo referenced by TREATMENTS[].photoId.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/treatments/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

export const TREATMENT_IMAGES: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [
    path.split("/").pop()!.replace(/\.[^.]+$/, ""),
    mod.default
  ])
);

export function treatmentImage(slug: string): ImageMetadata | undefined {
  return TREATMENT_IMAGES[slug];
}
