import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { ArrayField } from 'payload'
import { createSelect } from '../../select/base/create-select'
import { createNumber } from '../../numbers/base/create-number'

type PriceField = Extract<ArrayField, { type: 'array' }>

interface PriceProps extends Omit<PriceField, 'type' | 'fields' | 'name'> {
  name?: string
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createPrice = ({
  name = 'price',
  conditionField,
  conditionValue,
  ...props
}: PriceProps = {}): PriceField => ({
  name,
  type: 'array',
  maxRows: 1,
  fields: [
    createNumber({
      name: 'amount',
      min: 0,
      defaultValue: 0,
      admin: { step: 0.01 },
    }),
    createSelect({
      name: 'currency',
      label: 'Currency',
      defaultValue: 'EUR',
      options: [
        { label: 'Euro (€)', value: 'EUR' },
        { label: 'Dollar ($)', value: 'USD' },
      ],
    }),
  ],
  ...props,
  admin: {
    condition: createAdminCondition(conditionField, conditionValue),
    ...props.admin,
  },
})
