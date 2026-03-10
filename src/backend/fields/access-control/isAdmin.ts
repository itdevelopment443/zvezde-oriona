import { FieldAccess } from 'payload'

// --- Users with admin or editor role have field access ---
const isAdmin: FieldAccess = ({ req: { user } }) => {
  if (user && user.collection === 'users') {
    if (user.role.includes('admin')) return true
  }
  return false
}

export default isAdmin
