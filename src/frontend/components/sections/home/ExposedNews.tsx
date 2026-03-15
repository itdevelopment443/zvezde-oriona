import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Locale } from '@/i18n/i18n.config'
import { getImage } from '@/frontend/utils/normalize'
import { Card } from '@/types/card-types'
import CardCarouselSectionThree from '../reusable/CardCarouselSectionThree'
import { ExposedNewsBlock } from '@/payload-types'

interface ExposedNewsProps extends ExposedNewsBlock {
  locale: Locale
}

export default async function ExposedNews({ id, locale }: ExposedNewsProps) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'news',
    locale: locale,
    limit: 6,
    where: {
      'exposed-news': {
        equals: true,
      },
    },
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

  return <CardCarouselSectionThree id={id} className="-mt-18 bg-secondary/20" cards={cards} />
}
