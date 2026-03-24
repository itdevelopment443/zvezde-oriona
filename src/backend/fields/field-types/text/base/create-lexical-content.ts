import type { Field, RichTextField } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { capitalize, removeSeparators } from '@/backend/utils/general/text-formater'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import { convertLexical } from '@/backend/utils/payload/fields/converters/convert-lexical'

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type LexicalContentReturn = Extract<RichTextField, { type: 'richText' }>
export type LexicalContentProps = Omit<LexicalContentReturn, 'name' | 'type'> &
  BaseProps & {
    name?: string
    convertedName?: string
  }

export const createLexicalContent = ({
  name = 'lexical-content',
  convertedName = 'content',
  conditionField,
  conditionValue,
  ...props
}: LexicalContentProps = {}): Field[] => {
  const field: LexicalContentReturn = ({
    name,
    type: 'richText',
    label: removeSeparators(capitalize(convertedName)),
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => [...defaultFeatures],
    }),
    ...props,
    access: {
      ...allowAdminEditorAccess(),
      ...props.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...props.admin,
    },
  }) as LexicalContentReturn

  const converterField = convertLexical({
    fieldName: name,
    convertedName,
  })

  return [field, converterField]
}
