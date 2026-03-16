import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { NumberField } from 'payload'

type RatingField = Extract<NumberField, { type: 'number'; hasMany?: false }>
type RatingProps = Omit<RatingField, 'name' | 'type' | 'hasMany'> & {
  name?: string
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createRating = ({
  name = 'rating',
  min = 0,
  max = 10,
  defaultValue = 0,
  conditionField,
  conditionValue,
  ...props
}: RatingProps = {}): RatingField => ({
  name,
  type: 'number',
  hasMany: false,
  min,
  max,
  defaultValue,
  ...props,
  validate: (value: number | null | undefined) => {
    if (value == null) return true
    if (value < min || value > max) return `Rating must be between ${min} and ${max}.`
    if (!Number.isInteger(value)) return 'Rating must be a whole number.'
    return true
  },
  admin: {
    condition: createAdminCondition(conditionField, conditionValue),
    ...props.admin,
  },
})
