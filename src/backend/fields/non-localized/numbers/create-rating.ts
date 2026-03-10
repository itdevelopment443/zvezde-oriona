import type { Field } from 'payload'

interface RatingProps {
  min?: number
  max?: number
  defaultValue?: number
  required?: boolean
}

export const createRating = ({
  min = 1,
  max = 5,
  defaultValue = 5,
  required = true,
}: RatingProps = {}): Field => {
  return {
    name: 'rating',
    type: 'number',
    admin: {
      step: 1,
    },
    // Any ixes value type error
    validate: (value: any) => {
      if (value < min || value > max) return `Rating must be between ${min} and ${max}.`
      if (!Number.isInteger(value)) return 'Rating must be a whole number.'
      return true
    },
    defaultValue,
    min,
    max,
    required,
  }
}
