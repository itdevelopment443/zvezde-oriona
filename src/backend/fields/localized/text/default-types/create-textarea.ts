import type { Field } from 'payload'

interface TextareaProps {
  name: string
  required?: boolean
  unique?: boolean
}

export const createTextarea = ({
  name,
  required = false,
  unique = false,
}: TextareaProps): Field => {
  return {
    name,
    type: 'textarea',
    localized: true,
    unique,
    required,
  }
}
