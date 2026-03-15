import { formatDate } from '@/frontend/lib/date'
import { getImage } from '@/frontend/utils/normalize'
import { News } from '@/payload-types'
import Image from 'next/image'

interface NewsHeroProps extends News {}

export default function NewsHero({
  title,
  'featured-image': featuredImage,
  'published-at': publishedAt,
}: NewsHeroProps) {
  const image = getImage(featuredImage)
  const date = new Date(publishedAt)

  return (
    <section className="flex flex-col gap-5">
      <h1>{title}</h1>
      <p>{formatDate(date)}</p>
      <Image src={image?.url || ''} width={2000} height={1200} alt="Prikazna slika" />
    </section>
  )
}
