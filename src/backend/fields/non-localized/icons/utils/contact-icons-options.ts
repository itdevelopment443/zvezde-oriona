export const contactIconNames = ['Mail', 'Phone', 'MapPin', 'Globe'] as const

export type ContactIconName = (typeof contactIconNames)[number]

export const contactIconOptions = contactIconNames.map((name) => ({
  label: name,
  value: name,
}))
