import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/ui/create-generated-component'

export const SeperatorBlock: Block = {
  slug: 'seperator-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'SeperatorBlock',
  fields: [createGeneratedComponent()],
}
