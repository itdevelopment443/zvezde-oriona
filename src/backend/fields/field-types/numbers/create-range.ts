import { createNumber, type NumberProps } from './base/create-number'

type RangeProps = Omit<Parameters<typeof createNumber>[0], 'name' | 'validate'> & {
  name?: string
}

export const createRange = ({
  name = 'range',
  min = 0,
  max = 100,
  defaultValue = 0,
  ...props
}: RangeProps = {}) =>
  createNumber({
    name,
    min,
    max,
    defaultValue,
    ...props,
  } as NumberProps)
