import { Block } from 'payload'
import { createImages } from '../fields/field-types/arrays/images/create-images'
import { createNumberOfColumns } from '../fields/field-types/select/layout/create-number-of-columns'

export const ImagesBlock: Block = {
  slug: 'images-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'ImagesBlock',
  fields: [createNumberOfColumns(), createImages({ name: 'images', fieldName: 'image' })],
}
