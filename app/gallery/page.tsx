import { Metadata } from 'next'
import GalleryPage from '@/components/pages/GalleryPage'

export const metadata: Metadata = {
  title: 'Gallery | Savannah Events',
  description: 'Browse our gallery of past events including weddings, corporate events, MC services, and outside gatherings.',
}

export default function Gallery() {
  return <GalleryPage />
}
