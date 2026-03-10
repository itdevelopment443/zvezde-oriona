import { Block } from 'payload'
import { createHeading } from '../fields/non-localized/text/create-heading'
import { createDescription } from '../fields/non-localized/text/create-description'

export const AwardsBlock: Block = {
  slug: 'awards-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AwardsBlock',
  fields: [createHeading({ required: true }), createDescription()],
}
