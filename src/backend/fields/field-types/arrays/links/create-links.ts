import type { ArrayField, CollectionSlug, RelationshipField } from 'payload'
import { createLinkTarget } from '../../select/link/create-target'
import { createLinkType } from '../../select/link/create-link-type'
import { createHref } from '../../text/link/create-href'
import { createAdminCondition } from '@/backend/utils/payload/fields/conditions/create-admin-condition'
import { createRelationship } from '../../relationship/base/create-relationship'

type LinksField = Extract<ArrayField, { type: 'array' }>

interface LinksProps extends Omit<LinksField, 'type' | 'fields' | 'name'> {
  name?: string
  relationTo?: CollectionSlug[]
  conditionField?: string
  conditionValue?: string | number | boolean
}

export const createLinks = ({
  name = 'links',
  relationTo = ['pages'],
  conditionField,
  conditionValue,
  minRows = 0,
  maxRows,
  ...props
}: LinksProps = {}): LinksField => ({
  name,
  type: 'array',
  minRows,
  maxRows,
  fields: [
    createLinkType(),
    createLinkTarget(),
    createHref(),
    createRelationship({
      name: 'internal-pages',
      relationTo,
      conditionField: 'type',
      conditionValue: 'internal',
    }),
  ],
  ...props,
  admin: {
    condition: createAdminCondition(conditionField, conditionValue),
    ...props.admin,
  },
})
