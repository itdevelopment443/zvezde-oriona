import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/non-localized/text/create-slug'
import { createExposedContent } from '@/backend/fields/non-localized/layout/create-exposed-content'
import { ContentBlock } from '@/backend/blocks/content-block'
import { ImagesBlock } from '@/backend/blocks/images-block'
import { generateYear } from '@/backend/hooks/payload/generate-year'
import { createPublishedAt } from '@/backend/fields/field-types/date/create-published-at'
import { createFeaturedImage } from '@/backend/fields/field-types/images/create-featured-image'
import { createExcerpt } from '@/backend/fields/field-types/text/page/create-excerpt'
import { createTitle } from '@/backend/fields/field-types/text/page/create-title'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    group: 'Posts',
    defaultColumns: ['title', 'excerpt', 'slug', 'createdAt'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  lockDocuments: {
    duration: 120, // Keep locked document 2 minutes after unactivity
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        await generateYear({
          payload: req.payload,
          date: doc['published-at'],
          collection: 'news-years',
        })
      },
    ],
  },
  trash: true,
  enableQueryPresets: true,
  fields: [
    createPublishedAt(),
    createSlug({ addRandomNumber: true }),
    createExposedContent({ label: 'Expose News', name: 'exposed-news' }),
    createTitle({ required: true, unique: true }),
    createExcerpt({ required: true }),
    createFeaturedImage(),
    {
      name: 'sections',
      type: 'blocks',
      blocks: [ContentBlock, ImagesBlock],
    },
  ],
}
