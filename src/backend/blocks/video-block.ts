import { Block } from 'payload'
import { createGeneratedComponent } from '../fields/ui/create-generated-component'
import { createHeading } from '../fields/non-localized/text/create-heading'

export const VideoBlock: Block = {
  slug: 'video-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'VideoBlock',
  fields: [createHeading(), createGeneratedComponent()],
}
