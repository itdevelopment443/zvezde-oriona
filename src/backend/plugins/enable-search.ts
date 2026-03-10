import { searchPlugin } from '@payloadcms/plugin-search'
import { createExcerpt } from '../fields/non-localized/text/create-excerpt'
import { createSlug } from '../fields/non-localized/text/create-slug'
import { createTitle } from '../fields/non-localized/text/create-title'

export const enableSearch = () => {
  return searchPlugin({
    collections: ['pages', 'news'],
    searchOverrides: {
      admin: {
        group: 'Search',
        defaultColumns: ['title', 'excerpt', 'slug'],
        description: '',
      },
      slug: 'search-results',
      fields: ({ defaultFields }) => [
        ...defaultFields,
        createSlug({ position: 'default' }),
        createExcerpt(),
      ],
    },
    beforeSync: ({ originalDoc, searchDoc }) => ({
      ...searchDoc,
      title: originalDoc?.title || 'Untitled',
      slug: originalDoc?.slug || 'No slug provided',
      excerpt: originalDoc?.excerpt || 'This is a fallback excerpt',
    }),
    defaultPriorities: {
      pages: 10,
      posts: 30,
    },
  })
}
