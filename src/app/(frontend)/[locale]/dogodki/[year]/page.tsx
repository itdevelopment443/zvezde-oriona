import { Params, QueryPageDataProps, SearchParams } from '@/types/page-types'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { renderSection } from '@/frontend/components/payload/section-renderer'
import { notFound } from 'next/navigation'
import { RefreshPageOnSave } from '@/frontend/components/payload/refresh-page'
import EventsHero from '@/frontend/components/sections/events/EventsHero'
import { eventsSectionMap } from '@/frontend/constants/events-sections'

export default async function EventBySlug({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { locale, year } = await params
  const resolvedSearchParams = await searchParams
  const isLivePreview = resolvedSearchParams.livePreview === 'true'
  const data = await queryPageData({ locale, year })

  if (!data) {
    notFound()
  }

  return (
    <main>
      {isLivePreview && <RefreshPageOnSave />}
      <EventsHero {...data} locale={locale} />
      {data.sections?.map((section, index) =>
        renderSection({
          section,
          doc: data,
          sectionMap: eventsSectionMap,
          locale,
          year,
          isLivePreview,
          searchParams: resolvedSearchParams,
          fallbackKey: `${section.blockType}-${section.id ?? index}`,
        }),
      )}
    </main>
  )
}

const queryPageData = cache(async ({ locale, year }: QueryPageDataProps) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'events',
      locale: locale,
      limit: 1,
      where: { year: { equals: year } },
    })

    return result.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
})
