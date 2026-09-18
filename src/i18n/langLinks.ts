import { LOCALES, CONTACT_LOCALES, localePath, stripLocalePrefix, type Locale } from "./ui";
import { TREATMENT_PAGES, hasLocale } from "../data/treatmentPages";

/** Crawlable language navigation: for the page at `pathname`, the URL of the same
 *  page in every locale. Where the page is not published in a locale (the
 *  contact page, a treatment without that translation, the German-only legal
 *  pages) the link goes to that locale's homepage instead, so no link ever
 *  points at a URL that was not built. */
export function languageLinks(pathname: string) {
  const path = stripLocalePrefix(pathname.replace(/(.)\/+$/, "$1"));
  const exists = (locale: Locale): boolean => {
    if (path === "/") return true;
    if (path === "/location") return true;
    if (path === "/contact") return CONTACT_LOCALES.includes(locale);
    const slug = path.match(/^\/treatments\/([^/]+)$/)?.[1];
    if (slug) return Boolean(TREATMENT_PAGES[slug] && hasLocale(TREATMENT_PAGES[slug], locale));
    return false;
  };
  return LOCALES.map((l) => ({
    code: l.code,
    hreflang: l.hreflang,
    native: l.native,
    dir: l.dir,
    href: exists(l.code) ? localePath(l.code, path === "/" ? "" : path) : localePath(l.code),
  }));
}
