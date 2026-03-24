import { Params, QueryPageDataProps, SearchParams } from '@/types/page-types'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { renderSection } from '@/frontend/components/payload/section-renderer'
import { notFound } from 'next/navigation'
import { RefreshPageOnSave } from '@/frontend/components/payload/refresh-page'
import { awardsSectionMap } from '@/frontend/constants/awards-sections'


export default async function AwardBySlug({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { locale, slug } = await params
  const resolvedSearchParams = await searchParams
  const isLivePreview = resolvedSearchParams.livePreview === 'true'
  const data = await queryPageData({ locale, slug })

  if (!data) notFound()

  return (
    <main>
      {isLivePreview && <RefreshPageOnSave />}
      {/* Blocks (AwardsHeroBlock etc.) */}
      {data.sections?.map((section, index) =>
        renderSection({
          section,
          doc: data,
          sectionMap: awardsSectionMap,
          locale,
          isLivePreview,
          searchParams: resolvedSearchParams,
          fallbackKey: `${section.blockType}-${section.id ?? index}`,
        }),
      )}
    </main>
  )
}

const queryPageData = cache(async ({ locale, slug }: QueryPageDataProps) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'awards',
      locale: locale,
      limit: 1,
      where: { slug: { equals: slug } },
    })

    return result.docs?.[0] ?? null
  } catch (error) {
    console.error('Error fetching award data:', error)
    return null
  }
})
