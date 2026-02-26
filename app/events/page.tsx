import { Metadata } from 'next'
import EventsPage from '@/components/pages/EventsPage'

export const metadata: Metadata = {
  title: 'Events Calendar | Savannah Events',
  description: 'View upcoming events and book your slot. Browse our calendar for weddings, corporate events, and celebrations.',
}

export default function Events() {
  return <EventsPage />
}
