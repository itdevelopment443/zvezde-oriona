import { getText } from '@/frontend/utils/normalize'
import { LawBlock } from '@/payload-types'

export default function LawSection({ id, heading, content }: LawBlock) {
  return (
    <section id={getText(id)}>
      <div className="px-6 lg:px-12 py-6 lg:py-12 border-2 flex flex-col gap-8 ">
        <h1>{heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: content || '' }}></div>
      </div>
    </section>
  )
}
