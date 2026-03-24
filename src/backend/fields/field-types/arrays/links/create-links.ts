import type { CollectionSlug } from 'payload'
import { createArray, type ArrayProps, type ArrayReturn } from '../base/create-array'
import { createLinkTarget } from '../../select/link/create-target'
import { createLinkType } from '../../select/link/create-link-type'
import { createHref } from '../../text/link/create-href'
import { createRelationship } from '../../relationship/base/create-relationship'

type LinksProps = Omit<ArrayProps, 'name' | 'fields'> & {
  name?: string
  relationTo?: CollectionSlug[]
}

export const createLinks = ({
  name = 'links',
  relationTo = ['pages'],
  minRows = 0,
  maxRows,
  ...props
}: LinksProps = {}): ArrayReturn =>
  createArray({
    name,
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
  })
