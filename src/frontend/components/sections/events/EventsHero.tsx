import { Event } from '@/payload-types'
import ReusableCombobox from '../reusable/QuerySelect'
import { getText } from '@/frontend/utils/normalize'

export default function EventsHero({ id, title }: Event) {
  return (
    <section id={getText(id)} className="gap-8">
      <div className="flex items-center">
        <div className=" flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 lg:gap-0">
          <div className="flex w-full">
            <h1 className="max-w-[20ch]">{title}</h1>
          </div>
          <div className="flex lg:justify-end w-full lg:w-260">
            <ReusableCombobox
              className="w-full lg:w-2/5 px-4 py-10 rounded-none border-2 border-white"
              inputClassName="text-4xl! uppercase font-bold placeholder:text-3xl! placeholder:font-normal"
              options={[]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
