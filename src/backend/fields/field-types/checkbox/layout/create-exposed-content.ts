import { createCheckbox } from '../base/create-checkbox'

type ExposedContentProps = Omit<Parameters<typeof createCheckbox>[0], 'name'> & {
  name?: string
}

export const createExposedContent = ({
  name = 'exposed-content',
  ...props
}: ExposedContentProps = {}) =>
  createCheckbox({
    name,
    ...props,
    admin: {
      position: 'sidebar',
      ...props.admin,
    },
  })
