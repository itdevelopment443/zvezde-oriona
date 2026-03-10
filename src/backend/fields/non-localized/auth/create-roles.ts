import type { Field } from 'payload'
import isAdmin from '../../access-control/isAdmin'

interface RolesProps {
  additionalRoles?: string[]
  required?: boolean
}

export const createRoles = ({ additionalRoles = [], required = true }: RolesProps = {}): Field => {
  return {
    name: 'role',
    type: 'select',
    access: {
      read: () => true,
      update: isAdmin,
    },
    options: ['admin', 'editor', 'user', ...additionalRoles],
    required,
  }
}
