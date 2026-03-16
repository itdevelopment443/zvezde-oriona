import { createRoles } from '@/backend/fields/field-types/select/auth/create-roles'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Authentication',
    useAsTitle: 'email',
  },
  lockDocuments: {
    duration: 10, // Keep locked document 2 minutes after unactivity
  },
  auth: {
    maxLoginAttempts: 200,
  },
  fields: [
    // Email added by default
    createRoles(),
  ],
}
