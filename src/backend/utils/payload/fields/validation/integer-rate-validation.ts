import type { NumberFieldSingleValidation } from 'payload'

type IntegerRangeValidationProps = {
  min: number
  max: number
  label?: string
}

export const createIntegerRangeValidation = ({
  min,
  max,
  label = 'Value',
}: IntegerRangeValidationProps): NumberFieldSingleValidation => {
  return (value) => {
    if (value == null) return true
    if (value < min || value > max) return `${label} must be between ${min} and ${max}.`
    if (!Number.isInteger(value)) return `${label} must be a whole number.`
    return true
  }
}
