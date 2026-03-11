import type { Field } from 'payload'
import { createImage } from './create-image'

interface ImagesProps {
  name: string
  fieldName: string
  required?: boolean
}

export const createImages = ({ name, fieldName, required = false }: ImagesProps): Field => {
  return {
    name,
    type: 'array',
    required,
    fields: [createImage({ name: fieldName })],
  }
}
