import { Block } from 'payload'
import { createDescription } from '../fields/field-types/text/create-description'
import { createHeading } from '../fields/field-types/text/create-heading'

export const AwardsHeroBlock: Block = {
  slug: 'awards-hero-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AwardsHeroBlock',
  fields: [
    createHeading({ label: 'Heading (automatically inherited from title)' }),
    createDescription({ required: true }),
  ],
}
