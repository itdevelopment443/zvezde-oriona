import { getImage, getText } from '@/frontend/utils/normalize'
import { getPayload } from 'payload'
import { AwardsBlock } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import configPromise from '@payload-config'
import CardSectionOne from '../reusable/CardSectionOne'
import { Card } from '@/types/card-types'

interface AwardsProps extends AwardsBlock {
  locale: Locale
}

export default async function Awards({ heading, description, locale }: AwardsProps) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'awards',
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
    <CardSectionOne
      heading={getText(heading, 'Untitled')}
      description={getText(description)}
      cards={cards}
    />
  )
}
