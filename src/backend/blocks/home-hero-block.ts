import { Block } from 'payload'

import { createHeading } from '../fields/field-types/text/create-heading'
import { createImage } from '../fields/field-types/uploads/create-image'

export const HomeHeroBlock: Block = {
  slug: 'home-hero-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'HomeHeroBlock',
  fields: [
    createHeading({ required: true }),
    createImage({ name: 'background-image', relationTo: 'images' }),
  ],
}
