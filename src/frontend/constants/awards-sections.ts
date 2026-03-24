import { SectionComponentMap } from '@/types/page-types'
import AwardsHeroSection from '../components/sections/awards/AwardsHeroSection'
import AwardWinnersSection from '../components/sections/awards/AwardWinnersSection'
import { Seperator } from '../components/sections/reusable/Seperator'

export const awardsSectionMap: SectionComponentMap = {
  'awards-hero-block': AwardsHeroSection,
  'award-winner-block': AwardWinnersSection,
  'seperator-block': Seperator,
}
