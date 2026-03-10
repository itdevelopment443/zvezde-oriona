import type { Field } from 'payload'

interface ExposedProps {
  name?: string
  label?: string
  required?: boolean
  unique?: boolean
}

export const createExposedContent = ({
  name = 'exposed-content',
  required = false,
  label = 'Expose Content',
  unique = false,
}: ExposedProps = {}): Field => {
  return {
    name,
    label,
    type: 'checkbox',
    unique,
    required,
    admin: {
      position: 'sidebar',
    },
  }
}
