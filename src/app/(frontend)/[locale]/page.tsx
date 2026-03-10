import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import { RefreshPageOnSave } from '@/frontend/components/payload/refresh-page'
import { SearchParams, Params, QueryPageDataProps } from '@/types/page-types'
import { renderSection } from '@/frontend/components/payload/section-renderer'
import { sectionMap } from '@/frontend/constants/page-sections'

const HomePage = async ({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) => {
  const { locale } = await params
  const resolvedSearchParams = await searchParams
  const isLivePreview = resolvedSearchParams.livePreview === 'true'
  const data = await queryPageData({ locale })

  if (!data) {
    notFound()
  }

  return (
    <main className="pt-0">
      {isLivePreview && <RefreshPageOnSave />}
      {data.sections?.map((section, index) =>
        renderSection({
          section,
          sectionMap,
          props: searchParams,
          fallbackKey: `${section.blockType}-${section.id ?? index}`,
        }),
      )}
    </main>
  )
}

export default HomePage

// Render individual sections based on their type
const queryPageData = cache(async ({ locale }: QueryPageDataProps) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const whereCondition = {
      slug: { equals: 'domaca-stran' },
    }

    const result = await payload.find({
      collection: 'pages',
      locale: locale,
      limit: 1,
      where: { and: [whereCondition] },
    })

    const data = result.docs?.[0] || null

    return data
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
})
