import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from '@/frontend/components/ui/carousel'
import Image from 'next/image'
import { cn } from '@/frontend/lib/utils'
import { Card } from '@/types/card-types'

interface CardCarouselOneProps {
  heading: string
  description?: string
  cards: Card[]
  className?: string
}

export default function CardCarouselSectionOne({
  heading,
  description,
  cards,
  className,
}: CardCarouselOneProps) {
  return (
    <section className={cn('lg:pr-0 gap-6 lg:gap-8', className)}>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 ">
        <div className="flex gap-10 items-start">
          <div className="relative">
            <h2 className=" uppercase">{heading}</h2>
          </div>
        </div>
        <p
          className={cn('text-xl', {
            hidden: !description,
          })}
        >
          {description}
        </p>
      </div>
      <Carousel
        className="flex flex-col gap-6"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-8 ">
          {cards.map((item, index) => (
            <CarouselItem
              className="basis-1/1 md:basis-1/2 lg:basis-4/14 translate-x-4 "
              key={index}
            >
              <div>
                <div className="flex flex-col items-start gap-8 py-6 ">
                  <div className="relative w-full">
                    <Image
                      src={item.featured_image}
                      height={500}
                      width={500}
                      alt="prikazna slika"
                      className="block w-full aspect-square object-cover border-2 border-secondary"
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:pr-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-3xl font-black">{item.title}</h3>
                    </div>
                    <p>{item.excerpt}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center gap-2 lg:pr-16">
          <CarouselPrevious className="static translate-none bg-secondary! border-none rounded-full" />
          <CarouselProgress />
          <CarouselNext className="static translate-none bg-secondary! border-none rounded-full" />
        </div>
      </Carousel>
    </section>
  )
}
