import { Block } from 'payload'
import { createHeading } from '../fields/non-localized/text/create-heading'
import { createDescription } from '../fields/non-localized/text/create-description'

export const NewsArchiveBlock: Block = {
  slug: 'news-archive-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'NewsArchiveBlock',
  fields: [createHeading({ required: true }), createDescription()],
}
