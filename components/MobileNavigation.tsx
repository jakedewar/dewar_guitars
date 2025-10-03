'use client'

import dynamic from 'next/dynamic'

interface MobileNavigationProps {
  className?: string
}

// Dynamic import with no SSR to prevent hydration issues
const MobileNavigationClient = dynamic(() => import('./MobileNavigationClient'), {
  ssr: false,
  loading: () => (
    <div className="lg:hidden">
      <button 
        className="text-white/80 hover:text-white transition-colors duration-300 p-2 touch-manipulation"
        aria-label="Open mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
})

export default function MobileNavigation({ className = '' }: MobileNavigationProps) {
  return <MobileNavigationClient className={className} />
}
