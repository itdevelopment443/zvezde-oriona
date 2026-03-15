import type { TextareaField } from 'payload'

type DescriptionField = Extract<TextareaField, { type: 'textarea' }>
type DescriptionProps = Omit<DescriptionField, 'name' | 'type'>

export const createDescription = (props: DescriptionProps = {}): DescriptionField => ({
  name: 'description',
  type: 'textarea',
  minLength: 0,
  maxLength: 60,
  ...props,
})
