import { Block } from 'payload'
import { createLexicalContent } from '../fields/field-types/text/base/create-lexical-content'

export const AboutEventBlock: Block = {
  slug: 'about-event-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AboutEventBlock',
  fields: [
    ...createLexicalContent(),
    ...createLexicalContent({ name: 'lexical-more-content', convertedName: 'more-content' }),
  ],
}
