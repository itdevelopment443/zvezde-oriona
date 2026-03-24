import type { Option } from 'payload'
import { createSelect, type SelectProps } from '../base/create-select'

type NumberOfColumnsProps = Omit<Parameters<typeof createSelect>[0], 'name' | 'options'> & {
  name?: string
  options?: Option[]
}

export const numberOfColumnsOptions: Option[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
]

export const createNumberOfColumns = ({
  name = 'number-of-columns',
  options = numberOfColumnsOptions,
  defaultValue = '1',
  ...props
}: NumberOfColumnsProps = {}) =>
  createSelect({
    name,
    options,
    defaultValue,
    ...props,
  } as SelectProps)
