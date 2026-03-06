import HomeHero from "@/components/sections/home/HomeHero";
import CarouselSectionThree from "@/components/sections/home/CarouselSectionThree";
import { newsArchive } from "@/constants/news-placeholder";
import { eventsArchive } from "@/constants/events-placeholder";
import { Seperator } from "@/components/sections/home/Seperator";
import CarouselSectionTwo from "@/components/sections/home/CarouselSectionTwo";
import CardSectionOne from "@/components/sections/home/CardSectionOne";

export default function HomePage() {
  return (
    <main className="pt-0">
      <HomeHero />
      <CarouselSectionThree className="-mt-18 lg:-mt-24" cards={newsArchive} />
      <CarouselSectionTwo
        title="Podelitev"
        description=" Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
          inceptos iaculis orci. Pretium pede mattis mollis praesent odio
          eleifend egestas. Tempor nascetur orci malesuada lacinia lectus est
          litora adipiscing vehicula pede. Libero enim cubilia turpis
          condimentum lacinia lobortis maximus quam facilisis bibendum. Nibh
          lectus cubilia mus sagittis iaculis."
        cards={eventsArchive}
      />
      <Seperator />
      <CardSectionOne
        title="Nagrade"
        description=" Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
          inceptos iaculis orci. Pretium pede mattis mollis praesent odio
          eleifend egestas. Tempor nascetur orci malesuada lacinia lectus est
          litora adipiscing vehicula pede. Libero enim cubilia turpis
          condimentum lacinia lobortis maximus quam facilisis bibendum. Nibh
          lectus cubilia mus sagittis iaculis."
        cards={newsArchive}
      />
    </main>
  );
}
