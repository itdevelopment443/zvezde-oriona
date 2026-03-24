import { createText, type TextProps } from '../base/create-text'

type TitleProps = Omit<Parameters<typeof createText>[0], 'name' | 'minLength' | 'maxLength'> & {
  name?: string
}

export const createTitle = ({ name = 'title', ...props }: TitleProps = {}) =>
  createText({
    name,
    minLength: 0,
    maxLength: 60,
    ...props,
  } as TextProps)
