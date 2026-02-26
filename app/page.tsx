import { Metadata } from 'next'
import HomePage from '@/components/pages/HomePage'

export const metadata: Metadata = {
  title: 'Savannah Events | Premier Event Management in Kenya',
  description: 'Professional event organizing, MC services, outside gatherings, and comprehensive event management. Create unforgettable moments with Kenya\'s premier event company.',
}

export default function Home() {
  return <HomePage />
}
