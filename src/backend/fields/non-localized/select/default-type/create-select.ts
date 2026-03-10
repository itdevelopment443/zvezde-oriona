import type { Field } from 'payload'

interface SelectProps {
  name: string
  options?: string[]
  defaultValue?: string
  position?: 'sidebar' | 'default'
  required?: boolean
}

export const createSelect = ({
  name,
  options = [],
  defaultValue,
  position = 'default',
  required = true,
}: SelectProps): Field => {
  return {
    name,
    type: 'select',
    admin: {
      position: position === 'sidebar' ? 'sidebar' : undefined,
    },
    options,
    required,
    defaultValue,
  }
}
