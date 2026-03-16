import type { ArrayField } from 'payload'
import { createUpload } from '../../images/base/create-single-upload'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'

type ImagesField = Extract<ArrayField, { type: 'array' }>
type ImagesProps = Omit<ImagesField, 'type' | 'fields'> & {
  fieldName: string
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createUploads = ({
  fieldName,
  conditionField,
  conditionValue,
  ...props
}: ImagesProps): ImagesField => ({
  type: 'array',
  ...props,
  fields: [createUpload({ name: fieldName, relationTo: 'images' })],
  admin: {
    condition: createAdminCondition(conditionField, conditionValue),
    ...props.admin,
  },
})
