import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { NumberField } from 'payload'

type GenericNumberField = Extract<NumberField, { type: 'number'; hasMany?: false }>
type GenericNumberProps = Omit<GenericNumberField, 'type' | 'hasMany'> & {
  name: string
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createNumber = ({
  name,
  min = 0,
  max = 2000,
  defaultValue = 5,
  conditionField,
  conditionValue,
  required = true,
  ...props
}: GenericNumberProps): GenericNumberField => ({
  name,
  type: 'number',
  hasMany: false,
  min,
  max,
  defaultValue,
  required,
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
