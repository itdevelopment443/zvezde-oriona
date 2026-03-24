import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/field-types/ui/create-generated-component'

export const AwardWinnersBlock: Block = {
  slug: 'award-winner-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AwardWinnerBlock',
  fields: [createGeneratedComponent()],
}
