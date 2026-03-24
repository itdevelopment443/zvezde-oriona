import { createArray, type ArrayProps, type ArrayReturn } from '../base/create-array'
import { createText, type TextProps } from '../../text/base/create-text'
import { createLinkTarget } from '../../select/link/create-target'
import { createContactIcon } from '../../select/icons/create-contact-icon'

type ContactsProps = Omit<ArrayProps, 'name' | 'fields'> & {
  name?: string
}

export const createContacts = ({
  name = 'contacts',
  minRows = 1,
  required = true,
  ...props
}: ContactsProps = {}): ArrayReturn =>
  createArray({
    name,
    minRows,
    required,
    fields: [
      createContactIcon(),
      createLinkTarget(),
      createText({ name: 'value', required: true } as TextProps),
    ],
    admin: {
      components: {
        RowLabel: '@/backend/components/ContactRowLabel',
      },
      ...props.admin,
    },
    ...props,
  })
