import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { DateField } from 'payload'

type GenericDateField = Extract<DateField, { type: 'date' }>

type GenericDateProps = Omit<GenericDateField, 'type'> & {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createDate = ({
  conditionField,
  conditionValue,
  ...props
}: GenericDateProps): GenericDateField => ({
  type: 'date',
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
