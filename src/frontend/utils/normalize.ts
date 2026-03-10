import type { Image } from '@/payload-types'

export function getImage(image: unknown): Image | null {
  if (!image || typeof image !== 'object') return null

  const media = image as Image
  if (!media.url) return null

  return media
}

export function getText(value: unknown, fallback = ''): string {
  if (typeof value === 'string') {
    const trimmed = value.trim()
    return trimmed || fallback
  }

  return fallback
}

export function getNumber(value: unknown, fallback = 0): number {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return value
  }

  if (typeof value === 'string') {
    const parsed = Number(value)
    return Number.isNaN(parsed) ? fallback : parsed
  }

  return fallback
}
