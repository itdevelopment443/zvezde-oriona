import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/non-localized/text/create-slug'
import { AwardsHeroBlock } from '@/backend/blocks/awards-hero-block'
import { createPublishedAt } from '@/backend/fields/field-types/date/create-published-at'
import { createFeaturedImage } from '@/backend/fields/field-types/images/create-featured-image'
import { createExcerpt } from '@/backend/fields/field-types/text/page/create-excerpt'
import { createTitle } from '@/backend/fields/field-types/text/page/create-title'

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
    createPublishedAt(),
    createSlug(),
    createTitle({ required: true, unique: true }),
    createExcerpt({ required: true }),
    createFeaturedImage(),
    {
      name: 'sections',
      type: 'blocks',
      blocks: [AwardsHeroBlock],
    },
  ],
}
