import { SectionComponentMap } from '@/types/page-types'
import WinnersSection from '../components/sections/events/WinnersSection'
import AboutEventSection from '../components/sections/events/AboutEventSection'
import { Seperator } from '../components/sections/reusable/Seperator'
import GallerySection from '../components/sections/events/GallerySection'
import VideoSection from '../components/sections/events/VideoSection'

export const eventsSectionMap: SectionComponentMap = {
  'about-event-block': AboutEventSection,
  'winners-block': WinnersSection,
  'seperator-block': Seperator,
  'gallery-block': GallerySection,
  'video-block': VideoSection,
}
