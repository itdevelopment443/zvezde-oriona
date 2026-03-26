import { Event } from '@/payload-types'
import { getText } from '@/frontend/utils/normalize'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import EventYearSelect from './EventYearSelect'

interface EventsHeroProps extends Event {
  locale: string
}

export default async function EventsHero({ id, title, year, locale }: EventsHeroProps) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    sort: 'year',
    limit: 50,
    select: { year: true },
  })

  const years = result.docs.map((e) => e.year).filter((y): y is NonNullable<typeof y> => y != null)

  return (
    <section id={getText(id)} className="gap-8">
      <div className="flex items-center">
        <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 lg:gap-0">
          <div className="flex w-full">
            <h1 className="max-w-[20ch]">{title}</h1>
          </div>
          <div className="flex lg:justify-end w-full pb-8 lg:w-260">
            <EventYearSelect
              years={years}
              currentYear={year ?? ''}
              locale={locale}
              className=" px-4 py-6 w-full lg:w-auto lg:py-8 rounded-none border-2 border-white"
              inputClassName="text-xl! lg:text-2xl! uppercase font-bold placeholder:text-lg! lg:placeholder:text-2xl! placeholder:font-normal"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
