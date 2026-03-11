import { Block } from 'payload'
import { createLexicalContent } from '../fields/non-localized/text/default-types/create-lexical-content'

export const ContentBlock: Block = {
  slug: 'content-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'ContentBlock',
  fields: [...createLexicalContent()],
}
