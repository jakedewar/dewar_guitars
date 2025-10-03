import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dewar Guitars - Heirloom Luthiery | Handcrafted Excellence',
  description: 'Only 12 guitars per year. Handcrafted by one man, from raw wood to final note. Apply for the exclusive 2025 Collection. Starting at $3,499.',
  keywords: ['handcrafted guitars', 'custom guitars', 'luthier', 'guitar builder', 'artisan guitars', 'limited edition guitars', 'Dewar Guitars', '2025 collection'],
  authors: [{ name: 'Dewar Guitars' }],
  creator: 'Dewar Guitars',
  publisher: 'Dewar Guitars',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dewarguitars.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dewar Guitars - Heirloom Luthiery',
    description: 'Only 12 guitars per year. Handcrafted by one man, from raw wood to final note. Apply for the exclusive 2025 Collection.',
    url: 'https://dewarguitars.com',
    siteName: 'Dewar Guitars',
    images: [
      {
        url: '/images/DewarGuitars_1.webp',
        width: 1200,
        height: 630,
        alt: 'Handcrafted Dewar Guitar - Heirloom Luthiery',
      },
      {
        url: '/images/DEWAR v3 trans AI 1.svg',
        width: 800,
        height: 400,
        alt: 'Dewar Guitars Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dewar Guitars - Heirloom Luthiery',
    description: 'Only 12 guitars per year. Handcrafted by one man, from raw wood to final note. Apply for the exclusive 2025 Collection.',
    images: ['/images/DewarGuitars_1.webp'],
    creator: '@dewarguitars',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/images/d_symbol.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/images/d_symbol.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Dewar Guitars',
    'application-name': 'Dewar Guitars',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical resources - removed to fix hydration issues */}
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/images/d_symbol.png" />
        <meta name="msapplication-TileImage" content="/images/d_symbol.png" />
        
        {/* Viewport optimization for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dewar Guitars",
              "description": "Handcrafted guitars by one man, from raw wood to final note. Only 12 guitars per year.",
              "url": "https://dewarguitars.com",
              "logo": "https://dewarguitars.com/images/DEWAR v3 trans AI 1.svg",
              "image": "https://dewarguitars.com/images/DewarGuitars_1.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Massachusetts",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://instagram.com/dewarguitars"
              ],
              "offers": {
                "@type": "Offer",
                "price": "3499",
                "priceCurrency": "USD",
                "availability": "https://schema.org/LimitedAvailability",
                "description": "Handcrafted guitar from the 2025 Collection"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
