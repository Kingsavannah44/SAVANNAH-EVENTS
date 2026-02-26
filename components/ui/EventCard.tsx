'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface EventCardProps {
  event: {
    id: string
    title: string
    date: Date
    location: string
    category: 'WEDDING' | 'CORPORATE' | 'MC_EVENTS' | 'OUTSIDE_GATHERINGS' | 'BIRTHDAY' | 'CONFERENCE' | 'OTHER'
  }
}

export default function EventCard({ event }: EventCardProps) {
  const categoryColors: Record<string, string> = {
    WEDDING: 'bg-pink-500',
    CORPORATE: 'bg-blue-500',
    MC_EVENTS: 'bg-purple-500',
    OUTSIDE_GATHERINGS: 'bg-green-500',
    BIRTHDAY: 'bg-orange-500',
    CONFERENCE: 'bg-cyan-500',
    OTHER: 'bg-gray-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-colors">
        {/* Date Badge */}
        <div className="bg-accent text-primary-dark p-4 text-center">
          <div className="text-3xl font-bold font-serif">
            {new Date(event.date).getDate()}
          </div>
          <div className="text-sm font-medium uppercase">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 ${categoryColors[event.category]}`}>
            {event.category.replace('_', ' ')}
          </div>

          <h3 className="font-serif text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors">
            {event.title}
          </h3>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
