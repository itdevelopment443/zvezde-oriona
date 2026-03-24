import { createSelect, type SelectProps } from '../base/create-select'
import type { Option } from 'payload'

type LinkTargetProps = Omit<Parameters<typeof createSelect>[0], 'name' | 'options'> & {
  name?: string
  options?: Option[]
}

export const linkTargetOptions: Option[] = [
  { value: '_self', label: 'Same window' },
  { value: '_blank', label: 'New window' },
]

export const createLinkTarget = ({
  name = 'target',
  defaultValue = '_self',
  options = linkTargetOptions,
  ...props
}: LinkTargetProps = {}) =>
  createSelect({
    name,
    defaultValue,
    options,
    ...props,
  } as SelectProps)
