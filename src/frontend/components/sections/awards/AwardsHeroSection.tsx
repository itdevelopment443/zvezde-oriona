import { Award, AwardsHeroBlock } from '@/payload-types'
import { getText } from '@/frontend/utils/normalize'

interface AwardsHeroSectionProps extends AwardsHeroBlock {
  doc: Award
}

export default function AwardsHeroSection({
  id,
  doc,
  heading,
  description,
}: AwardsHeroSectionProps) {
  const { title } = doc

  return (
    <section id={getText(id)} className="gap-8">
      <div className="grid lg:grid-cols-2  gap-6">
        <h2 className="uppercase leading-17 max-w-120">{getText(title || heading)}</h2>
        {description && <p className="text-xl">{description}</p>}
      </div>
    </section>
  )
}
