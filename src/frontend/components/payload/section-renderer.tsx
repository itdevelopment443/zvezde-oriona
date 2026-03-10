import { SectionComponentMap } from '@/types/page-types'
import { Fragment } from 'react/jsx-runtime'
import { RefreshPageOnSave } from './refresh-page'

interface RenderSectionProps {
  section: any
  props: any
  sectionMap: SectionComponentMap
  fallbackKey: string
}

export const renderSection = ({ section, props, sectionMap, fallbackKey }: RenderSectionProps) => {
  const { isLivePreview, locale } = props
  const sectionProps = {
    ...section,
    locale,
    id: section.id || fallbackKey || undefined,
  }

  const SectionComponent = sectionMap[section.blockType]

  if (!SectionComponent) {
    console.warn(`No section found for block type: ${section.blockType}`)
    return null
  }

  return (
    <Fragment key={section.id}>
      {isLivePreview && <RefreshPageOnSave />}
      <SectionComponent {...sectionProps} />
    </Fragment>
  )
}
