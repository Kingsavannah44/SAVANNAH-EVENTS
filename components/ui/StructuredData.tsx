'use client'

import { usePathname } from 'next/navigation'

interface OrganizationSchemaProps {
  name?: string
  description?: string
  url?: string
  logo?: string
  telephone?: string
  email?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  priceRange?: string
  openingHours?: string[]
}

interface EventSchemaProps {
  name: string
  description?: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address?: {
      streetAddress?: string
      addressLocality?: string
      addressRegion?: string
      postalCode?: string
      addressCountry?: string
    }
  }
  image?: string
  organizer?: {
    name: string
    url?: string
  }
}

export function OrganizationSchema({
  name = 'Savannah Events',
  description = 'Professional event organizing, MC services, outside gatherings, and comprehensive event management in Kenya.',
  url = 'https://savannahevents.com',
  logo = 'https://savannahevents.com/images/logo.png',
  telephone = '+254-700-000-000',
  email = 'info@savannahevents.com',
  address = {
    streetAddress: 'Nairobi',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi',
    addressCountry: 'KE',
  },
  priceRange = '$$',
  openingHours = ['Mo-Fr 08:00-18:00', 'Sa 09:00-16:00'],
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    logo,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    priceRange,
    openingHours,
    sameAs: [
      'https://facebook.com/savannahevents',
      'https://instagram.com/savannahevents',
      'https://twitter.com/savannahevents',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    serviceType: [
      'Event Organizing',
      'MC Services',
      'Outside Gatherings',
      'Event Management',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function EventSchema({ event }: { event: EventSchemaProps }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location.name,
      address: event.location.address
        ? {
            '@type': 'PostalAddress',
            ...event.location.address,
          }
        : undefined,
    },
    image: event.image,
    organizer: event.organizer,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KES',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const pathname = usePathname()
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url || `https://savannahevents.com${pathname}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Savannah Events',
    url: 'https://savannahevents.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://savannahevents.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
