import { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us | Savannah Events',
  description: 'Get in touch with Savannah Events for event inquiries, bookings, and consultations. Contact us via phone, email, or WhatsApp.',
}

export default function Contact() {
  return <ContactPage />
}
