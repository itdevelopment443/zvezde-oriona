import type { Field } from 'payload'

interface HeadingProps {
  minLength?: number
  maxLength?: number
  required?: boolean
  unique?: boolean
}

export const createHeading = ({
  minLength = 0,
  maxLength = 60,
  required = false,
  unique = false,
}: HeadingProps = {}): Field => {
  return {
    name: 'heading',
    type: 'text',
    minLength,
    maxLength,
    required,
    unique,
  }
}
