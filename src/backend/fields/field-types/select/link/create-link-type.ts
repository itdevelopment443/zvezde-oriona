import { createSelect } from '../base/create-select'
import type { Option } from 'payload'

type LinkTypeProps = Omit<Parameters<typeof createSelect>[0], 'name' | 'options'> & {
  name?: string
  options?: Option[]
}

export const linkTypeOptions: Option[] = [
  { value: 'custom', label: 'Custom URL' },
  { value: 'internal', label: 'Internal page' },
]

export const createLinkType = ({
  name = 'type',
  defaultValue = 'custom',
  options = linkTypeOptions,
  ...props
}: LinkTypeProps = {}) =>
  createSelect({
    name,
    label: 'Link type',
    defaultValue,
    options,
    ...props,
  })
