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

    '/novice': {
      sl: '/novice',
      en: '/news',
    },

    '/novice/[...slug]': {
      sl: '/novice/[...slug]',
      en: '/news/[...slug]',
    },

    '/dogodki': {
      sl: '/dogodki',
      en: '/events',
    },

    '/dogodki/[...slug]': {
      sl: '/dogodki/[...slug]',
      en: '/events/[...slug]',
    },

    '/nagrade': {
      sl: '/dogodki',
      en: '/awards',
    },

    '/nagrade/[...slug]': {
      sl: '/dogodki/[...slug]',
      en: '/awards/[...slug]',
    },
  },
})
