import type { Field } from 'payload'

interface CreatedAtProps {
  required?: boolean
  unique?: boolean
}

export const createCreatedAt = ({
  required = false,
  unique = false,
}: CreatedAtProps = {}): Field => {
  return {
    name: 'createdAt',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
    defaultValue: () => new Date(),
    required,
    unique,
  }
}
