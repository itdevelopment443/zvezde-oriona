import type { Field } from 'payload'

interface ExcerptProps {
  minLength?: number
  maxLength?: number
  required?: boolean
  unique?: boolean
}

export const createExcerpt = ({
  minLength = 0, // Recommended minimum SEO length for excerpts 120
  maxLength = 150,
  required = false,
  unique = false,
}: ExcerptProps = {}): Field => {
  return {
    name: 'excerpt',
    type: 'textarea',
    minLength,
    maxLength,
    unique,
    required,
  }
}
