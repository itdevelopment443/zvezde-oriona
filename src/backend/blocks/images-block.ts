import { Block } from 'payload'
import { createImages } from '../fields/non-localized/images/create-images'
import { createNumberOfColumns } from '../fields/non-localized/create-number-of-columns'

export const ImagesBlock: Block = {
  slug: 'images-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'ImagesBlock',
  fields: [createNumberOfColumns(), createImages({ name: 'images', fieldName: 'image' })],
}
