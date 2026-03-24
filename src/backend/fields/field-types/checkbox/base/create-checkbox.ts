import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { CheckboxField } from 'payload'

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type CheckboxReturn = Extract<CheckboxField, { type: 'checkbox' }>
export type CheckboxProps = Omit<CheckboxReturn, 'type'> & BaseProps

export const createCheckbox = ({
  conditionField,
  conditionValue,
  ...props
}: CheckboxProps): CheckboxReturn =>
  ({
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
  }) as CheckboxReturn
