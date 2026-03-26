import { createRoles } from '@/backend/fields/field-types/select/auth/create-roles'
import type { CollectionConfig } from 'payload'
import { isAdminOrSelf } from '../access-control/isAdminOrSelf'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Authentication',
    useAsTitle: 'email',
  },
  lockDocuments: {
    duration: 10, // Keep locked document 2 minutes after unactivity
  },
  access: {
    read: isAdminOrSelf,
    create: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  auth: {
    useSessions: false,
    maxLoginAttempts: 5,
  },
  fields: [
    // Email added by default
    createRoles(),
  ],
}
