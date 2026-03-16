import { allowAdminEditorAccess } from '@/backend/utils/payload/fields/access/allow-admin-editor-access'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import { validateUploadFileSize } from '@/backend/utils/payload/fields/validation/validate-upload-file-size'
import type {
  CollectionSlug,
  UploadField as UploadFieldPayload,
  UploadFieldManyValidation,
  UploadFieldSingleValidation,
} from 'payload'

type UploadSingleOneRelation = Extract<
  UploadFieldPayload,
  { type: 'upload'; hasMany?: false; relationTo: CollectionSlug }
>

type UploadSingleManyRelations = Extract<
  UploadFieldPayload,
  { type: 'upload'; hasMany?: false; relationTo: CollectionSlug[] }
>

type UploadManyOneRelation = Extract<
  UploadFieldPayload,
  { type: 'upload'; hasMany: true; relationTo: CollectionSlug }
>

type UploadManyManyRelations = Extract<
  UploadFieldPayload,
  { type: 'upload'; hasMany: true; relationTo: CollectionSlug[] }
>

type BaseProps = {
  conditionField?: string
  conditionValue?: string | number | boolean
}

export type UploadPropsSingleOneRelation = Omit<
  UploadSingleOneRelation,
  'type' | 'validate' | 'max' | 'min' | 'maxRows' | 'minRows'
> &
  BaseProps & {
    hasMany?: false
    validate?: UploadFieldSingleValidation
  }

export type UploadPropsSingleManyRelations = Omit<
  UploadSingleManyRelations,
  'type' | 'validate' | 'max' | 'min' | 'maxRows' | 'minRows'
> &
  BaseProps & {
    hasMany?: false
    validate?: UploadFieldSingleValidation
  }

export type UploadPropsManyOneRelation = Omit<UploadManyOneRelation, 'type' | 'validate'> &
  BaseProps & {
    hasMany: true
    validate?: UploadFieldManyValidation
  }

export type UploadPropsManyManyRelations = Omit<UploadManyManyRelations, 'type' | 'validate'> &
  BaseProps & {
    hasMany: true
    validate?: UploadFieldManyValidation
  }

export type UploadProps =
  | UploadPropsSingleOneRelation
  | UploadPropsSingleManyRelations
  | UploadPropsManyOneRelation
  | UploadPropsManyManyRelations

export type UploadReturn =
  | UploadSingleOneRelation
  | UploadSingleManyRelations
  | UploadManyOneRelation
  | UploadManyManyRelations

export const createUpload = ({
  conditionField,
  conditionValue,
  validate,
  hasMany = false,
  ...props
}: UploadProps): UploadReturn =>
  ({
    type: 'upload',
    hasMany,
    ...props,
    validate: validate ?? validateUploadFileSize(),
    access: {
      ...allowAdminEditorAccess(),
      ...props.access,
    },
    admin: {
      condition: createAdminCondition(conditionField, conditionValue),
      ...props.admin,
    },
  }) as UploadReturn
