import { createTextarea } from '../base/create-textarea'

type ExcerptProps = Omit<
  Parameters<typeof createTextarea>[0],
  'name' | 'minLength' | 'maxLength'
> & {
  name?: string
}

export const createExcerpt = ({ name = 'excerpt', ...props }: ExcerptProps = {}) =>
  createTextarea({
    name,
    minLength: 0,
    maxLength: 2000,
    ...props,
  })
