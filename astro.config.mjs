import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const locales = ['de', 'en', 'es', 'ru', 'fa', 'ar'];

// Every page declares a slashless <link rel="canonical"> (the site root, "/",
// excepted). `trailingSlash: 'ignore'` makes the sitemap plugin emit a trailing
// slash on every path, which would list 100+ URLs whose canonical is a
// different URL — so the sitemap is rewritten to the canonical spelling.
const canonicalForm = (url) => {
  const u = new URL(url);
  if (u.pathname.length > 1) u.pathname = u.pathname.replace(/\/+$/, '');
  return u.toString();
};

export default defineConfig({
  site: 'https://asclinic.de',
  // 'ignore' rather than 'never' so /danke/ resolves as well as /danke. The GTM
  // container fires the `generate-lead` conversion on a Page Path of exactly
  // "/danke/", and that trigger lives in GTM rather than in this repo, so the
  // URL the visitor lands on has to carry the slash — a redirect to the
  // slashless form would rewrite the address bar and lose the conversion.
  // Every page still declares a slashless <link rel="canonical">, so the pair
  // of spellings stays one URL as far as search engines are concerned.
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'de',
    locales,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  // German is now the unprefixed default locale, so the old German URLs under
  // /de/* point at their new home at the site root rather than 404-ing.
  redirects: {
    '/de': '/',
    '/de/location': '/location',
    '/de/treatments/[slug]': '/treatments/[slug]',
    // The legal/contact pages were reachable under /de/ before German moved to
    // the site root. Answered with a permanent (301) redirect by the server.
    '/de/contact': { status: 301, destination: '/contact' },
    '/de/impressum': { status: 301, destination: '/impressum' },
    '/de/datenschutz': { status: 301, destination: '/datenschutz' },
  },

  // The node adapter only trusts the Host / X-Forwarded-Host of a request when
  // the domain is listed here — otherwise `Astro.url` falls back to
  // http://localhost. That matters for the landing-page form: Astro's built-in
  // CSRF guard (security.checkOrigin, on by default) compares the browser's
  // Origin header against `Astro.url.origin`, so without these entries every
  // form POST through Caddy would be rejected as cross-site.
  security: {
    allowedDomains: [
      { hostname: 'asclinic.de', protocol: 'https' },
      { hostname: 'www.asclinic.de', protocol: 'https' },
      { hostname: 'asclinic-berlin.de', protocol: 'https' },
      { hostname: 'www.asclinic-berlin.de', protocol: 'https' },
      // Local runs of the built server (npm start) and Caddy's upstream health checks.
      { hostname: 'localhost', protocol: 'http' },
      { hostname: '127.0.0.1', protocol: 'http' },
    ],
  },

  integrations: [
    sitemap({
      // The paid-traffic landing page and its thank-you page carry
      // `noindex` — keeping them out of the sitemap too avoids advertising
      // URLs we are asking search engines to ignore.
      filter: (page) => !/\/(landing-haartransplantation-offer|danke)\/?$/.test(page),
      // hreflang codes in the sitemap must match the <link rel="alternate"
      // hreflang> tags in each page's HTML (bare language codes plus x-default,
      // see BaseLayout.astro). Deliberately no <lastmod>: the pages have no
      // per-URL modification date to report truthfully.
      serialize: (item) => {
        if (!item.links) return { ...item, url: canonicalForm(item.url) };
        const links = item.links.map((l) => ({ ...l, url: canonicalForm(l.url) }));
        // x-default = German page when it exists for this URL, else the first alternate (same rule as BaseLayout).
        const fallback = links.find((l) => l.lang === 'de') ?? links[0];
        return { ...item, url: canonicalForm(item.url), links: [...links, { ...fallback, lang: 'x-default' }] };
      },
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de',
          en: 'en',
          es: 'es',
          ru: 'ru',
          fa: 'fa',
          ar: 'ar'
        }
      }
    })
  ],
  // Every page is prerendered at build time; the Node server just serves the
  // built output. Caddy terminates TLS on :443 and reverse-proxies to it.
  adapter: node({ mode: 'standalone' }),

  server: {
    host: '127.0.0.1',
    port: Number(process.env.PORT) || 4321,
  },
  vite: {
    server: {
      allowedHosts: [
        'asclinic-berlin.de',
        'www.asclinic-berlin.de',
        'asclinic.de',
        'www.asclinic.de',
      ],
      // The browser reaches us on :443, not on the port Vite binds.
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  },
});
