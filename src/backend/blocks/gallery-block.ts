import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/ui/create-generated-component'
import { createHeading } from '../fields/non-localized/text/create-heading'

export const GalleryBlock: Block = {
  slug: 'gallery-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'GalleryBlock',
  fields: [createHeading(), createGeneratedComponent()],
}
