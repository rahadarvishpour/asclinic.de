import type { Locale } from "../../i18n/ui";
import type { FaqSet } from "./types";
import { FAQ_EN } from "./en";
import { FAQ_DE } from "./de";
import { FAQ_ES } from "./es";
import { FAQ_RU } from "./ru";
import { FAQ_FA } from "./fa";
import { FAQ_AR } from "./ar";

/** 20 questions per service category, written by the clinic's physicians and
 *  translated for every locale the site ships. */
export const FAQ: Record<Locale, FaqSet> = {
  en: FAQ_EN,
  de: FAQ_DE,
  es: FAQ_ES,
  ru: FAQ_RU,
  fa: FAQ_FA,
  ar: FAQ_AR
};

export function faqFor(locale: Locale): FaqSet {
  return FAQ[locale] ?? FAQ_EN;
}

export type { FaqItem, FaqCategory, FaqSet } from "./types";
