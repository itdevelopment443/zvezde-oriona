import type { Field } from 'payload'

interface CreateLinkTargetProps {
  name?: string
  required?: boolean
  defaultValue?: string
}

export const linkTargetOptions = [
  {
    value: '_self',
    label: 'Same window',
  },
  {
    value: '_blank',
    label: 'New window',
  },
]

export const createLinkTarget = ({
  name = 'target',
  required = false,
  defaultValue = '_self',
}: CreateLinkTargetProps = {}): Field => {
  return {
    name,
    type: 'select',
    defaultValue,
    required,
    options: linkTargetOptions,
  }
}
