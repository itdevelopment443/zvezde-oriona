'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/frontend/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { SheetClose } from '../ui/sheet'

export interface SubMenuItem {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  subMenu?: SubMenuItem[]
}

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  if (!item.subMenu || item.subMenu.length === 0) {
    return (
      <li className="flex items-center">
        <Link className="text-lg uppercase font-medium" href={item.href}>
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li className="flex items-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild className="outline-none focus:outline-none">
          <button className="flex items-center gap-2 text-lg uppercase font-medium text-white cursor-pointer">
            {item.label}
            <ChevronDown
              strokeWidth={1}
              className={cn('transition-transform duration-200', { 'rotate-180': open })}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-none border border-white/20 bg-primary text-white min-w-48 p-0 shadow-lg"
          sideOffset={8}
        >
          {item.subMenu.map((sub, i) => (
            <DropdownMenuItem key={i} asChild className="rounded-none focus:bg-white/10 focus:text-white p-0">
              <Link
                href={sub.href}
                onClick={() => setOpen(false)}
                className="block w-full px-4 py-3 text-sm uppercase tracking-wide hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                {sub.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  )
}

export function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        {item.subMenu && item.subMenu.length > 0 ? (
          <button
            className="text-lg uppercase font-medium"
            onClick={() => setOpen((o) => !o)}
          >
            {item.label}
          </button>
        ) : (
          <SheetClose asChild>
            <Link href={item.href} className="text-lg uppercase font-medium">
              {item.label}
            </Link>
          </SheetClose>
        )}
        {item.subMenu && item.subMenu.length > 0 && (
          <ChevronDown
            strokeWidth={1}
            className={cn('transition-transform duration-200 cursor-pointer', {
              'rotate-180': open,
            })}
            onClick={() => setOpen((o) => !o)}
          />
        )}

      </div>
      {open && item.subMenu && (
        <ul className="flex flex-col gap-2 pl-4 border-l border-white/20">
          {item.subMenu.map((sub, i) => (
            <li key={i}>
              <SheetClose asChild>
                <Link href={sub.href} className="text-sm uppercase opacity-70 hover:opacity-100">
                  {sub.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
