import { createExcerpt } from '@/backend/fields/non-localized/text/create-excerpt'
import { createTitle } from '@/backend/fields/non-localized/text/create-title'
import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/non-localized/text/create-slug'
import { createFeaturedImage } from '@/backend/fields/non-localized/images/create-featured.image'
import { createCreatedAt } from '@/backend/fields/non-localized/date/create-created-at'

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
    createCreatedAt(),
    createSlug(),
    createTitle({ required: true, unique: true }),
    createExcerpt({ required: true }),
    createFeaturedImage(),
  ],
}
