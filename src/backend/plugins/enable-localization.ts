import { LocalizationConfig } from 'payload'

// This allows multilangual website.
export const enableLocalization = (): LocalizationConfig => {
  return {
    locales: [
      {
        label: {
          en: 'English',
          sl: 'Angleščina',
        },
        code: 'en',
      },
      {
        label: {
          en: 'Slovenian',
          sl: 'Slovenščina',
        },
        code: 'sl',
      },
    ],
    defaultLocale: 'sl',
    fallback: true,
  }
}
