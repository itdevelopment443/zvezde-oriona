import type { Option } from 'payload'
import { Role } from '../../../../utils/payload/fields/access/role-checker'
import { createSelect, type SelectProps } from '../base/create-select'

type RolesProps = Omit<Parameters<typeof createSelect>[0], 'name' | 'options'> & {
  additionalRoles?: Role[]
}

const roleOptions = (additionalRoles: Role[] = []): Option[] =>
  ['admin', 'editor', 'user', ...additionalRoles].map((value) => ({
    label: value,
    value,
  }))

export const createRoles = ({ additionalRoles = [], required = true, ...props }: RolesProps = {}) =>
  createSelect({
    name: 'role',
    options: roleOptions(additionalRoles),
    required,
    ...props,
  } as SelectProps)
