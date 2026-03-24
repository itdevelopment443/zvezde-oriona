import type { ArrayField } from 'payload'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type ArrayReturn = Extract<ArrayField, { type: 'array' }>
export type ArrayProps = Omit<ArrayReturn, 'type'> & BaseProps

export const createArray = ({
  conditionField,
  conditionValue,
  ...props
}: ArrayProps): ArrayReturn =>
  ({
    type: 'array',
    ...props,
    access: {
      ...allowAdminEditorAccess(),
      ...props.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...props.admin,
    },
  }) as ArrayReturn
