import HomeHero from "@/components/sections/home/HomeHero";
import CarouselSectionThree from "@/components/sections/home/CarouselSectionThree";
import CarouselSectionTwo from "@/components/sections/home/CarouselSectionTwo";
import CarouselSectionOne from "@/components/sections/home/CarouselSectionOne";
import { newsArchive } from "@/constants/news-placeholder";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <CarouselSectionThree />
      <CarouselSectionTwo
        title="Podelitev"
        description=" Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
          inceptos iaculis orci. Pretium pede mattis mollis praesent odio
          eleifend egestas. Tempor nascetur orci malesuada lacinia lectus est
          litora adipiscing vehicula pede. Libero enim cubilia turpis
          condimentum lacinia lobortis maximus quam facilisis bibendum. Nibh
          lectus cubilia mus sagittis iaculis."
        cards={newsArchive}
      />
      <CarouselSectionOne
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
