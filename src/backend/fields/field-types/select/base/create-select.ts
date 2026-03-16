import type { SelectField } from 'payload'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type GenericSelectField = Extract<SelectField, { type: 'select'; hasMany?: false }>
type GenericSelectProps = Omit<GenericSelectField, 'type' | 'hasMany'> & {
  name: string
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createSelect = ({
  name,
  conditionField,
  conditionValue,
  ...props
}: GenericSelectProps): GenericSelectField => ({
  name,
  type: 'select',
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
