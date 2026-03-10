import type { Field } from 'payload'

interface TextareaProps {
  name: string
  required?: boolean
  unique?: boolean
  position?: 'sidebar' | 'default'
  readonly?: boolean
}

export const createTextarea = ({
  name,
  required = false,
  unique = false,
  position = "default",
  readonly = false,
}: TextareaProps): Field => {
  return {
    name,
    type: 'textarea',
    admin: {
      position: position === "sidebar" ? 'sidebar' : undefined,
      readOnly: readonly,
    },
    unique,
    required,
  }
}
