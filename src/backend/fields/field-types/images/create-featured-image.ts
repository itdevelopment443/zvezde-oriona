import { createUpload } from './base/create-single-upload'

type FeaturedImageProps = Omit<Parameters<typeof createUpload>[0], 'name'> & {
  name?: string
}

export const createFeaturedImage = ({
  name = 'featured-image',
  relationTo: "images",
  ...props
}: FeaturedImageProps = {}) =>
  createUpload({
    name,
    ...props,
  })
