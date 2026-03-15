import { getText } from '@/frontend/utils/normalize'
import { Event } from '@/payload-types'

export default function AwardsHero({ id, title }: Event) {
  return (
    <section id={getText(id)} className="gap-8">
      <div className="flex items-center">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[20ch]">{title}</h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="max-w-[80ch] text-xl">
              Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce inceptos iaculis
              orci. Pretium pede mattis mollis praesent odio eleifend egestas. Tempor nascetur orci
              malesuada lacinia lectus est litora adipiscing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
