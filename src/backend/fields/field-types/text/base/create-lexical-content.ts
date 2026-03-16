import type { Field } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { capitalize, removeSeparators } from '@/backend/utils/general/text-formater'
import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import { convertLexical } from '@/backend/utils/payload/fields/converters/convert-lexical'

type LexicalContentField = Extract<Field, { type: 'richText' }>
type LexicalContentProps = Omit<LexicalContentField, 'name' | 'type'> & {
  name?: string
  convertedName?: string
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createLexicalContent = ({
  name = 'lexical-content',
  convertedName = 'content',
  conditionField,
  conditionValue,
  ...props
}: LexicalContentProps = {}): Field[] => {
  const field: LexicalContentField = {
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
  }

  const converterField = convertLexical({
    fieldName: name,
    convertedName,
  })

  return [field, converterField]
}
