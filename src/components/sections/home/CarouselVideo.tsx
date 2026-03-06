import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface Video {
  vimeoId: string;
}

interface CarouselThreeProps {
  title: string;
  description?: string;
  videos: Video[];
  className?: string;
}

function getVimeoEmbedUrl(videoId: string) {
  return `https://player.vimeo.com/video/${videoId}`;
}

export default function CarouselVideo({
  title,
  description,
  videos,
  className,
}: CarouselThreeProps) {
  return (
    <section className={cn(" gap-6 lg:gap-8", className)}>
      <div className="flex gap-10 pr-16">
        <div className="flex gap-10 items-start">
          <div className="relative">
            <h2 className="uppercase">{title}</h2>
          </div>
          <div className="w-full h-[1.5px] bg-primary" />
        </div>
        <p className="text-xl">{description}</p>
      </div>
      <Carousel
        className="flex flex-col gap-6"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {videos.map((item, index) => (
            <CarouselItem
              className={cn("", {
                "lg:basis-1/3": videos.length <= 3,
                "lg:basis-1/2": videos.length === 2,
                "lg:basis-1/1": videos.length === 1,
              })}
              key={index}
            >
              <div className="py-6">
                <div className="w-full overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={getVimeoEmbedUrl(item.vimeoId)}
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
          className={cn("flex items-center gap-2", {
            hidden: videos.length < 2,
            "lg:hidden": videos.length <= 3,
          })}
        >
          <CarouselPrevious className="static translate-none bg-secondary! border-none rounded-full" />
          <CarouselProgress />
          <CarouselNext className="static translate-none bg-secondary! border-none rounded-full" />
        </div>
      </Carousel>
    </section>
  );
}
