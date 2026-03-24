import type { Field } from 'payload'

interface GeneratedComponentProps {
  label?: string
}

export const createGeneratedComponent = ({
  label = 'Generated Component',
}: GeneratedComponentProps = {}): Field => {
  return {
    type: 'ui',
    name: 'generatedComponentInfo',
    label,
    admin: {
      components: {
        Field: '@/backend/components/GeneratedComponentInfo',
      },
    },
  }
}
