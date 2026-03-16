import { createText } from '@/backend/fields/field-types/text/base/create-text'
import type { CollectionConfig } from 'payload'

export const NewsYears: CollectionConfig = {
  slug: 'news-years',
  admin: {
    group: 'Categories',
    useAsTitle: 'year',
  },
  fields: [createText({ name: 'year', required: true, unique: true })],
}
