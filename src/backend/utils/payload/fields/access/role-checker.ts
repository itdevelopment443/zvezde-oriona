import type { FieldAccess } from 'payload'

export type Role = 'admin' | 'editor' | 'user'

export const roleChecker = (roles: Role[]): FieldAccess => {
  return ({ req: { user } }) => {
    if (!user || user.collection !== 'users') return false
    const userRoles = Array.isArray(user.role) ? user.role : [user.role]
    return roles.some((role) => userRoles.includes(role))
  }
}

export const isAdmin = roleChecker(['admin'])
export const isAdminOrEditor = roleChecker(['admin', 'editor'])
