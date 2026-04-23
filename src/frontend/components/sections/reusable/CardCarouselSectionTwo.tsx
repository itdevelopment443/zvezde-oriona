import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from '@/frontend/components/ui/carousel'
import { cn } from '@/frontend/lib/utils'
import { getText } from '@/frontend/utils/normalize'
import { Card } from '@/types/card-types'
import Image from 'next/image'
import Link from 'next/link'

interface CardCarouselSectionTwoProps {
  id?: string | null
  heading: string
  description?: string
  cards: Card[]
  className?: string
}

export default function CardCarouselSectionTwo({
  id,
  heading,
  description,
  cards,
  className,
}: CardCarouselSectionTwoProps) {
  return (
    <section
      id={id || ''}
      className={cn('gap-6 lg:gap-8', className, {
        'lg:pr-0': cards.length > 3,
      })}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 ">
        <div className="flex gap-10 items-start">
          <div className="relative">
            <h2 className=" uppercase">{heading}</h2>
          </div>
          <div className="w-full h-[1.5px] bg-primary" />
        </div>
        <p className="lg:text-xl">{description}</p>
      </div>
      <Carousel
        className="flex flex-col gap-6"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent
          className={cn({
            '-ml-6': cards.length > 3,
          })}
        >
          {cards.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn('md:basis-1/2 lg:basis-4/13', {
                'lg:basis-1/3': cards.length < 4,
              })}
            >
              <Link href={getText(item.link?.href)} key={index}>
                <div className="flex flex-col items-start gap-8 py-6 ">
                  <div className="w-full">
                    <Image
                      src={item.featured_image}
                      height={600}
                      width={1000}
                      alt="prikazna slika"
                      className="w-full"
                    />
                    <div className=" absolute left-1/2 top-0 -translate-x-1/2  -translate-y-4/18  w-[95%] h-15 bg-primary -z-10" />
                  </div>
                  <div className=" flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      {item.upperHeading ?? <p>{item.upperHeading}</p>}
                      <h3 className="text-3xl uppercase font-black">{item.title}</h3>
                    </div>
                    <p>{item.excerpt}</p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={cn('flex items-center gap-2', {
            'lg:hidden lg:pr-16': cards.length <= 3,
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
