import { createExcerpt } from '@/backend/fields/non-localized/text/create-excerpt'
import { createTitle } from '@/backend/fields/non-localized/text/create-title'
import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/non-localized/text/create-slug'
import { createFeaturedImage } from '@/backend/fields/non-localized/images/create-featured.image'
import { createPublishedAt } from '@/backend/fields/non-localized/date/create-created-at'
import { createExposedContent } from '@/backend/fields/non-localized/create-exposed-content'
import { ContentBlock } from '@/backend/blocks/content-block'
import { ImagesBlock } from '@/backend/blocks/images-block'

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
