import { ContentBlock } from '@/payload-types'

export default function ContentSectionOne({ id, content }: ContentBlock) {
  return (
    <section id={id || ''}>
      <div dangerouslySetInnerHTML={{ __html: content || '' }}></div>
    </section>
  )
}
