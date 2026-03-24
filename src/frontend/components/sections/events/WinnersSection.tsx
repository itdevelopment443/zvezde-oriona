import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Award, Person, WinnersBlock } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import { getText, getImage } from '@/frontend/utils/normalize'
import CardCarouselSectionOne from '../reusable/CardCarouselSectionOne'
import { Card } from '@/types/card-types'

interface WinnersSectionProps extends WinnersBlock {
  locale: Locale
  year: string
}

export default async function WinnersSection({ heading, year, locale }: WinnersSectionProps) {
  console.log('[WinnersSection] year:', year, '| locale:', locale)
  if (!year) return null

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'winners',
    locale,
    depth: 2,
    limit: 100,
    where: { year: { equals: year } },
    sort: 'award',
  })

  console.log('[WinnersSection] found docs:', result.docs.length)

  if (result.docs.length === 0) return null

  const cards: Card[] = result.docs.map((winner) => {
    const award = winner.award as Award
    const person = winner.person as Person
    const image = getImage(winner.image)

    return {
      upperHeading: award?.title ?? '',
      title: person?.name ?? '',
      featured_image: image?.url ?? '',
      excerpt: winner.description ?? '',
      link: { href: '' },
    }
  })

  return <CardCarouselSectionOne heading={getText(heading) ?? ''} cards={cards} />
}
