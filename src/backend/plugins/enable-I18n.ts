import { Config } from 'payload'
// import { sl } from 'payload/i18n/sl'
import { en } from 'payload/i18n/en'

type I18nConfig = Config['i18n']

// This translates Payload CMS dashboard.
export const enableI18n = (): I18nConfig => {
  return {
    supportedLanguages: { en },
    fallbackLanguage: 'en',
  }
}
