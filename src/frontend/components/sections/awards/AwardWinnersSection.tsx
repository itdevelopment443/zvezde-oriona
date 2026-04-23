import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Award, AwardWinnerBlock, Person } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import { getImage } from '@/frontend/utils/normalize'
import CardCarouselSectionOne from '../reusable/CardCarouselSectionOne'
import { Card } from '@/types/card-types'
import { Seperator } from '../reusable/Seperator'

interface AwardWinnersSectionProps extends AwardWinnerBlock {
  locale: Locale
  doc: Award
}

export default async function AwardWinnersSection({ id, doc, locale }: AwardWinnersSectionProps) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'winners',
    locale,
    depth: 2,
    limit: 100,
    where: { award: { equals: doc.id } },
    sort: '-year',
  })

  if (result.docs.length === 0) return null

  // Group by year
  const byYear = result.docs.reduce<Record<string, typeof result.docs>>((acc, winner) => {
    const year = winner.year ?? 'unknown'
    if (!acc[year]) acc[year] = []
    acc[year].push(winner)
    return acc
  }, {})

  return (
    <>
      {Object.entries(byYear).sort(([a], [b]) => b.localeCompare(a)).map(([year, winners], index) => {
        const cards: Card[] = winners.map((winner) => {
          const person = winner.person as Person
          const award = winner.award as Award
          const image = getImage(winner.image)

          return {
            upperHeading: award?.title ?? '',
            title: person?.name ?? '',
            featured_image: image?.url ?? '',
            excerpt: winner.description ?? '',
            avtor: image?.avtor ?? '',
            link: { href: '' },
          }
        })

        return (
          <div className="w-full" key={index}>
            <CardCarouselSectionOne key={year} id={`${year}`} heading={year} cards={cards} />
            <Seperator />
          </div>
        )
      })}
    </>
  )
}
