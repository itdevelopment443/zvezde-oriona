import { Block } from 'payload'
import { createHeading } from '../fields/field-types/text/create-heading'
import { createGeneratedComponent } from '../fields/field-types/ui/create-generated-component'

export const WinnersBlock: Block = {
  slug: 'winners-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'WinnersBlock',
  fields: [createHeading(), createGeneratedComponent()],
}
