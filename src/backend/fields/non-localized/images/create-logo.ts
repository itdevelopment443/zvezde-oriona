import type { Field } from 'payload'

interface LogoProps {
  required?: boolean
}

export const createLogo = ({ required = false }: LogoProps = {}): Field => {
  return {
    name: 'logo',
    type: 'upload',
    relationTo: 'images',
    required,
  }
}
