import { Fragment, type ReactElement } from 'react'
import { SearchParams, SectionComponentMap } from '@/types/page-types'
import { RefreshPageOnSave } from './refresh-page'
import { Locale } from '@/i18n/i18n.config'

interface RenderSectionProps {
  section: any
  doc?: any
  year?: string
  searchParams: Awaited<SearchParams>
  locale: Locale
  isLivePreview: boolean
  sectionMap: SectionComponentMap
  fallbackKey: string
}

export const renderSection = ({
  section,
  doc,
  searchParams,
  locale,
  year,
  isLivePreview,
  sectionMap,
  fallbackKey,
}: RenderSectionProps): ReactElement | null => {
  const sectionProps = {
    ...section,
    doc,
    locale,
    year,
    searchParams,
    id: section.id ?? fallbackKey,
  }

  const SectionComponent = sectionMap[section.blockType]

  if (!SectionComponent) {
    console.warn(`No section found for block type: ${section.blockType}`)
    return null
  }

  return (
    <Fragment key={section.id ?? fallbackKey}>
      {isLivePreview && <RefreshPageOnSave />}
      <SectionComponent {...sectionProps} />
    </Fragment>
  )
}
