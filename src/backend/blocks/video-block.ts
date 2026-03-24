import { Block } from 'payload'
import { createHeading } from '../fields/field-types/text/create-heading'
import { createGeneratedComponent } from '../fields/field-types/ui/create-generated-component'

export const VideoBlock: Block = {
  slug: 'video-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'VideoBlock',
  fields: [createHeading(), createGeneratedComponent()],
}
