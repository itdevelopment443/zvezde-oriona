import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import { TextareaField } from 'payload'

type CustomTextareaField = Extract<TextareaField, { type: 'textarea' }>
type CustomTextareaProps = Omit<CustomTextareaField, 'type'> & {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createTextarea = ({
  conditionField,
  conditionValue,
  ...props
}: CustomTextareaProps): CustomTextareaField => ({
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
})
