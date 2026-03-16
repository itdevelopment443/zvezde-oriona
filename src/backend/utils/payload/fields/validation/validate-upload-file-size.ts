import type { UploadFieldSingleValidation } from 'payload'

export const validateUploadFileSize = (maxSize = 2 * 1024 * 1024): UploadFieldSingleValidation => {
  return (value) => {
    if (!value) return true

    if (typeof value === 'object' && value !== null && 'filesize' in value) {
      const filesize = (value as { filesize?: number }).filesize

      if (typeof filesize === 'number' && filesize > maxSize) {
        return `File size must be less than ${Math.floor(maxSize / 1024 / 1024)}MB`
      }
    }

    return true
  }
}
