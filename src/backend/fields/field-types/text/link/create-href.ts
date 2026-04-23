import { createText, type TextProps } from '../base/create-text'

type HrefProps = Omit<Parameters<typeof createText>[0], 'name' | 'minLength' | 'maxLength'> & {
  name?: string
}

export const createHref = ({ name = 'href', ...props }: HrefProps = {}) =>
  createText({
    name,
    minLength: 0,
    maxLength: 120,
    ...props,
  } as TextProps)
