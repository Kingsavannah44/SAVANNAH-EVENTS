'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { eventCategories } from '@/lib/utils'

interface GalleryImage {
  id: string
  title: string
  category: string
  imageUrl: string
  description?: string
}

const sampleImages: GalleryImage[] = [
  { 
    id: '1', 
    title: 'Elegant Safari Wedding', 
    category: 'WEDDING', 
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    description: 'A breathtaking outdoor wedding ceremony'
  },
  { 
    id: '2', 
    title: 'Corporate Summit 2025', 
    category: 'CORPORATE', 
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    description: 'Annual leadership conference in Nairobi'
  },
  { 
    id: '3', 
    title: 'Gala Night MC', 
    category: 'MC_EVENTS', 
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    description: 'Enchanting evening with world-class entertainment'
  },
  { 
    id: '4', 
    title: 'Savanna Sunset Party', 
    category: 'OUTSIDE_GATHERINGS', 
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    description: 'Al fresco dining under the African sky'
  },
  { 
    id: '5', 
    title: 'Traditional Maasai Wedding', 
    category: 'WEDDING', 
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    description: 'Cultural celebration with traditional rituals'
  },
  { 
    id: '6', 
    title: 'Tech Product Launch', 
    category: 'CORPORATE', 
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'Innovation showcase event'
  },
  { 
    id: '7', 
    title: 'Milestone Birthday', 
    category: 'BIRTHDAY', 
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    description: 'Golden celebration with loved ones'
  },
  { 
    id: '8', 
    title: 'Team Building Retreat', 
    category: 'CORPORATE', 
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    description: 'Outdoor activities for corporate teams'
  },
  { 
    id: '9', 
    title: 'Acacia Garden Festival', 
    category: 'OUTSIDE_GATHERINGS', 
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    description: 'Garden party in lush surroundings'
  },
  { 
    id: '10', 
    title: 'Reception Elegance', 
    category: 'WEDDING', 
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    description: 'Luxurious wedding reception'
  },
  { 
    id: '11', 
    title: 'MC Performance', 
    category: 'MC_EVENTS', 
    imageUrl: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
    description: 'Engaging audience at live event'
  },
  { 
    id: '12', 
    title: 'Charity Gala Dinner', 
    category: 'CORPORATE', 
    imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
    description: 'Elegant evening for a cause'
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = selectedCategory === 'ALL'
    ? sampleImages
    : sampleImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const categoryColors: Record<string, string> = {
    WEDDING: 'bg-rose-500',
    CORPORATE: 'bg-blue-500',
    MC_EVENTS: 'bg-purple-500',
    OUTSIDE_GATHERINGS: 'bg-emerald-500',
    BIRTHDAY: 'bg-orange-500',
    CONFERENCE: 'bg-cyan-500',
    OTHER: 'bg-gray-500',
  }

  return (
    <div className="pt-0">
      {/* Cinematic Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden cinematic-letterbox film-grain">
        {/* Background Image with Ken Burns */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
          >
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80"
                alt="Cinematic hero background"
                className="w-full h-full object-cover"
              />
          </motion.div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Cinematic Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center max-w-4xl"
          >
            {/* Category Tag */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium tracking-widest uppercase mb-6"
            >
              <Play className="w-4 h-4" />
              Our Portfolio
            </motion.span>

            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block"
                >
                  Event
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block text-accent"
                >
                  Gallery
                </motion.span>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Immerse yourself in the unforgettable moments we've created 
              across Kenya's most prestigious venues
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-gray-400 uppercase tracking-widest">Explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom px-4 md:px-8">
          {/* Cinematic Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-16 justify-center"
          >
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'ALL'
                  ? 'bg-accent text-primary-dark shadow-lg shadow-accent/30'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
            >
              All Events
            </button>
            {eventCategories.map((cat, index) => (
              <motion.button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-accent text-primary-dark shadow-lg shadow-accent/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Cinematic Masonry Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer cinematic-fade ${
                    index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    index % 5 === 0 ? 'md:aspect-[4/3]' : 'aspect-square'
                  }`}>
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Play Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-8 h-8 text-primary-dark" />
                      </div>
                    </div>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className={`inline-block px-3 py-1 rounded text-xs font-semibold text-white mb-2 md:mb-3 ${categoryColors[image.category]}`}>
                      {image.category.replace('_', ' ')}
                    </span>
                    <h3 className="text-white font-serif text-lg md:text-xl font-semibold mb-1">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-gray-300 text-sm hidden md:block">
                        {image.description}
                      </p>
                    )}
                  </div>

                  {/* Cinematic Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Stats Banner */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Events Captured' },
              { value: '10+', label: 'Years Experience' },
              { value: '50K+', label: 'Happy Guests' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-50" />
        
        <div className="container-custom px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
              Create Your Own Cinematic Memory
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Let our team transform your event into a masterpiece. 
              Every moment deserves to be captured beautifully.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              Start Planning Your Event
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center cinematic-letterbox"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white hover:bg-white/10 rounded-full z-20 transition-colors"
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 md:left-8 p-3 text-white hover:bg-white/10 rounded-full z-20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 md:right-8 p-3 text-white hover:bg-white/10 rounded-full z-20 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 text-white/70 text-sm font-medium z-20">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-6xl max-h-[75vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className={`inline-block px-4 py-1.5 rounded text-sm font-semibold text-white mb-3 ${categoryColors[selectedImage.category]}`}>
                    {selectedImage.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-gray-300">
                      {selectedImage.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
