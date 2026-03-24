import { Block } from 'payload'
import { createDescription } from '../fields/field-types/text/create-description'
import { createHeading } from '../fields/field-types/text/create-heading'

export const AwardsBlock: Block = {
  slug: 'awards-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AwardsBlock',
  fields: [createHeading({ required: true }), createDescription()],
}
