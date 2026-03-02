import AwardsHero from "@/components/sections/awards/AwardsHero";
import CarouselSectionOne from "@/components/sections/home/CarouselSectionOne";
import { newsArchive } from "@/constants/news-placeholder";

function AwardsPage() {
  return (
    <main className="py-30">
      <AwardsHero />
      <CarouselSectionOne title="2026" cards={newsArchive} />
      <CarouselSectionOne title="2025" cards={newsArchive} />
      <CarouselSectionOne title="2024" cards={newsArchive} />
    </main>
  );
}

export default AwardsPage;
