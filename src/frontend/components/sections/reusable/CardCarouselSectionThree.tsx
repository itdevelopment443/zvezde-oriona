import { Button } from '@/frontend/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/frontend/components/ui/carousel'
import Link from 'next/link'
import { cn } from '@/frontend/lib/utils'
import { Card } from '@/types/card-types'
import { getText } from '@/frontend/utils/normalize'

interface CardCarouselThreeProps {
  id?: string | null
  cards: Card[]
  className?: string
}

export default function CardCarouselSectionThree({ id, cards, className }: CardCarouselThreeProps) {
  return (
    <section id={getText(id)} className={cn('px-0 py-0', className)}>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {cards.map((item, index) => (
            <CarouselItem className="pl-0" key={index}>
              <div
                className="grid items-center lg:grid-cols-5 py-10 min-h-[70vh] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.featured_image})`,
                }}
              >
                <div className="hidden lg:flex lg:col-span-3"></div>
                <div className="bg-secondary min-h-[45vh] flex flex-col items-start justify-center gap-5 p-16 col-span-2">
                  <div className="w-full flex flex-col gap-4">
                    <h2 className=" text-3xl uppercase font-black">{item.title}</h2>
                  </div>
                  <p>{item.excerpt}</p>
                  <div className="flex justify-between w-full items-center">
                    <Link href={getText(item.link?.href)}>
                      <Button size={'lg'}>{getText(item.link?.label)}</Button>
                    </Link>
                    <div
                      className={cn(' flex gap-2', {
                        hidden: cards.length === 1,
                      })}
                    >
                      <CarouselPrevious className="static translate-none" />
                      <CarouselNext className="static translate-none" />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
