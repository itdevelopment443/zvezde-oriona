import { createUpload, type UploadProps } from './base/create-upload'

type FeaturedImageProps = Omit<UploadProps, 'name' | 'relationTo'> & {
  name?: string
  relationTo?: UploadProps['relationTo']
}

export const createFeaturedImage = ({
  name = 'featured-image',
  relationTo = 'images',
  ...props
}: FeaturedImageProps = {}) =>
  createUpload({
    name,
    relationTo,
    ...props,
  } as UploadProps)
