import type { Field } from 'payload'

interface NumberProps {
  name: string
  min?: number
  max?: number
  position?: 'sidebar' | 'default'
  defaultValue?: number
  conditionField?: string // <- field we check against
  conditionValue?: string | number | boolean // <- value to match
  required?: boolean
}

export const createNumber = ({
  name,
  min = 0,
  max = 2000,
  defaultValue = 5,
  conditionField,
  conditionValue,
  position = 'default',
  required = true,
}: NumberProps): Field => {
  return {
    name,
    type: 'number',
    admin: {
      position: position === 'sidebar' ? 'sidebar' : undefined,
      condition: (data) => {
        if (!conditionField) return true // always show if no condition
        return data?.[conditionField] === conditionValue
      },
    },
    defaultValue,
    min,
    max,
    required,
  }
}
