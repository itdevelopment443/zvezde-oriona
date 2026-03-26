import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { NavDropdown, MobileNavItem, NavItem } from './NavDropdown'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

interface HeaderProps {
  locale: Promise<{ locale: string }>
}

export default async function Header({ locale: localePromise }: HeaderProps) {
  const { locale } = await localePromise

  const payload = await getPayload({ config: configPromise })

  const [awardsResult, eventsResult] = await Promise.all([
    payload.find({
      collection: 'awards',
      locale: locale as 'sl' | 'en',
      sort: '-title',
      limit: 20,
    }),
    payload.find({ collection: 'events', locale: locale as 'sl' | 'en', sort: 'year', limit: 20 }),
  ])

  const navItems: NavItem[] = [
    {
      label: 'Podelitve',
      href: `/${locale}/#dogodki`,
      subMenu: eventsResult.docs.map((event) => ({
        label: event.year ?? String(event.year),
        href: `/${locale}/dogodki/${event.year}`,
      })),
    },
    {
      label: 'Nagrade',
      href: `/${locale}/#nagrade`,
      subMenu: awardsResult.docs.map((award) => ({
        label: award.title ?? '',
        href: `/${locale}/nagrade/${award.slug}`,
      })),
    },
    {
      label: 'Novice',
      href: `/${locale}/novice`,
    },
    {
      label: 'O nas',
      href: `/${locale}/o-nas`,
    },
  ]

  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-between bg-primary py-2 px-8 lg:px-16">
      <div className="w-20">
        <Link href={`/${locale}`}>
          <Image src="/cgp/logo.svg" className="h-20" height={100} width={100} alt="Logo" />
        </Link>
      </div>

      {/* Desktop */}
      <nav className="hidden lg:block">
        <ol className="flex gap-6">
          {navItems.map((item, index) => (
            <NavDropdown key={index} item={item} />
          ))}
        </ol>
      </nav>

      <div className="hidden lg:block">
        <Link href="https://aipa.si">
          <Image src="/cgp/aipa-logo-white.png" height={50} width={50} alt="AIPA Logo" />
        </Link>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="w-7 h-7 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-white w-full px-8 py-20 z-9999">
            <SheetTitle className="hidden" />
            <nav>
              <ol className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <MobileNavItem key={index} item={item} />
                ))}
              </ol>
              <div className="mt-10">
                <Link href="https://aipa.si">
                  <Image src="/cgp/aipa-logo-white.png" height={50} width={50} alt="AIPA Logo" />
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
