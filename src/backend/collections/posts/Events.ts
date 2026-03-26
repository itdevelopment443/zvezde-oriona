import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/field-types/text/page/create-slug'
import { WinnersBlock } from '@/backend/blocks/winners-block'
import { AboutEventBlock } from '@/backend/blocks/about-event-block'
import { SeperatorBlock } from '@/backend/blocks/seperator-block'
import { GalleryBlock } from '@/backend/blocks/gallery-block'
import { VideoBlock } from '@/backend/blocks/video-block'
import { createPublishedAt } from '@/backend/fields/field-types/date/create-published-at'
import { createText } from '@/backend/fields/field-types/text/base/create-text'
import { createExcerpt } from '@/backend/fields/field-types/text/page/create-excerpt'
import { createTitle } from '@/backend/fields/field-types/text/page/create-title'
import { createFeaturedImage } from '@/backend/fields/field-types/uploads/create-featured-image'
import { createYear } from '@/backend/fields/field-types/select/create-year'

export const Events: CollectionConfig = {
  slug: 'events',
  orderable: true,
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
    createPublishedAt({ required: true }),
    createSlug({ localized: true }),
    createYear({ unique: true, required: true, admin: { position: 'sidebar' } }),
    createTitle({ required: true, unique: true, localized: true }),
    createExcerpt({ required: true, localized: true }),
    createFeaturedImage(),
    createText({ name: 'location', localized: true, admin: { position: 'sidebar' } }),
    {
      name: 'sections',
      type: 'blocks',
      localized: true,
      blocks: [AboutEventBlock, SeperatorBlock, WinnersBlock, GalleryBlock, VideoBlock],
    },
  ],
}
