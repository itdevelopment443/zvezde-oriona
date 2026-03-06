import EventsHero from "@/components/sections/events/EventsHero";
import CarouselGallery from "@/components/sections/home/CarouselGallery";
import CarouselSectionOne from "@/components/sections/home/CarouselSectionOne";
import CarouselVideo from "@/components/sections/home/CarouselVideo";
import { Seperator } from "@/components/sections/home/Seperator";
import { awwardsArchive } from "@/constants/awwards-placeholder";
import { eventsArchive } from "@/constants/events-placeholder";
import { videosArchive } from "@/constants/videos-placeholder";

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <Seperator />
      <CarouselSectionOne title="Nagrajenci" cards={awwardsArchive} />
      <Seperator />
      <CarouselGallery title="Fotoutrinki" cards={eventsArchive} />
      <Seperator />
      <CarouselVideo title="Videoteka" videos={videosArchive} />
    </main>
  );
}
