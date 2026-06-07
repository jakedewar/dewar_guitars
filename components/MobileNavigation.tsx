'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

interface MobileNavigationProps {
  className?: string
}

const navLinks = [
  { href: '/#story', label: 'Story' },
  { href: '/#collection', label: 'Collection' },
  { href: '/#craftsmanship', label: 'Craftsmanship' },
  { href: 'mailto:info@dewarguitars.com', label: 'Contact' },
]

export default function MobileNavigation({ className = '' }: MobileNavigationProps) {
  return (
    <div className={`lg:hidden ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 p-2"
            aria-label="Open mobile menu"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              touchAction: 'manipulation',
            }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-80 max-w-[85vw] bg-ink border-l border-white/10 p-0"
        >
          <div className="flex flex-col h-full">
            <SheetHeader className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <SheetTitle className="type-eyebrow text-on-dark-primary text-left">
                  Menu
                </SheetTitle>
                <SheetClose asChild>
                  <button
                    className="text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 p-1 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
                    aria-label="Close menu"
                    style={{
                      minWidth: '44px',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            <nav className="flex-1 px-4 py-8">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 type-eyebrow text-base py-3 border-b border-white/10 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
                      style={{
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        touchAction: 'manipulation',
                      }}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </nav>

            <div className="p-4 border-t border-white/10">
              <div className="space-y-4">
                <p className="type-caption text-on-dark-muted">
                  Handcrafted in Holliston, Massachusetts
                </p>
                <div className="flex space-x-4">
                  <a
                    href="mailto:info@dewarguitars.com"
                    className="type-body text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
                    style={{
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    Contact
                  </a>
                  <a
                    href="https://instagram.com/dewarguitars"
                    className="type-body text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
                    style={{
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
