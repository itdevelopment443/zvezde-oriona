import { Block } from 'payload'
import { createHeading } from '../fields/field-types/text/create-heading'
import { createGeneratedComponent } from '../fields/field-types/ui/create-generated-component'

export const GalleryBlock: Block = {
  slug: 'gallery-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'GalleryBlock',
  fields: [createHeading(), createGeneratedComponent()],
}
