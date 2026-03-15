import { Block } from 'payload'
import { createHeading } from '../fields/non-localized/text/create-heading'
import { createDescription } from '../fields/non-localized/text/create-description'

export const EventsBlock: Block = {
  slug: 'events-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'EventsBlock',
  fields: [createHeading({ required: true }), createDescription()],
}
