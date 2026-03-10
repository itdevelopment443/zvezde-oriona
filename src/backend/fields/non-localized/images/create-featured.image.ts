import type { Field } from 'payload'

interface FeaturedImageProps {
  required?: boolean
}

export const createFeaturedImage = ({ required = false }: FeaturedImageProps = {}): Field => {
  return {
    name: 'featured-image',
    type: 'upload',
    relationTo: 'images',
    required,
  }
}
