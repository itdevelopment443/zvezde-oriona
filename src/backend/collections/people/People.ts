import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createText } from '@/backend/fields/field-types/text/base/create-text'

export const People: CollectionConfig = {
  slug: 'people',
  admin: {
    useAsTitle: 'name',
    group: 'Personas',
    defaultColumns: ['name', 'createdAt'],
    hidden: true,
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [createText({ name: 'name', required: true, unique: true })],
}
