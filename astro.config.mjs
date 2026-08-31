import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const locales = ['en', 'de', 'es', 'ru', 'fa', 'ar'];

export default defineConfig({
  site: 'https://asclinic-berlin.de',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          de: 'de-DE',
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
