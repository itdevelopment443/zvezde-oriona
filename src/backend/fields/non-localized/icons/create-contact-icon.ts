import type { Field } from 'payload'
import { contactIconOptions } from './utils/contact-icons-options'

interface CreateIconsProps {
  name?: string
  required?: boolean
}

export const createContactIcon = ({
  name = 'icon',
  required = true,
}: CreateIconsProps = {}): Field => {
  return {
    name,
    type: 'select',
    required,
    options: contactIconOptions,
  }
}
