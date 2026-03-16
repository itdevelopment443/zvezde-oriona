import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import type { ContactIconName } from './contact-icons-options'

export const contactIconMap = {
  Mail,
  Phone,
  MapPin,
  Globe,
} satisfies Record<ContactIconName, React.ComponentType<{ className?: string }>>
