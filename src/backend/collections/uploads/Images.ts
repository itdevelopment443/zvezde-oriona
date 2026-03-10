import { createAlternativeText } from '@/backend/fields/non-localized/images/create-alternative-text'
import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'

export const Images: CollectionConfig = {
  slug: 'images',
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
