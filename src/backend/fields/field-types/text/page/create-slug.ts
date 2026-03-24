import { generateSlugOnCreate, generateSlugOnSave } from '@/backend/hooks/payload/format-slug'
import { createText, type TextProps } from '../base/create-text'

type SlugProps = Omit<Parameters<typeof createText>[0], 'name' | 'unique'> & {
  name?: string
  unique?: boolean
  operation?: 'onCreate' | 'onUpdate'
  fieldName?: string
  addRandomNumber?: boolean
}

export const createSlug = ({
  name = 'slug',
  unique = true,
  fieldName = 'title',
  operation = 'onCreate',
  addRandomNumber = false,
  ...props
}: SlugProps = {}) =>
  createText({
    name,
    unique,
    ...props,
    admin: {
      position: 'sidebar',
      ...props.admin,
    },
    hooks: {
      ...props.hooks,
      beforeChange: [
        operation === 'onCreate'
          ? generateSlugOnCreate({ fieldName, addRandomNumber })
          : generateSlugOnSave({ fieldName, addRandomNumber }),
        ...(props.hooks?.beforeChange || []),
      ],
    },
  } as TextProps)
