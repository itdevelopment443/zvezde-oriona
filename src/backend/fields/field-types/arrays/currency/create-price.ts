import { createArray, type ArrayProps, type ArrayReturn } from '../base/create-array'
import { createSelect, type SelectProps } from '../../select/base/create-select'
import { createNumber, type NumberProps } from '../../numbers/base/create-number'

type PriceProps = Omit<ArrayProps, 'name' | 'fields'> & {
  name?: string
}

export const createPrice = ({ name = 'price', ...props }: PriceProps = {}): ArrayReturn =>
  createArray({
    name,
    maxRows: 1,
    fields: [
      createNumber({
        name: 'amount',
        min: 0,
        defaultValue: 0,
        admin: { step: 0.01 },
      } as NumberProps),
      createSelect({
        name: 'currency',
        label: 'Currency',
        defaultValue: 'EUR',
        options: [
          { label: 'Euro (€)', value: 'EUR' },
          { label: 'Dollar ($)', value: 'USD' },
        ],
      } as SelectProps),
    ],
    ...props,
  })
