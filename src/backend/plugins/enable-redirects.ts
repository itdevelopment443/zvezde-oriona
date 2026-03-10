import { redirectsPlugin } from '@payloadcms/plugin-redirects'

export const enableRedirects = () => {
  return redirectsPlugin({
    collections: ['pages', 'news'],
    overrides: {
      admin: {
        group: 'Site Management',
      },
    },
    redirectTypes: ['301', '302'],
  })
}
