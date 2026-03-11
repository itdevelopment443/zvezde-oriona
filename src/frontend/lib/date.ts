import { Option } from '@/types/select-types'

interface YearRange {
  startYear: number
  endYear?: number
}

export function generateYearOptions({ startYear, endYear }: YearRange): Option[] {
  const currentYear = new Date().getFullYear()
  const finalYear = endYear ?? currentYear

  const years: Option[] = []

  for (let year = startYear; year <= finalYear; year++) {
    years.push({
      value: String(year),
      label: String(year),
    })
  }

  return years
}

export function formatDate(
  date: string | Date,
  locale: string = 'sl',
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  },
) {
  const parsed = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, options).format(parsed)
}
