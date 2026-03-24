import { createText, type TextProps } from '../base/create-text'

type AlternativeTextProps = Omit<Parameters<typeof createText>[0], 'name'> & {
  name?: string
}

export const createAlternativeText = ({ name = 'alt', ...props }: AlternativeTextProps = {}) =>
  createText({
    name,
    ...props,
  } as TextProps)
