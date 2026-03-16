import type { TextField } from 'payload'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type GenericTextField = Extract<TextField, { type: 'text'; hasMany?: false }>
type GenericTextProps = Omit<GenericTextField, 'type' | 'hasMany'> & {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createText = ({
  conditionField,
  conditionValue,
  ...props
}: GenericTextProps): GenericTextField => ({
  type: 'text',
  hasMany: false,
  ...props,
  access: {
    ...allowAdminEditorAccess(),
    ...props.access,
  },
  admin: {
    condition: createAdminCondition(conditionField, conditionValue),
    ...props.admin,
  },
})
