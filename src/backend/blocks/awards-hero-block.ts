import { Block } from 'payload'
import { createHeading } from '../fields/non-localized/text/create-heading'
import { createDescription } from '../fields/non-localized/text/create-description'

export const AwardsHeroBlock: Block = {
  slug: 'awards-hero-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AwardsHeroBlock',
  fields: [
    createHeading({ label: 'Heading (automatically inherited from title)' }),
    createDescription({ required: true }),
  ],
}
