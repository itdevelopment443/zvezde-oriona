import { getPayload, Locale } from 'payload'
import configPromise from '@payload-config'
import { Award, GalleryBlock } from '@/payload-types'
import { getText } from '@/frontend/utils/normalize'
import GalleryCarouselSectionOne from '../reusable/GalleryCarouselSectionOne'
import { Card } from '@/types/card-types'

interface GallerySectionProps extends GalleryBlock {
  locale: Locale
  doc: Award
}

export default async function GallerySection({ id, heading, doc }: GallerySectionProps) {
  console.log(doc)
  const payload = await getPayload({ config: configPromise })

  const galleryResult = await payload.find({
    collection: 'gallery',
    depth: 0,
    limit: 500,
    where: { event: { equals: doc.id } },
  })

  if (galleryResult.docs.length === 0) return null

  const cards: Card[] = galleryResult.docs.map((item) => ({
    title: item.avtor ?? '',
    featured_image: item.url ?? '',
    excerpt: `${item.alt || ''}
    Avtor: ${item.avtor}
    `,
    link: { href: '' },
  }))

  return <GalleryCarouselSectionOne id={getText(id)} heading={getText(heading)} cards={cards} />
}
