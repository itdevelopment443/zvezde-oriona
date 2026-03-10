import { iconMap } from './icon-mapper'

export const iconOptions = Object.keys(iconMap).map((name) => ({
  label: name,
  value: name,
}))

export type IconName = keyof typeof iconMap
