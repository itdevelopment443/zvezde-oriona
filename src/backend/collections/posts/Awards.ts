import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/field-types/text/page/create-slug'
import { AwardsHeroBlock } from '@/backend/blocks/awards-hero-block'
import { createPublishedAt } from '@/backend/fields/field-types/date/create-published-at'
import { createExcerpt } from '@/backend/fields/field-types/text/page/create-excerpt'
import { createTitle } from '@/backend/fields/field-types/text/page/create-title'
import { createFeaturedImage } from '@/backend/fields/field-types/uploads/create-featured-image'
import { AwardWinnersBlock } from '@/backend/blocks/award-winners-block'
import { SeperatorBlock } from '@/backend/blocks/seperator-block'
import { GalleryBlock } from '@/backend/blocks/gallery-block'
import { VideoBlock } from '@/backend/blocks/video-block'

export const Awards: CollectionConfig = {
  slug: 'awards',
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
    createTitle({ required: true, unique: true, localized: true }),
    createExcerpt({ required: true, localized: true }),
    createFeaturedImage(),
    {
      name: 'sections',
      type: 'blocks',
      localized: true,
      blocks: [AwardsHeroBlock, SeperatorBlock, AwardWinnersBlock, GalleryBlock, VideoBlock],
    },
  ],
}
