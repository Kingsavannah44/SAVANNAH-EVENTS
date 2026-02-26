import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

export const metadata: Metadata = {
  title: {
    default: 'Savannah Events | Premier Event Management in Kenya',
    template: '%s | Savannah Events',
  },
  description: 'Savannah Events offers professional event organizing, MC services, outside gatherings, and comprehensive event management. Create unforgettable moments with Kenya\'s premier event company.',
  keywords: ['event management Kenya', 'MC services', 'wedding planner', 'corporate events', 'outside gatherings', 'Nairobi events', 'Savannah Events'],
  authors: [{ name: 'Savannah Events' }],
  creator: 'Savannah Events',
  publisher: 'Savannah Events',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://savannahevents.com',
    siteName: 'Savannah Events',
    title: 'Savannah Events | Premier Event Management in Kenya',
    description: 'Professional event organizing, MC services, outside gatherings, and comprehensive event management in Kenya.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Savannah Events - Creating Unforgettable Moments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savannah Events | Premier Event Management in Kenya',
    description: 'Professional event organizing, MC services, outside gatherings, and comprehensive event management in Kenya.',
    images: ['/images/og-image.jpg'],
    creator: '@savannahevents',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-gray-900 antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  )
}
