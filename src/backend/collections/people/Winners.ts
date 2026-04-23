import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createRelationship } from '@/backend/fields/field-types/relationship/base/create-relationship'
import { createYear } from '@/backend/fields/field-types/select/create-year'
import { createTextarea } from '@/backend/fields/field-types/text/base/create-textarea'
import { createImage } from '@/backend/fields/field-types/uploads/create-image'

export const Winners: CollectionConfig = {
  slug: 'winners',
  orderable: true,

  admin: {
    useAsTitle: 'id',
    group: 'Personas',
    defaultColumns: ['person', 'award', 'year'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    createRelationship({ name: 'person', relationTo: 'people', required: true }),
    createRelationship({ name: 'award', relationTo: 'awards', required: true }),
    createYear({ name: 'year', unique: false, required: true, admin: { position: 'sidebar' } }),
    createTextarea({ name: 'description', localized: true }),
    createImage({ name: 'image', relationTo: 'images' }),
  ],
}
