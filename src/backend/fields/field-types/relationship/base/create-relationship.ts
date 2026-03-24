import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import type { CollectionSlug, RelationshipField } from 'payload'

type RelSingleToOne = Extract<
  RelationshipField,
  { type: 'relationship'; hasMany?: false; relationTo: CollectionSlug }
>
type RelSingleToMany = Extract<
  RelationshipField,
  { type: 'relationship'; hasMany?: false; relationTo: CollectionSlug[] }
>
type RelManyToOne = Extract<
  RelationshipField,
  { type: 'relationship'; hasMany: true; relationTo: CollectionSlug }
>
type RelManyToMany = Extract<
  RelationshipField,
  { type: 'relationship'; hasMany: true; relationTo: CollectionSlug[] }
>

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type RelationshipPropsSingleToOne = Omit<RelSingleToOne, 'type'> & BaseProps
export type RelationshipPropsSingleToMany = Omit<RelSingleToMany, 'type'> & BaseProps
export type RelationshipPropsManyToOne = Omit<RelManyToOne, 'type'> & BaseProps
export type RelationshipPropsManyToMany = Omit<RelManyToMany, 'type'> & BaseProps

export type RelationshipProps =
  | RelationshipPropsSingleToOne
  | RelationshipPropsSingleToMany
  | RelationshipPropsManyToOne
  | RelationshipPropsManyToMany

export type RelationshipReturn = RelSingleToOne | RelSingleToMany | RelManyToOne | RelManyToMany

export function createRelationship(props: RelationshipPropsSingleToOne): RelSingleToOne
export function createRelationship(props: RelationshipPropsSingleToMany): RelSingleToMany
export function createRelationship(props: RelationshipPropsManyToOne): RelManyToOne
export function createRelationship(props: RelationshipPropsManyToMany): RelManyToMany
export function createRelationship(props: RelationshipProps): RelationshipReturn {
  const { conditionField, conditionValue, hasMany, ...rest } = props

  return {
    type: 'relationship',
    hasMany: hasMany ?? false,
    ...rest,
    access: {
      ...allowAdminEditorAccess(),
      ...rest.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...rest.admin,
    },
  } as RelationshipReturn
}
