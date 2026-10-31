import { defineMiddleware } from "astro:middleware";
import { LEGACY_REDIRECTS } from "./lib/legacyRedirects";

/** Permanent redirects for approved legacy URLs (see lib/legacyRedirects.ts).
 *  Only GET/HEAD are redirected, the query string is carried over, and every
 *  other request passes straight through untouched. */
export const onRequest = defineMiddleware((context, next) => {
  const { method } = context.request;
  if (method === "GET" || method === "HEAD") {
    const { pathname, search } = context.url;
    let path = pathname;
    // Persian legacy slugs arrive percent-encoded; the table holds them decoded.
    try { path = decodeURIComponent(pathname); } catch { /* malformed: keep raw */ }
    const key = path.length > 1 ? path.replace(/\/+$/, "") : path;
    const destination = Object.hasOwn(LEGACY_REDIRECTS, key) ? LEGACY_REDIRECTS[key] : undefined;
    if (destination) {
      // The query belongs before any #fragment (e.g. /galerie -> /#results),
      // otherwise it is swallowed into the fragment and never reaches analytics.
      const hashAt = destination.indexOf("#");
      const target = hashAt === -1
        ? destination + search
        : destination.slice(0, hashAt) + search + destination.slice(hashAt);
      return context.redirect(target, 301);
    }
  }
  return next();
});
