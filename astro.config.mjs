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

  integrations: [
    sitemap({
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
