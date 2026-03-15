import { eventsArchive } from '@/frontend/constants/events-placeholder'
import GalleryCarouselSectionOne from '../reusable/GalleryCarouselSectionOne'
import { GalleryBlock } from '@/payload-types'
import { getText } from '@/frontend/utils/normalize'

export default function GallerySection({ id, heading }: GalleryBlock) {
  return (
    <GalleryCarouselSectionOne id={getText(id)} heading={getText(heading)} cards={eventsArchive} />
  )
}
