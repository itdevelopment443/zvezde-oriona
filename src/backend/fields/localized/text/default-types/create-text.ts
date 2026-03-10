import type { Field } from 'payload'

interface TextProps {
  name: string // <-- now required
  required?: boolean
  unique?: boolean
}

// No default value needed anymore, since `name` is required
export const createText = ({ name, required = false, unique = false }: TextProps): Field => {
  return {
    name,
    type: 'text',
    localized: true,
    unique,
    required,
  }
}
