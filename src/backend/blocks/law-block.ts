import { Block } from 'payload'
import { createLexicalContent } from '../fields/non-localized/text/base/create-lexical-content'
import { createHeading } from '../fields/non-localized/text/create-heading'

export const LawBlock: Block = {
  slug: 'law-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'LawBlock',
  fields: [createHeading(), ...createLexicalContent()],
}
