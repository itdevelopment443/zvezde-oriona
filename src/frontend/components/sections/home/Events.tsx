import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { EventsBlock } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import { getText, getImage } from '@/frontend/utils/normalize'
import { Card } from '@/types/card-types'
import CardCarouselSectionTwo from '../reusable/CardCarouselSectionTwo'

interface EventsProps extends EventsBlock {
  locale: Locale
}

export default async function Events({ heading, description, locale }: EventsProps) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    locale: locale,
  })

  const docs = result.docs

  const cards: Card[] = docs.map((v) => {
    const image = getImage(v['featured-image'])

    return {
      title: v.title || '',
      featured_image: image?.url || '',
      excerpt: v.excerpt || '',
      link: {
        label: 'Preberi več',
        href: `/${locale}/novice/${v.slug}`,
      },
    }
  })

  return (
    <CardCarouselSectionTwo
      heading={getText(heading, 'Untitled')}
      description={getText(description)}
      cards={cards}
    />
  )
}
