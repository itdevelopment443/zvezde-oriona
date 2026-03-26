import { Award, VideoBlock } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import { getText } from '@/frontend/utils/normalize'
import VideoCarouselSectionOne from '../reusable/VideoCarouselSectionOne'

interface VideoSectionProps extends VideoBlock {
  locale: Locale
  doc: Award
}

export default async function VideoSection({ id, heading, videos, doc }: VideoSectionProps) {
  if (!videos) return null
  return (
    <>
      <VideoCarouselSectionOne id={getText(id)} heading={getText(heading)} videos={videos} />
    </>
  )
}
