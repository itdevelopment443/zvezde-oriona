import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/ui/create-generated-component'

export const ExposedNewsBlock: Block = {
  slug: 'exposed-news-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'ExposedNewsBlock',
  fields: [createGeneratedComponent()],
}
