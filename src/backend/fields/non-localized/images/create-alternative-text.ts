import type { Field } from 'payload'

interface AlternativeTextProps {
  name?: string
  required?: boolean
}

export const createAlternativeText = ({
  name = 'alt',
  required = true,
}: AlternativeTextProps = {}): Field => {
  return {
    name,
    type: 'text',
    required,
  }
}
