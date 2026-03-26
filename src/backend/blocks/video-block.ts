import { Block } from 'payload'
import { createHeading } from '../fields/field-types/text/create-heading'
import { createGeneratedComponent } from '../fields/field-types/ui/create-generated-component'
import { createArray } from '../fields/field-types/arrays/base/create-array'
import { createText } from '../fields/field-types/text/base/create-text'

export const VideoBlock: Block = {
  slug: 'video-block',
  imageURL: '/sections/home-hero.png',
  interfaceName: 'VideoBlock',
  fields: [
    createHeading(),
    createArray({ name: 'videos', fields: [createText({ name: 'videoId' })] }),
  ],
}
