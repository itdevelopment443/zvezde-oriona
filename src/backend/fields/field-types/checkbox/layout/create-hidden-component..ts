import { createCheckbox } from '../base/create-checkbox'

type HiddenComponentProps = Omit<Parameters<typeof createCheckbox>[0], 'name'> & {
  name?: string
}

export const createHiddenComponent = ({
  name = 'hidden-component',
  ...props
}: HiddenComponentProps = {}) =>
  createCheckbox({
    name,
    ...props,
  })
