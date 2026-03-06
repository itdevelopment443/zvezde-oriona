import AwardsHero from "@/components/sections/awards/AwardsHero";
import CarouselSectionOne from "@/components/sections/home/CarouselSectionOne";
import { Seperator } from "@/components/sections/home/Seperator";
import { awwardsArchive } from "@/constants/awwards-placeholder";

function AwardsPage() {
  return (
    <main>
      <AwardsHero />
      <Seperator />
      <CarouselSectionOne title="2026" cards={awwardsArchive} />
      <Seperator />
      <CarouselSectionOne title="2025" cards={awwardsArchive} />
      <Seperator />
      <CarouselSectionOne title="2024" cards={awwardsArchive} />
    </main>
  );
}

export default AwardsPage;
