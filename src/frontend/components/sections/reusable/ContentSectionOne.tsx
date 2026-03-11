import { ContentBlock } from '@/payload-types'

export default function ContentSectionOne({ content }: ContentBlock) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content || '' }}></div>
    </section>
  )
}
