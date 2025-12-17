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

export default function MobileNavigation({ className = '' }: MobileNavigationProps) {
  return (
    <div className={`lg:hidden ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <button 
            className="text-white/80 hover:text-white transition-colors duration-300 p-2"
            aria-label="Open mobile menu"
            style={{ 
              minWidth: '44px', 
              minHeight: '44px',
              touchAction: 'manipulation',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="w-80 max-w-[85vw] bg-black border-l border-white/10 p-0"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <SheetHeader className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-white/90 text-sm font-normal tracking-[0.1em] uppercase text-left">
                  Menu
                </SheetTitle>
                <SheetClose asChild>
                  <button 
                    className="text-white/90 hover:text-white transition-colors duration-300 p-1 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label="Close menu"
                    style={{ 
                      minWidth: '44px', 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      touchAction: 'manipulation'
                    }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            {/* Navigation links */}
            <nav className="flex-1 px-4 py-8">
              <div className="space-y-6">
                <SheetClose asChild>
                  <Link 
                    href="/#story" 
                    className="block text-white/90 hover:text-white transition-colors duration-300 font-normal tracking-[0.1em] text-lg uppercase py-3 border-b border-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    style={{ 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation'
                    }}
                  >
                    Story
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/#collection" 
                    className="block text-white/90 hover:text-white transition-colors duration-300 font-normal tracking-[0.1em] text-lg uppercase py-3 border-b border-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    style={{ 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation'
                    }}
                  >
                    Collection
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/#craftsmanship" 
                    className="block text-white/90 hover:text-white transition-colors duration-300 font-normal tracking-[0.1em] text-lg uppercase py-3 border-b border-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    style={{ 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation'
                    }}
                  >
                    Craftsmanship
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/#apply" 
                    className="block text-white/90 hover:text-white transition-colors duration-300 font-normal tracking-[0.1em] text-lg uppercase py-3 border-b border-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    style={{ 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation'
                    }}
                  >
                    Apply
                  </Link>
                </SheetClose>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
              <div className="space-y-4">
                <div className="text-xs text-white/75 tracking-[0.2em] uppercase">
                  Handcrafted in Massachusetts
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="mailto:info@dewarguitars.com" 
                    className="text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide text-sm focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    style={{ 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation'
                    }}
                  >
                    Contact
                  </a>
                  <a 
                    href="#" 
                    className="text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide text-sm focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    style={{ 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      touchAction: 'manipulation'
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
