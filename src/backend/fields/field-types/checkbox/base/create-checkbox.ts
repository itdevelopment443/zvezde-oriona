import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { CheckboxField } from 'payload'

type GenericCheckboxField = Extract<CheckboxField, { type: 'checkbox' }>
type GenericCheckboxProps = Omit<GenericCheckboxField, 'type'> & {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createCheckbox = ({
  conditionField,
  conditionValue,
  ...props
}: GenericCheckboxProps): GenericCheckboxField => ({
  type: 'checkbox',
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
