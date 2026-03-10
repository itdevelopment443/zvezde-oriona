import type { Field } from 'payload'

interface DescriptionProps {
  minLength?: number
  maxLength?: number
  required?: boolean
  unique?: boolean
}

export const createDescription = ({
  minLength = 0,
  maxLength = 300,
  required = false,
  unique = false,
}: DescriptionProps = {}): Field => {
  return {
    name: 'description',
    type: 'textarea',
    minLength,
    maxLength,
    required,
    unique,
  }
}
