import type { Field } from 'payload'

interface ExposedProps {
  name?: string
  label?: string
  required?: boolean
  unique?: boolean
}

export const createNumberOfColumns = ({
  name = 'number-of-columns',
  required = false,
  label = 'Number of columns',
  unique = false,
}: ExposedProps = {}): Field => {
  return {
    name,
    label,
    type: 'select',
    unique,
    defaultValue: '1',
    required,
    options: [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
      {
        label: '4',
        value: '4',
      },
    ],
  }
}
