import { Block } from 'payload'
import { createLexicalContent } from '../fields/field-types/text/base/create-lexical-content'
import { createHeading } from '../fields/field-types/text/create-heading'

export const LawBlock: Block = {
  slug: 'law-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'LawBlock',
  fields: [createHeading(), ...createLexicalContent()],
}
