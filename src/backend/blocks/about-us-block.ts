import { Block } from 'payload'
import { createContacts } from '../fields/field-types/arrays/contact/create-contacts'
import { createLexicalContent } from '../fields/field-types/text/base/create-lexical-content'
import { createHeading } from '../fields/field-types/text/create-heading'

export const AboutUsBlock: Block = {
  slug: 'about-us-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AboutUsBlock',
  fields: [createHeading({ required: true }), createContacts(), ...createLexicalContent()],
}
