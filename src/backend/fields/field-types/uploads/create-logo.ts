import { createUpload, type UploadProps } from './base/create-upload'

type LogoProps = Omit<UploadProps, 'name' | 'relationTo'> & {
  name?: string
  relationTo?: UploadProps['relationTo']
}

export const createLogo = ({ name = 'logo', relationTo = 'images', ...props }: LogoProps = {}) =>
  createUpload({
    name,
    relationTo,
    ...props,
  } as UploadProps)
