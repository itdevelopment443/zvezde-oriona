import { createIntegerRangeValidation } from '@/backend/utils/payload/fields/validation/integer-rate-validation'
import { createNumber, type NumberProps } from './base/create-number'

type RatingProps = Omit<Parameters<typeof createNumber>[0], 'name' | 'validate'> & {
  name?: string
}

export const createRating = ({
  name = 'rating',
  min = 0,
  max = 10,
  defaultValue = 0,
  ...props
}: RatingProps = {}) =>
  createNumber({
    name,
    min,
    max,
    defaultValue,
    ...props,
    validate: createIntegerRangeValidation({
      min,
      max,
      label: 'Rating',
    }),
  } as NumberProps)
