import { defineMiddleware } from "astro:middleware";
import { LEGACY_REDIRECTS } from "./lib/legacyRedirects";

/** Permanent redirects for approved legacy URLs (see lib/legacyRedirects.ts).
 *  Only GET/HEAD are redirected, the query string is carried over, and every
 *  other request passes straight through untouched. */
export const onRequest = defineMiddleware((context, next) => {
  const { method } = context.request;
  if (method === "GET" || method === "HEAD") {
    const { pathname, search } = context.url;
    const key = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const destination = Object.hasOwn(LEGACY_REDIRECTS, key) ? LEGACY_REDIRECTS[key] : undefined;
    if (destination) return context.redirect(destination + search, 301);
  }
  return next();
});
