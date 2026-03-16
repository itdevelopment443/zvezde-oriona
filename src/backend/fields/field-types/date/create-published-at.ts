import { createDate } from './base/create-date'

type PublishedAtProps = Omit<Parameters<typeof createDate>[0], 'name' | 'defaultValue'> & {
  name?: string
}

export const createPublishedAt = ({ name = 'published-at', ...props }: PublishedAtProps = {}) =>
  createDate({
    name,
    defaultValue: () => new Date(),
    admin: {
      position: 'sidebar',
      ...props.admin,
    },
    ...props,
  })
