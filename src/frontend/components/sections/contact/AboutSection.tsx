import { contactIconMap } from '@/backend/fields/non-localized/icons/utils/contact-icon-mapper'
import { ContactIconName } from '@/backend/fields/non-localized/icons/utils/contact-icons-options'
import { iconMap } from '@/backend/fields/non-localized/icons/utils/icon-mapper'
import { AboutUsBlock } from '@/payload-types'
import Link from 'next/link'

function getContactHref(icon: ContactIconName, value: string): string {
  switch (icon) {
    case 'Mail':
      return `mailto:${value}`
    case 'Phone':
      return `tel:${value}`
    case 'Globe':
      return value
    case 'MapPin':
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`
    default:
      return value
  }
}

export default function AboutSection({ heading, content, contacts }: AboutUsBlock) {
  return (
    <section>
      <div className="flex items-center">
        <h1 className="max-w-[20ch]">{heading}</h1>
      </div>

      <div id="about-section" className="grid gap-10 -mt-8 lg:mt-0 lg:grid-cols-5">
        <div className="col-span-2 flex flex-col gap-6">
          {contacts?.map((item, index) => {
            const iconName = item.icon as ContactIconName
            const Icon = contactIconMap[iconName]

            console.log('iconName', iconName)
            console.log('Icon', Icon)

            if (!Icon || !item.value) return null

            const href = getContactHref(iconName, item.value)

            return (
              <Link
                href={href}
                target={item.target || '_self'}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5"
                key={index}
              >
                <div className="flex h-15 w-15 items-center justify-center border-2 border-white p-4">
                  <Icon />
                </div>
                <div>{item.value}</div>
              </Link>
            )
          })}
        </div>

        <div
          className="col-span-3 flex flex-col gap-6"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
      </div>
    </section>
  )
}
