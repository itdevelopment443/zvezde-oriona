import { Block } from 'payload'
import { createHeading } from '../fields/non-localized/text/create-heading'
import { createLexicalContent } from '../fields/non-localized/text/base/create-lexical-content'
import { createContacts } from '../fields/non-localized/contact/create-contacts'

export const AboutUsBlock: Block = {
  slug: 'about-us-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'AboutUsBlock',
  fields: [createHeading({ required: true }), createContacts(), ...createLexicalContent()],
}
