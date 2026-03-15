import { getText } from '@/frontend/utils/normalize'
import VideoCarouselSectionOne from '../reusable/VideoCarouselSectionOne'
import { VideoBlock } from '@/payload-types'
import { videosArchive } from '@/frontend/constants/videos-placeholder'

export default function VideoSection({ id, heading }: VideoBlock) {
  return (
    <VideoCarouselSectionOne id={getText(id)} heading={getText(heading)} videos={videosArchive} />
  )
}
