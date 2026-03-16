import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createTitle } from '@/backend/fields/field-types/text/page/create-title'

export const Menus: CollectionConfig = {
  slug: 'menus',
  admin: {
    useAsTitle: 'title',
    group: 'Settings',
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
  fields: [createTitle({ required: true, unique: true })],
}
