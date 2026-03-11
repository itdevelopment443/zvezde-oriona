import type { Field } from 'payload'

interface CreatedAtProps {
  required?: boolean
  unique?: boolean
}

export const createPublishedAt = ({
  required = true,
  unique = false,
}: CreatedAtProps = {}): Field => {
  return {
    name: 'published-at',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
    defaultValue: () => new Date(),
    required,
    unique,
  }
}
