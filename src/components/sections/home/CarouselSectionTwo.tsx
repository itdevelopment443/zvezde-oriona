import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { newsArchive } from "@/constants/news-placeholder";
import Image from "next/image";

export default function CarouselSectionThree() {
  return (
    <section className="px-10 py-30 flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <div className="flex gap-10 items-center">
          <div className="relative">
            <h2>Podelitev</h2>
            <div></div>
            <Image
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              src={"/cgp/lik.svg"}
              height={100}
              width={100}
              alt="lik"
            />
          </div>
          <div className="w-full h-[1.5px] bg-primary" />
        </div>
        <p className=" hidden">
          Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
          inceptos iaculis orci. Pretium pede mattis mollis praesent odio
          eleifend egestas. Tempor nascetur orci malesuada lacinia lectus est
          litora adipiscing vehicula pede. Libero enim cubilia turpis
          condimentum lacinia lobortis maximus quam facilisis bibendum. Nibh
          lectus cubilia mus sagittis iaculis.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {newsArchive.map((item, index) => (
            <CarouselItem className="basis-4/13 pl-4" key={index}>
              <div>
                <div className="flex flex-col items-start gap-8 py-6 ">
                  <div className="relative inline-block">
                    <Image
                      src={item.featured_image}
                      height={300}
                      width={500}
                      alt="prikazna slika"
                      className="block"
                    />
                    <div className=" absolute left-1/2 top-0 -translate-x-1/2  -translate-y-4/18  w-[95%] h-15 bg-primary -z-10" />
                  </div>
                  <div className=" flex flex-col gap-3 pr-5">
                    <div className="flex items-center gap-2">
                      <h3 className=" text-3xl font-black">{item.title}</h3>
                    </div>
                    <p>{item.excerpt}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
