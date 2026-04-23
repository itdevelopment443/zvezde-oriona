import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createAlternativeText } from '@/backend/fields/field-types/text/image/create-alternative-text'
import { createRelationship } from '@/backend/fields/field-types/relationship/base/create-relationship'
import { createText } from '@/backend/fields/field-types/text/base/create-text'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
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
  fields: [
    createAlternativeText(),
    createText({ name: 'avtor', label: 'foto' }),
    createRelationship({ name: 'event', relationTo: 'events', admin: { position: 'sidebar' } }),
  ],
  upload: true,
}
