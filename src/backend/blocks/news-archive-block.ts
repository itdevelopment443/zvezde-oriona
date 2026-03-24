import { Block } from 'payload'
import { createDescription } from '../fields/field-types/text/create-description'
import { createHeading } from '../fields/field-types/text/create-heading'

export const NewsArchiveBlock: Block = {
  slug: 'news-archive-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'NewsArchiveBlock',
  fields: [createHeading({ required: true }), createDescription()],
}
