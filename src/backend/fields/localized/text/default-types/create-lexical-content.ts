import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Field } from 'payload'
import { convertLexical } from '../../../converters/convert-lexical'
import { capitalize } from '@/backend/utils/capitalize'

interface LexicalProps {
  name?: string
  convertedName?: string
  required?: boolean
  unique?: boolean
}

export function createLexicalContent({
  name = 'lexical-content',
  convertedName = 'content', // HTML rendered field name
  required = false,
  unique = false,
}: LexicalProps = {}): Field[] {
  const field: Field = {
    name,
    type: 'richText',
    label: capitalize(convertedName),
    editor: lexicalEditor({ features: ({ defaultFeatures }) => [...defaultFeatures] }),
    localized: true,
    required,
    unique,
  }

  const converterField = convertLexical({ fieldName: name, convertedName })

  return [field, converterField]
}
