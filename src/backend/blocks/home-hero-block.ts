import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/ui/create-generated-component'
import { createImage } from '../fields/non-localized/images/create-image'
import { createTitle } from '../fields/non-localized/text/create-title'
import { createText } from '../fields/non-localized/text/default-types/create-text'
import { createHeading } from '../fields/non-localized/text/create-heading'

export const HomeHeroBlock: Block = {
  slug: 'home-hero-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'HomeHeroBlock',
  fields: [createHeading({ required: true }), createImage({ name: 'background-image' })],
}
