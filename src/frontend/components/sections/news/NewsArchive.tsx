import NewsArchiveClient from './NewsClient'
import { Card } from '../reusable/CardCarouselSectionTwo'
import ComboboxAwards from '../awards/ComboboxAwards'

interface NewsArchive {
  title: string
  description?: string
  cards: Card[]
}

export default function NewsArchive({ title, description, cards }: NewsArchive) {
  return (
    <section className="gap-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
        <h1 className="w-3/5">{title}</h1>
        <p className=" text-xl">{description}</p>
        <ComboboxAwards />
      </div>
      <NewsArchiveClient items={cards} />
    </section>
  )
}
