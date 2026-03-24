import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { DateField } from 'payload'

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type DateReturn = Extract<DateField, { type: 'date' }>
export type DateProps = Omit<DateReturn, 'type'> & BaseProps

export const createDate = ({
  conditionField,
  conditionValue,
  ...props
}: DateProps): DateReturn =>
  ({
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
  }) as DateReturn
