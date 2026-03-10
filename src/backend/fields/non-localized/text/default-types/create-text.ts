import type { Field } from 'payload'

interface TextProps {
  name: string
  required?: boolean
  unique?: boolean
  position?: 'sidebar' | 'default'
  readonly?: boolean
  useAsTitle?: boolean
}

// No default value needed anymore, since `name` is required
export const createText = ({
  name,
  required = false,
  unique = false,
  position = 'default',
  readonly = false,
}: TextProps): Field => {
  return {
    name,
    admin: {
      position: position === 'sidebar' ? 'sidebar' : undefined,
      readOnly: readonly,
    },
    type: 'text',
    unique,
    required,
  }
}
