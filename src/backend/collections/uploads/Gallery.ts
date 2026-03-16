import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createAlternativeText } from '@/backend/fields/field-types/text/image/create-alternative-text'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    group: 'Uploads',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  lockDocuments: {
    duration: 60, // Keep locked document 1 minute after unactivity
  },
  fields: [createAlternativeText()],
  upload: true,
}
