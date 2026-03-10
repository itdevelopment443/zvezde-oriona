import type { Field } from 'payload'

interface TitleProps {
  minLength?: number
  maxLength?: number
  required?: boolean
  unique?: boolean
}

export const createTitle = ({
  minLength = 0, // Recommended minimum SEO length for titles 50
  maxLength = 60,
  required = false,
  unique = false,
}: TitleProps = {}): Field => {
  return {
    name: 'title',
    type: 'text',
    localized: true,
    minLength,
    maxLength,
    required,
    unique,
  }
}
