import { Block } from 'payload'
import { createHeading } from '../fields/non-localized/text/create-heading'
import { createImage } from '../fields/non-localized/images/base/create-image'

export const HomeHeroBlock: Block = {
  slug: 'home-hero-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'HomeHeroBlock',
  fields: [
    createHeading({ required: true }),
    createImage({ name: 'background-image', relationTo: 'images' }),
  ],
}
