import type { Option } from 'payload'
import { createSelect, type SelectProps } from './base/create-select'

const DEFAULT_START_YEAR = 2010
const DEFAULT_END_YEAR = new Date().getFullYear()

type YearProps = Omit<Parameters<typeof createSelect>[0], 'name' | 'options'> & {
  name?: string
  startYear?: number
  endYear?: number
}

const yearOptions = (startYear: number, endYear: number): Option[] =>
  Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = String(endYear - i)
    return { label: year, value: year }
  })

export const createYear = ({
  name = 'year',
  startYear = DEFAULT_START_YEAR,
  endYear = DEFAULT_END_YEAR,
  ...props
}: YearProps = {}) =>
  createSelect({
    name,
    options: yearOptions(startYear, endYear),
    ...props,
  } as SelectProps)
