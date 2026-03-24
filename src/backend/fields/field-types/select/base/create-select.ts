import type { SelectField } from 'payload'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type SelectFieldSingle = Extract<SelectField, { type: 'select'; hasMany?: false }>
type SelectFieldMany = Extract<SelectField, { type: 'select'; hasMany: true }>

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type SelectPropsSingle = Omit<SelectFieldSingle, 'type'> & BaseProps
export type SelectPropsMany = Omit<SelectFieldMany, 'type'> & BaseProps

export type SelectProps = SelectPropsSingle | SelectPropsMany
export type SelectReturn = SelectFieldSingle | SelectFieldMany

export const createSelect = ({
  conditionField,
  conditionValue,
  hasMany,
  ...props
}: SelectProps): SelectReturn =>
  ({
    type: 'select',
    hasMany: hasMany ?? false,
    ...props,
    access: {
      ...allowAdminEditorAccess(),
      ...props.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...props.admin,
    },
  }) as SelectReturn
