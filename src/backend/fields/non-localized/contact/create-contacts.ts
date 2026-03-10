import type { Field } from 'payload'
import { createText } from '../text/default-types/create-text'
import { createContactIcon } from '../icons/create-contact-icon'
import { createLinkTarget } from '../link/create-target'

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
