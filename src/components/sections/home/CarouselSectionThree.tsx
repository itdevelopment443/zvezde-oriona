import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { newsArchive } from "@/constants/news-placeholder";
import Link from "next/link";

export default function CarouselSectionThree() {
  return (
    <section>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {newsArchive.map((item, index) => (
            <CarouselItem className="pl-0" key={index}>
              <div
                className="grid grid-cols-5 py-10 min-h-[70vh] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.featured_image})`,
                }}
              >
                <div className=" col-span-3"></div>
                <div className="bg-black flex flex-col items-start justify-center gap-5 p-15 col-span-2">
                  <div className="w-full flex justify-between">
                    <h2 className=" text-3xl font-black">{item.title}</h2>
                    <div className=" flex gap-2">
                      <CarouselPrevious className="static translate-none" />
                      <CarouselNext className="static translate-none" />
                    </div>
                  </div>
                  <p>{item.excerpt}</p>
                  <Link href={item.href}>
                    <Button size={"lg"}>Preberi več</Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
