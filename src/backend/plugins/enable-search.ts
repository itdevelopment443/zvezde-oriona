import { searchPlugin } from '@payloadcms/plugin-search'
import { createExcerpt } from '../fields/field-types/text/page/create-excerpt'
import { createSlug } from '../fields/field-types/text/page/create-slug'
import { createTitle } from '../fields/field-types/text/page/create-title'

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
        createSlug({ admin: { position: 'sidebar' } }),
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
