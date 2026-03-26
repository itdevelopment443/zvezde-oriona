import type { Access } from 'payload'

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (user && user.collection === 'users') {
    if (user.role?.includes('admin')) return true
    if (user.role?.includes('editor')) return true
  }
  return false
}
