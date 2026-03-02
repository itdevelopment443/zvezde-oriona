import NewsArchiveClient from "./NewsClient";
import { Card } from "../home/CarouselSectionTwo";

interface NewsArchive {
  title: string;
  description?: string;
  cards: Card[];
}

export default function NewsArchive({
  title,
  description,
  cards,
}: NewsArchive) {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex gap-10 items-center px-16 ">
        <h1>{title}</h1>
        {description ?? <p>{description}</p>}
      </div>
      <NewsArchiveClient items={cards} />
    </section>
  );
}
