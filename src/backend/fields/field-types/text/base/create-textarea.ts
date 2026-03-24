import type { TextareaField } from 'payload'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type TextareaReturn = Extract<TextareaField, { type: 'textarea' }>
export type TextareaProps = Omit<TextareaReturn, 'type'> & BaseProps

export const createTextarea = ({
  conditionField,
  conditionValue,
  ...props
}: TextareaProps): TextareaReturn =>
  ({
    type: 'textarea',
    ...props,
    access: {
      ...allowAdminEditorAccess(),
      ...props.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...props.admin,
    },
  }) as TextareaReturn
