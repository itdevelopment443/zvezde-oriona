import { createText, type TextProps } from './base/create-text'

type HeadingProps = Omit<Parameters<typeof createText>[0], 'name' | 'minLength' | 'maxLength'> & {
  name?: string
}

export const createHeading = ({ name = 'heading', ...props }: HeadingProps = {}) =>
  createText({
    name,
    minLength: 0,
    maxLength: 60,
    ...props,
  } as TextProps)
