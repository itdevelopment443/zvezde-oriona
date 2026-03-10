import { generateSlugOnCreate, generateSlugOnSave } from '@/backend/hooks/format-slug'
import { Field } from 'payload'

interface SlugProps {
  required?: boolean
  operation?: 'onCreate' | 'onUpdate'
  fieldName?: string
  addRandomNumber?: boolean
  position?: 'sidebar' | 'default'
}

export const createSlug = ({
  fieldName = 'title',
  operation = 'onCreate',
  addRandomNumber = false,
  required = true,
  position = 'sidebar',
}: SlugProps = {}): Field => {
  return {
    name: 'slug',
    type: 'text',
    required,
    unique: true,
    admin: {
      position: position === 'sidebar' ? 'sidebar' : undefined,
    },
    hooks: {
      beforeChange: [
        operation === 'onCreate'
          ? generateSlugOnCreate({ fieldName, addRandomNumber })
          : generateSlugOnSave({ fieldName, addRandomNumber }),
      ],
    },
  }
}
