import { lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { Field } from 'payload'

interface ConvertLexicalProps {
  fieldName: string
  convertedName: string
}

export const convertLexical = ({ fieldName, convertedName }: ConvertLexicalProps): Field => {
  return lexicalHTMLField({
    lexicalFieldName: fieldName,
    htmlFieldName: convertedName,
  })
}
