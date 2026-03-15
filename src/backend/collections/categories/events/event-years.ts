import { createText } from '@/backend/fields/non-localized/text/default-types/create-text'
import type { CollectionConfig } from 'payload'

export const EventYears: CollectionConfig = {
  slug: 'event-years',
  admin: {
    group: 'Categories',
    useAsTitle: 'year',
  },
  lockDocuments: {
    duration: 10, // Keep locked document 2 minutes after unactivity
  },
  fields: [createText({ name: 'year', required: true, unique: true })],
}
