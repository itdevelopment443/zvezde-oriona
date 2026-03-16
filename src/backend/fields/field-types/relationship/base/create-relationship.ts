import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { CollectionSlug, RelationshipField } from 'payload'

type SingleRelationshipField = Extract<
  RelationshipField,
  { type: 'relationship'; relationTo: CollectionSlug }
>

type MultiRelationshipField = Extract<
  RelationshipField,
  { type: 'relationship'; relationTo: CollectionSlug[] }
>

type SingleRelationshipProps = Omit<SingleRelationshipField, 'type' | 'hasMany'> & {
  conditionField?: string
  conditionValue?: string | number | boolean
}

type MultiRelationshipProps = Omit<MultiRelationshipField, 'type' | 'hasMany'> & {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export function createRelationship(props: SingleRelationshipProps): SingleRelationshipField
export function createRelationship(props: MultiRelationshipProps): MultiRelationshipField
export function createRelationship(
  props: SingleRelationshipProps | MultiRelationshipProps,
): SingleRelationshipField | MultiRelationshipField {
  const { conditionField, conditionValue, ...rest } = props

  return {
    type: 'relationship',
    ...rest,
    access: {
      ...allowAdminEditorAccess(),
      ...rest.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...rest.admin,
    },
  } as SingleRelationshipField | MultiRelationshipField
}
