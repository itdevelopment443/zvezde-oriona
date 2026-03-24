import { createArray, type ArrayProps, type ArrayReturn } from '../base/create-array'
import { createUpload } from '../../uploads/base/create-upload'

type UploadsProps = Omit<ArrayProps, 'name' | 'fields'> & {
  name?: string
  fieldName: string
}

export const createUploads = ({
  name = 'images',
  fieldName,
  ...props
}: UploadsProps): ArrayReturn =>
  createArray({
    name,
    fields: [createUpload({ name: fieldName, relationTo: 'images' })],
    ...props,
  })
