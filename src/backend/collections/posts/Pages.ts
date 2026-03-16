import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access-control/isAdminOrEditor'
import { createSlug } from '@/backend/fields/non-localized/text/create-slug'
import { HomeHeroBlock } from '@/backend/blocks/home-hero-block'
import { ExposedNewsBlock } from '@/backend/blocks/exposed-news-block'
import { SeperatorBlock } from '@/backend/blocks/seperator-block'
import { EventsBlock } from '@/backend/blocks/events-block'
import { AwardsBlock } from '@/backend/blocks/awards-block'
import { AboutUsBlock } from '@/backend/blocks/about-us-block'
import { LawBlock } from '@/backend/blocks/law-block'
import { NewsArchiveBlock } from '@/backend/blocks/news-archive-block'
import { createPublishedAt } from '@/backend/fields/field-types/date/create-published-at'
import { createFeaturedImage } from '@/backend/fields/field-types/images/create-featured-image'
import { createExcerpt } from '@/backend/fields/field-types/text/page/create-excerpt'
import { createTitle } from '@/backend/fields/field-types/text/page/create-title'

export const Pages: CollectionConfig = {
  slug: 'pages',
  orderable: true,
  admin: {
    useAsTitle: 'title',
    group: 'Posts',
    defaultColumns: ['title', 'excerpt', 'slug', 'createdAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        const localePrefix = locale.code || 'sl'
        const isHomePage = data?.slug === 'domaca-stran' || data?.slug === 'home-page'
        const endUrl = isHomePage
          ? `${siteUrl}/${localePrefix}?isDraft=true&livePreview=true`
          : `${siteUrl}/${localePrefix}/${data?.slug}?isDraft=true&livePreview=true`

        console.log(endUrl)

        return endUrl
      },
    },
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  lockDocuments: {
    duration: 120, // Keep locked document 2 minutes after unactivity
  },
  trash: true,
  fields: [
    createPublishedAt(),
    createSlug(),
    createTitle({ required: true, unique: true }),
    createExcerpt({ required: true }),
    createFeaturedImage(),
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        HomeHeroBlock,
        ExposedNewsBlock,
        EventsBlock,
        SeperatorBlock,
        AwardsBlock,
        AboutUsBlock,
        LawBlock,
        NewsArchiveBlock,
      ],
    },
  ],
}
