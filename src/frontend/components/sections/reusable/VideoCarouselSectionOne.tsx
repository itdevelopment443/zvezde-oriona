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
import { VideoBlock } from '@/payload-types'

interface VideoCarouselSectionOneProps {
  id: string
  heading: string
  description?: string
  videos: VideoBlock['videos']
  className?: string
}

function getVimeoEmbedUrl(videoId: string) {
  return `https://player.vimeo.com/video/${videoId}`
}

export default function VideoCarouselSectionOne({
  id,
  heading,
  description,
  videos,
  className,
}: VideoCarouselSectionOneProps) {
  if (!videos) return

  return (
    <section id={id} className={cn(' gap-6 lg:gap-8', className)}>
      <div className="flex gap-10 pr-16">
        <div className="flex gap-10 items-start">
          <div className="relative">
            <h2 className="uppercase">{heading}</h2>
          </div>
          <div className="w-full h-[1.5px] bg-primary" />
        </div>
        <p className="text-xl">{description}</p>
      </div>
      <Carousel
        className="flex flex-col gap-6"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {videos?.map((item, index) => (
            <CarouselItem
              className={cn('', {
                'lg:basis-1/3': videos.length <= 3,
                'lg:basis-1/2': videos.length === 2,
                'lg:basis-1/1': videos.length === 1,
              })}
              key={index}
            >
              <div className="py-6">
                <div className="w-full overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={getVimeoEmbedUrl(getText(item.videoId))}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div
          className={cn('flex items-center gap-2', {
            hidden: videos.length < 2,
            'lg:hidden': videos.length <= 3,
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
