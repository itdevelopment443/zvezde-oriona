import type { FieldAccess } from 'payload'
import { isAdminOrEditor } from './role-checker'

const allowAll: FieldAccess = () => true

export const allowAdminEditorAccess = () => ({
  read: allowAll,
  create: isAdminOrEditor,
  update: isAdminOrEditor,
})
