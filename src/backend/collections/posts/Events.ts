import { createExcerpt } from '@/backend/fields/non-localized/text/create-excerpt'
import { createTitle } from '@/backend/fields/non-localized/text/create-title'
import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/non-localized/text/create-slug'
import { createFeaturedImage } from '@/backend/fields/non-localized/images/create-featured.image'
import { createPublishedAt } from '@/backend/fields/non-localized/date/create-created-at'
import { generateYear } from '@/backend/hooks/generate-year'
import { WinnersBlock } from '@/backend/blocks/winners-block'
import { AboutEventBlock } from '@/backend/blocks/about-event-block'
import { createText } from '@/backend/fields/non-localized/text/default-types/create-text'
import { SeperatorBlock } from '@/backend/blocks/seperator-block'
import { GalleryBlock } from '@/backend/blocks/gallery-block'
import { VideoBlock } from '@/backend/blocks/video-block'

export const Events: CollectionConfig = {
  slug: 'events',
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
          collection: 'event-years',
        })
      },
    ],
  },
  trash: true,
  enableQueryPresets: true,
  fields: [
    createPublishedAt(),
    createSlug(),
    createTitle({ required: true, unique: true }),
    createExcerpt({ required: true }),
    createFeaturedImage(),
    createText({ name: 'location', position: 'sidebar' }),
    {
      name: 'sections',
      type: 'blocks',
      blocks: [AboutEventBlock, SeperatorBlock, WinnersBlock, GalleryBlock, VideoBlock],
    },
  ],
}
