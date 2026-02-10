import HomeHero from "@/components/sections/home/HomeHero";
import CarouselSectionThree from "@/components/sections/home/CarouselSectionThree";
import CarouselSectionTwo from "@/components/sections/home/CarouselSectionTwo";
import CarouselSectionOne from "@/components/sections/home/CarouselSectionOne";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <CarouselSectionThree />
      <CarouselSectionTwo />
      <CarouselSectionOne />
    </main>
  );
}
