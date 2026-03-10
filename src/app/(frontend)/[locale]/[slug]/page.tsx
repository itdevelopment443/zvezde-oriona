import { Params, QueryPageDataProps, SearchParams } from '@/types/page-types'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { renderSection } from '@/frontend/components/payload/section-renderer'
import { notFound } from 'next/navigation'
import { RefreshPageOnSave } from '@/frontend/components/payload/refresh-page'
import { sectionMap } from '@/frontend/constants/page-sections'

export default async function PageBySlug({
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

  if (!data) {
    notFound()
  }

  return (
    <main>
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

const queryPageData = cache(async ({ locale, slug }: QueryPageDataProps) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const whereCondition = {
      slug: { equals: slug },
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
