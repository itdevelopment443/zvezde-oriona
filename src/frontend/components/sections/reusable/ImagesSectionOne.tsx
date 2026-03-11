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
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '1rem',
        }}
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
