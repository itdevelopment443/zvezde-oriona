'use client'

import { HomeHeroBlock } from '@/payload-types'
import { cn } from '@/frontend/lib/utils'
import { getText, getImage } from '@/frontend/utils/normalize'

export default function HomeHero({
  heading,
  ['background-image']: backgroundImage,
}: HomeHeroBlock) {
  const safeHeading = getText(heading, 'Untitled')
  const imageUrl = getImage(backgroundImage)?.url || ''

  const items = Array.from({ length: 6 }, () => safeHeading)

  return (
    <section
      className={cn(
        'flex h-screen justify-end overflow-hidden px-0 py-18',
        !imageUrl && 'bg-secondary',
      )}
      style={
        imageUrl
          ? {
              backgroundImage: `
                linear-gradient(to bottom, rgba(64,64,64,0.1), rgba(10,31,63,0.3), rgba(10,31,63,0.8)),
                url(${imageUrl})
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="w-full overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee">
          {items.map((text, i) => (
            <p
              key={`first-${i}`}
              className="text-4xl font-bold uppercase odd:text-tertiary md:text-6xl lg:text-8xl"
            >
              {text}
            </p>
          ))}

          {items.map((text, i) => (
            <p
              key={`second-${i}`}
              className="text-4xl font-bold uppercase odd:text-tertiary md:text-6xl lg:text-8xl"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
