import { generateRandomNumber } from '@/backend/utils/general/generate-random-number'
import { stringifySlug } from '@/backend/utils/general/stringify-slug'
import type { FieldHook } from 'payload'

interface SlugProps {
  fieldName: string
  addRandomNumber?: boolean
}

// Generate slug from field on create operation
export const generateSlugOnCreate =
  ({ fieldName, addRandomNumber = false }: SlugProps): FieldHook =>
  ({ operation, data }) => {
    if (operation === 'create') {
      const field = data?.[fieldName]
      if (typeof field === 'string' && field.length) {
        let slug = stringifySlug(field)
        if (addRandomNumber) {
          const randomNumber = generateRandomNumber()
          slug += `-${randomNumber}`
        }
        return slug
      }
    }
  }

// Generate slug from field on create or update operations.
export const generateSlugOnSave =
  ({ fieldName, addRandomNumber = false }: SlugProps): FieldHook =>
  ({ operation, data }) => {
    if (operation === 'create' || operation === 'update') {
      const field = data?.[fieldName]
      if (typeof field === 'string' && field.length) {
        let slug = stringifySlug(field)
        if (addRandomNumber) {
          const randomNumber = generateRandomNumber()
          slug += `-${randomNumber}`
        }
        return slug
      }
    }
  }
