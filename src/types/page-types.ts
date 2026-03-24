import { Locale } from '@/i18n/i18n.config'
import { ComponentType } from 'react'

export interface RouteParams {
  locale: Locale
  slug?: string
  year?: string
  limit?: string
  offset?: string
}

export type Params = Promise<RouteParams>
export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export interface BaseSection {
  id?: string | number
  blockType: string
  [key: string]: unknown
}

export type SectionComponentMap = Record<string, ComponentType<any>>

export interface QueryPageDataProps {
  locale: Locale
  slug?: string
  year?: string
}
