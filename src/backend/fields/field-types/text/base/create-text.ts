import type { TextField } from 'payload'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type TextFieldSingle = Extract<TextField, { type: 'text'; hasMany?: false }>
type TextFieldMany = Extract<TextField, { type: 'text'; hasMany: true }>

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type TextPropsSingle = Omit<TextFieldSingle, 'type'> & BaseProps
export type TextPropsMany = Omit<TextFieldMany, 'type'> & BaseProps

export type TextProps = TextPropsSingle | TextPropsMany
export type TextReturn = TextFieldSingle | TextFieldMany

export const createText = ({
  conditionField,
  conditionValue,
  hasMany,
  ...props
}: TextProps): TextReturn =>
  ({
    type: 'text',
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
  }) as TextReturn
