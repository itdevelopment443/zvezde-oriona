import { i18n } from '@/i18n/i18n.config'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localeDetection: false,
  pathnames: {
    '/': '/',

    '/[...slug]': {
      sl: '/[...slug]',
      en: '/[...slug]',
    },

    '/news': {
      sl: '/novice',
      en: '/news',
    },

    '/news/[...slug]': {
      sl: '/novice/[...slug]',
      en: '/news/[...slug]',
    },
  },
})
