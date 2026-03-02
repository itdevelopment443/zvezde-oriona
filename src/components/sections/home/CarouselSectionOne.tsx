import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";
import Image from "next/image";

export interface Card {
  upperHeading?: string;
  title: string;
  featured_image: string;
  excerpt: string;
  href: string;
}

interface CarouselOneProps {
  title: string;
  description?: string;
  cards: Card[];
}

export default function CarouselSectionOne({
  title,
  description,
  cards,
}: CarouselOneProps) {
  return (
    <section className="pl-16 pb-30 flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <div className="flex gap-10 items-center">
          <div className="relative">
            <h2>{title}</h2>
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              src={"/cgp/lik.svg"}
              height={100}
              width={100}
              alt="lik"
            />
          </div>
          <div className="w-full h-[1.5px] bg-primary" />
        </div>
        {description ?? <p className=" hidden">{description}</p>}
      </div>
      <Carousel
        className="flex flex-col gap-6"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-8 ">
          {cards.map((item, index) => (
            <CarouselItem className="basis-4/14 translate-x-4 pl-8" key={index}>
              <div>
                <div className="flex flex-col items-start gap-8 py-6 ">
                  <div className="relative inline-block">
                    {/* IMAGE */}
                    <Image
                      src={item.featured_image}
                      height={500}
                      width={500}
                      alt="prikazna slika"
                      className="block aspect-square object-cover"
                    />
                    <div className="absolute w-16 h-16 bg-primary -top-2 -left-2 -z-20" />
                    <div className="absolute w-16 h-16 bg-primary -top-2 -right-2 -z-20" />
                    <div className="absolute w-16 h-16 bg-primary -bottom-2 -left-2 -z-20" />
                    <div className="absolute w-16 h-16 bg-primary -bottom-2 -right-2 -z-20" />
                  </div>
                  <div className="flex flex-col gap-3 pr-5">
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
        <div className="flex items-center gap-2 pr-16">
          <CarouselPrevious className="static translate-none rounded-none bg-primary! border-none" />
          <CarouselProgress />
          <CarouselNext className="static translate-none rounded-none bg-primary! border-none" />
        </div>
      </Carousel>
    </section>
  );
}
