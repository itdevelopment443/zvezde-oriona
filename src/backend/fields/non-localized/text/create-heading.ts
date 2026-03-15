import type { TextField } from 'payload'

type HeadingField = Extract<TextField, { type: 'text'; hasMany?: false }>
type HeadingProps = Omit<HeadingField, 'name' | 'type' | 'hasMany'>

export const createHeading = (props: HeadingProps = {}): HeadingField => ({
  name: 'heading',
  type: 'text',
  hasMany: false,
  minLength: 0,
  maxLength: 60,
  ...props,
})
