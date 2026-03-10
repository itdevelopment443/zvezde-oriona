import { cn } from '@/frontend/lib/utils'
import { Card } from '@/types/card-types'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface CardSectionOneProps {
  heading: string
  description?: string
  cards: Card[]
  className?: string
  limit?: number
}

export default function CardSectionOne({
  heading,
  description,
  cards,
  className,
  limit = 4,
}: CardSectionOneProps) {
  return (
    <section className={cn('gap-8 lg:gap-12', className)}>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="flex gap-8 items-start">
          <div className="relative">
            <h2 className="uppercase">{heading}</h2>
          </div>
        </div>
        <p className="lg:text-xl">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {cards
          .filter((v, i) => i < limit)
          .map((v, i) => (
            <Link key={i} href={v.link.href} className="h-full">
              <div className="relative h-full px-8 py-18 md:px-18 md:py-24 xl:py-32 flex flex-col gap-6 bg-secondary">
                <div className="absolute hidden md:flex top-5 right-5 border-2 p-2 border-tertiary rounded-full">
                  <ChevronRight />
                </div>

                <h3 className="uppercase w-[30ch] font-extralight text-tertiary text-4xl">
                  {v.title}
                </h3>

                <p className="grow">{v.excerpt}</p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
