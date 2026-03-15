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

interface GalleryCarouselSectionOneProps {
  id: string
  heading: string
  description?: string
  cards: Card[]
  className?: string
}

export default function GalleryCarouselSectionOne({
  id,
  heading,
  description,
  cards,
  className,
}: GalleryCarouselSectionOneProps) {
  return (
    <section id={id} className={cn('gap-6 lg:gap-8', className)}>
      <div className="flex gap-10 pr-16">
        <div className="flex gap-10 items-start">
          <div className="relative">
            <h2 className=" uppercase">{heading}</h2>
          </div>
          <div className="w-full h-[1.5px] bg-primary" />
        </div>
        <p className=" text-xl">{description}</p>
      </div>
      <Carousel
        className="flex flex-col gap-6"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {cards.map((item, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
              <div>
                <div className="flex flex-col items-start gap-8 py-6 ">
                  <div className="w-full relative group">
                    <Image
                      src={item.featured_image}
                      height={300}
                      width={500}
                      alt="prikazna slika"
                      className="w-full"
                    />

                    <div className="absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <h3 className="text-3xl uppercase font-black">{item.title}</h3>
                      <p>{item.excerpt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={cn('flex items-center gap-2', {
            hidden: cards.length === 1,
          })}
        >
          <CarouselPrevious className="static translate-none bg-secondary! border-none rounded-full" />
          <CarouselProgress />
          <CarouselNext className="static translate-none bg-secondary! border-none rounded-full" />
        </div>
      </Carousel>
    </section>
  )
}
