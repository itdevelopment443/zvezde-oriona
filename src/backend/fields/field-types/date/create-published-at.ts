import { createDate } from './base/create-date'

type PublishedAtProps = Omit<Parameters<typeof createDate>[0], 'name' | 'defaultValue'> & {
  name?: string
}

export const createPublishedAt = ({ name = 'published-at', ...props }: PublishedAtProps = {}) =>
  createDate({
    name,
    required: true,
    defaultValue: () => new Date(),
    typescriptSchema: [() => ({ type: 'string' })],
    admin: {
      position: 'sidebar',
      date: {
        displayFormat: 'dd.MM.yyyy',
      },
      ...props.admin,
    },
    ...props,
  })
