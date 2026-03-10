import { generateSlugOnCreate, generateSlugOnSave } from '@/backend/hooks/format-slug'
import { Field } from 'payload'

interface SlugProps {
  required?: boolean
  operation?: 'onCreate' | 'onUpdate'
  fieldName?: string
  addRandomNumber?: boolean
}

export const createSlug = ({
  fieldName = 'title',
  operation = 'onCreate', // Trigger slug creation 'onCreate' or 'onUpdate'
  addRandomNumber = false,
  required = true,
}: SlugProps = {}): Field => {
  return {
    name: 'slug',
    type: 'text',
    index: true,
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeChange: [
        operation === 'onCreate'
          ? generateSlugOnCreate({ fieldName, addRandomNumber })
          : generateSlugOnSave({ fieldName, addRandomNumber }),
      ],
    },
    localized: true,
    required,
    unique: true,
  }
}
