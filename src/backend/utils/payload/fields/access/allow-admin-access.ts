import type { FieldAccess } from 'payload'
import { isAdmin } from './role-checker'

const allowAll: FieldAccess = () => true

export const allowAdminAccess = () => ({
  read: allowAll,
  create: isAdmin,
  update: isAdmin,
})
