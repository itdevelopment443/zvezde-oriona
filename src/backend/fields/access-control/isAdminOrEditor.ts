import { FieldAccess } from 'payload'

// --- Users with admin or editor role have field access ---
const isAdminOrEditor: FieldAccess = ({ req: { user } }) => {
  if (user && user.collection === 'users') {
    if (user.role.includes('admin')) return true
    if (user.role.includes('editor')) return true
  }
  return false
}

export default isAdminOrEditor
