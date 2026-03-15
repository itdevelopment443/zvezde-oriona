import { awwardsArchive } from '@/frontend/constants/awwards-placeholder'
import CardCarouselSectionOne from '../reusable/CardCarouselSectionOne'
import { WinnersBlock } from '@/payload-types'
import { getText } from '@/frontend/utils/normalize'

export default function WinnersSection({ id, heading }: WinnersBlock) {
  return <CardCarouselSectionOne id={id} heading={getText(heading)} cards={awwardsArchive} />
}
