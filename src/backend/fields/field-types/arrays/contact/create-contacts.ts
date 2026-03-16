import type { Field } from 'payload'
import { createText } from '../../text/base/create-text'
import { createLinkTarget } from '../../select/link/create-target'
import { createContactIcon } from '../../select/icons/create-contact-icon'

interface ContactsProps {
  name?: string
  minRows?: number
  required?: boolean
}

export const createContacts = ({
  name = 'contacts',
  minRows = 1,
  required = true,
}: ContactsProps = {}): Field => {
  return {
    name,
    type: 'array',
    minRows,
    required,
    admin: {
      components: {
        RowLabel: '@/backend/components/ContactRowLabel',
      },
    },
    fields: [
      createContactIcon(),
      createLinkTarget(),
      createText({
        name: 'value',
        required: true,
      }),
    ],
  }
}
