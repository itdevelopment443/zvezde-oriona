import { cn } from '@/frontend/lib/utils'
import { getImage } from '@/frontend/utils/normalize'
import { ImagesBlock } from '@/payload-types'
import Image from 'next/image'

export default function ImagesSectionOne({
  id,
  'number-of-columns': numberOfColumns = '1',
  images,
}: ImagesBlock) {
  const columns = Number(numberOfColumns)

  return (
    <section id={id || ''}>
      <div
        className={cn('grid grid-cols-1 md:grid-cols-2 gap-4', {
          'lg:grid-cols-1': columns === 1,
          'lg:grid-cols-2': columns === 2,
          'lg:grid-cols-3': columns === 3,
          'lg:grid-cols-4': columns === 4,
        })}
      >
        {images?.map((img, index) => {
          const image = getImage(img.image)
          if (!image?.url) return null

          return (
            <Image
              key={index}
              src={image.url}
              width={image.width || 1200}
              height={image.height || 800}
              alt={image.alt || 'Slika'}
            />
          )
        })}
      </div>
    </section>
  )
}
