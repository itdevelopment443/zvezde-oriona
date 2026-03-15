import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NewsArchiveBlock } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import { getImage } from '@/frontend/utils/normalize'
import { Card } from '@/types/card-types'
import NewsArchiveClient from './NewsClient'
import ReusableCombobox from '../reusable/QuerySelect'
import { SearchParams } from '@/types/page-types'

interface NewsArchiveProps extends NewsArchiveBlock {
  locale: Locale
  searchParams: SearchParams
}

export default async function NewsArchive({
  heading,
  description,
  locale,
  searchParams,
}: NewsArchiveProps) {
  const params = await searchParams
  const year = params.year || ''
  const limit = Number(params.limit) > 0 ? Number(params.limit) : 9

  const payload = await getPayload({ config: configPromise })

  const yearsResult = await payload.find({
    collection: 'news-years',
    sort: '-year',
    limit: 100,
    depth: 0,
  })

  const yearOptions = yearsResult.docs
    .map((item) => ({
      label: item.year,
      value: item.year,
    }))
    .sort((a, b) => Number(b.value) - Number(a.value))

  const selectedYear = year || yearOptions[0]?.value || ''

  const and = []

  if (selectedYear) {
    const startOfYear = new Date(Date.UTC(Number(selectedYear), 0, 1, 0, 0, 0, 0)).toISOString()

    const startOfNextYear = new Date(
      Date.UTC(Number(selectedYear) + 1, 0, 1, 0, 0, 0, 0),
    ).toISOString()

    and.push(
      {
        'published-at': {
          greater_than_equal: startOfYear,
        },
      },
      {
        'published-at': {
          less_than: startOfNextYear,
        },
      },
    )
  }

  const result = await payload.find({
    collection: 'news',
    locale,
    where: and.length ? { and } : undefined,
    sort: '-published-at',
    limit,
  })

  const cards: Card[] = result.docs.map((v) => {
    const image = getImage(v['featured-image'])

    return {
      title: v.title || '',
      featured_image: image?.url || '',
      excerpt: v.excerpt || '',
      link: {
        label: 'Preberi več',
        href: `/${locale}/novice/${v.slug}`,
      },
    }
  })

  return (
    <section className="gap-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
        <h1 className="w-3/5">{heading}</h1>
        <p className="text-xl">{description}</p>

        {yearOptions.length > 0 && (
          <ReusableCombobox
            className="w-full lg:w-2/5 px-4 py-10 rounded-none border-2 border-white"
            inputClassName="text-4xl! uppercase font-bold placeholder:text-3xl! placeholder:font-normal"
            options={yearOptions}
            defaultValue={selectedYear.toString()}
            queryKey="year"
          />
        )}
      </div>

      <NewsArchiveClient items={cards} totalDocs={result.totalDocs} currentLimit={limit} step={9} />
    </section>
  )
}
