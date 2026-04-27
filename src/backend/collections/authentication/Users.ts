import { createRoles } from '@/backend/fields/field-types/select/auth/create-roles'
import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access-control/isAdmin'
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
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
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
