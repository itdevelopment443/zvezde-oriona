import { createSelect } from '../base/create-select'
import { contactIconOptions } from './utils/contact-icons-options'

type ContactIconProps = Omit<
  Parameters<typeof createSelect>[0],
  'name' | 'options' | 'required'
> & {
  name?: string
  required?: boolean
}

export const createContactIcon = ({
  name = 'icon',
  required = true,
  ...props
}: ContactIconProps = {}) =>
  createSelect({
    name,
    required,
    options: contactIconOptions,
    ...props,
  })
