import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const excluded = new Set(['createLucideIcon', 'Icon', 'icons'])

export const iconMap = Object.fromEntries(
  Object.entries(LucideIcons).filter(([key, value]) => {
    return !excluded.has(key) && typeof value === 'function'
  }),
) as Record<string, LucideIcon>

