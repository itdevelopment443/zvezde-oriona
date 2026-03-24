import { Block } from 'payload'
import { createDescription } from '../fields/field-types/text/create-description'
import { createHeading } from '../fields/field-types/text/create-heading'

export const EventsBlock: Block = {
  slug: 'events-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'EventsBlock',
  fields: [createHeading({ required: true }), createDescription()],
}
