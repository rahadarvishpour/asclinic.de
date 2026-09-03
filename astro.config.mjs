import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const locales = ['de', 'en', 'es', 'ru', 'fa', 'ar'];

export default defineConfig({
  site: 'https://asclinic-berlin.de',
  trailingSlash: 'never',
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
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          es: 'es-ES',
          ru: 'ru-RU',
          fa: 'fa-IR',
          ar: 'ar-SA'
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
