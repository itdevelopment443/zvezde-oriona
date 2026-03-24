import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NewsArchiveBlock } from '@/payload-types'
import { Locale } from '@/i18n/i18n.config'
import { getImage } from '@/frontend/utils/normalize'
import { Card } from '@/types/card-types'
import NewsArchiveClient from '../NewsClient'
import ReusableCombobox from '../../reusable/QuerySelect'
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
    .filter((item): item is typeof item & { year: string } => typeof item.year === 'string')
    .map((item) => ({
      label: item.year,
      value: item.year,
    }))
    .sort((a, b) => Number(b.value) - Number(a.value))

  const selectedYear = year || ''

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
      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 lg:gap-0">
          <div className="flex w-full">
            <h1 className="max-w-[20ch]">{heading}</h1>
          </div>
          {description && <p className="text-xl max-w-xl pr-10">{description}</p>}
          {yearOptions.length > 0 && (
            <div className="flex lg:justify-end w-full lg:w-260">
              <ReusableCombobox
                className="w-full px-4 py-6 lg:py-8 rounded-none border-2 border-white"
                inputClassName="text-xl! lg:text-2xl! uppercase font-bold placeholder:text-lg! lg:placeholder:text-2xl! placeholder:font-normal"
                options={yearOptions}
                defaultValue={year.toString()}
                queryKey="year"
                placeholder="IZBERI LETO"
                allowDeselect
              />
            </div>
          )}
        </div>
      </div>

      <NewsArchiveClient items={cards} totalDocs={result.totalDocs} currentLimit={limit} step={9} />
    </section>
  )
}
