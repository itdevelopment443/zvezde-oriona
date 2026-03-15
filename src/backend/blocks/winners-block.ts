import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/ui/create-generated-component'
import { createHeading } from '../fields/non-localized/text/create-heading'

export const WinnersBlock: Block = {
  slug: 'winners-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'WinnersBlock',
  fields: [createHeading(), createGeneratedComponent()],
}
