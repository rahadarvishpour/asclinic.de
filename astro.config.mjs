import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const locales = ['en', 'de', 'es', 'ru', 'fa', 'ar'];

export default defineConfig({
  site: 'https://asclinic.de',
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
  ]
});
