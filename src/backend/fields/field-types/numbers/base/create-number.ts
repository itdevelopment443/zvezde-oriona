import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { NumberField } from 'payload'

type NumberFieldSingle = Extract<NumberField, { type: 'number'; hasMany?: false }>
type NumberFieldMany = Extract<NumberField, { type: 'number'; hasMany: true }>

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type NumberPropsSingle = Omit<NumberFieldSingle, 'type'> & BaseProps
export type NumberPropsMany = Omit<NumberFieldMany, 'type'> & BaseProps

export type NumberProps = NumberPropsSingle | NumberPropsMany
export type NumberReturn = NumberFieldSingle | NumberFieldMany

export const createNumber = ({
  conditionField,
  conditionValue,
  hasMany,
  min = 0,
  max = 2000,
  defaultValue = 5,
  required = true,
  ...props
}: NumberProps): NumberReturn =>
  ({
    type: 'number',
    hasMany: hasMany ?? false,
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
  }) as NumberReturn
