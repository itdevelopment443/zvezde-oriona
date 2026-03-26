import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  if (user && user.collection === 'users') {
    if (user.role?.includes('admin')) return true
  }
  return false
}
