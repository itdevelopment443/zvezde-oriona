import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import { RefreshPageOnSave } from '@/frontend/components/payload/refresh-page'
import { SearchParams, Params, QueryPageDataProps } from '@/types/page-types'
import { renderSection } from '@/frontend/components/payload/section-renderer'
import NewsHero from '@/frontend/components/sections/news/NewsBySlug/NewsHero'
import { newsSectionMap } from '@/frontend/constants/news-sections'

const NewsBySlugPage = async ({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) => {
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
      <NewsHero {...data} />
      {data.sections?.map((section, index) =>
        renderSection({
          section,
          sectionMap: newsSectionMap,
          locale,
          isLivePreview,
          searchParams: resolvedSearchParams,
          fallbackKey: `${section.blockType}-${section.id ?? index}`,
        }),
      )}
    </main>
  )
}

export default NewsBySlugPage

const queryPageData = cache(async ({ locale, slug }: QueryPageDataProps) => {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'news',
      locale,
      limit: 1,
      where: {
        and: [{ slug: { equals: slug } }],
      },
    })

    return result.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
})
