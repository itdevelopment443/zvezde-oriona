import { AboutEventBlock, Event } from '@/payload-types'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../ui/dialog'
import { Button } from '../../ui/button'
import { getText } from '@/frontend/utils/normalize'
import { formatDate } from '@/frontend/lib/date'

interface AboutEventSectionProps extends AboutEventBlock {
  doc: Event
}

export default function AboutEventSection({
  id,
  content,
  'more-content': moreContent,
  doc,
}: AboutEventSectionProps) {
  return (
    <section id={getText(id)} className="gap-8 -mt-12">
      <div className="flex flex-col lg:items-start gap-8">
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        <div className="flex flex-col gap-2">
          <p>Datum: {formatDate(doc['published-at'])}</p>
          <p>Lokacija: {doc.location}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Več informacij o podelitvi</Button>
          </DialogTrigger>
          <DialogContent className=" bg-white text-black md:max-w-[80vw] max-h-[90vh] overflow-auto w-full">
            <DialogTitle className={'hidden'}></DialogTitle>
            {moreContent && <div dangerouslySetInnerHTML={{ __html: moreContent }} />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
