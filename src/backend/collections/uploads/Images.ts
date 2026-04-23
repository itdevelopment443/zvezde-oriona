import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createAlternativeText } from '@/backend/fields/field-types/text/image/create-alternative-text'
import { createText } from '@/backend/fields/field-types/text/base/create-text'

export const Images: CollectionConfig = {
  slug: 'images',
  orderable: true,
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
  fields: [createAlternativeText(), createText({ name: 'avtor', label: 'foto' })],
  upload: true,
}
