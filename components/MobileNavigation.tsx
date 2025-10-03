'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface MobileNavigationProps {
  className?: string
}

export default function MobileNavigation({ className = '' }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Only set mounted state if we're in the browser
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className={`lg:hidden ${className}`}>
        <button 
          className="text-white/80 hover:text-white transition-colors duration-300 p-2 touch-manipulation"
          aria-label="Open mobile menu"
        >
          <svg 
            className="w-6 h-6 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className={`lg:hidden ${className}`}>
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu}
        className="text-white/80 hover:text-white transition-colors duration-300 p-2 touch-manipulation"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black backdrop-blur-md border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-white/60 text-sm font-light tracking-[0.1em] uppercase">
                  Menu
                </span>
                <button 
                  onClick={closeMenu}
                  className="text-white/60 hover:text-white transition-colors duration-300 p-1 touch-manipulation"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex-1 px-4 py-8">
                <div className="space-y-6">
                  <Link 
                    href="/#story" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] text-lg uppercase py-3 border-b border-white/5 touch-manipulation"
                  >
                    Story
                  </Link>
                  <Link 
                    href="/#collection" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] text-lg uppercase py-3 border-b border-white/5 touch-manipulation"
                  >
                    Collection
                  </Link>
                  <Link 
                    href="/#craftsmanship" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] text-lg uppercase py-3 border-b border-white/5 touch-manipulation"
                  >
                    Craftsmanship
                  </Link>
                  <Link 
                    href="/#apply" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] text-lg uppercase py-3 border-b border-white/5 touch-manipulation"
                  >
                    Apply
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-white/10">
                <div className="space-y-4">
                  <div className="text-xs text-white/40 tracking-[0.2em] uppercase">
                    Handcrafted in Massachusetts
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="mailto:info@dewarguitars.com" 
                      className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm touch-manipulation"
                    >
                      Contact
                    </a>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm touch-manipulation"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
