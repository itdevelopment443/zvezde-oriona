import { createTextarea } from './base/create-textarea'

type DescriptionProps = Omit<
  Parameters<typeof createTextarea>[0],
  'name' | 'minLength' | 'maxLength'
> & {
  name?: string
}

export const createDescription = ({ name = 'description', ...props }: DescriptionProps = {}) =>
  createTextarea({
    name,
    minLength: 0,
    maxLength: 2000,
    ...props,
  })
