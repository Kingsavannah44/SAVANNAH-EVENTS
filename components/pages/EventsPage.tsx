'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, ChevronRight, Calendar, MapPin, 
  Users, X, Clock 
} from 'lucide-react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { formatDate, eventCategories } from '@/lib/utils'

interface Event {
  id: string
  title: string
  date: Date
  time?: string
  location: string
  category: string
  description?: string
  guestCount?: number
}

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Wedding Expo',
    date: new Date(2026, 2, 15),
    time: '10:00',
    location: 'Nairobi Convention Center',
    category: 'WEDDING',
    description: 'Annual wedding exhibition featuring top vendors',
    guestCount: 500,
  },
  {
    id: '2',
    title: 'Corporate Leadership Summit',
    date: new Date(2026, 2, 22),
    time: '09:00',
    location: 'KICC',
    category: 'CORPORATE',
    description: 'Annual leadership and business conference',
    guestCount: 200,
  },
  {
    id: '3',
    title: 'Garden Birthday Celebration',
    date: new Date(2026, 2, 28),
    time: '14:00',
    location: 'Nairobi Botanical Garden',
    category: 'BIRTHDAY',
    description: 'Outdoor birthday party with garden theme',
    guestCount: 50,
  },
  {
    id: '4',
    title: 'Charity Gala Dinner',
    date: new Date(2026, 3, 5),
    time: '19:00',
    location: 'Safari Park Hotel',
    category: 'CORPORATE',
    description: 'Annual charity fundraising event',
    guestCount: 150,
  },
  {
    id: '5',
    title: 'Traditional Wedding',
    date: new Date(2026, 3, 12),
    time: '12:00',
    location: 'St. Mary\'s Church',
    category: 'WEDDING',
    description: 'Traditional Kenyan wedding ceremony',
    guestCount: 300,
  },
  {
    id: '6',
    title: 'Team Building Retreat',
    date: new Date(2026, 3, 18),
    time: '08:00',
    location: 'Lake Nakuru Resort',
    category: 'CORPORATE',
    description: 'Corporate team building activities',
    guestCount: 80,
  },
]

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')

  const filteredEvents = selectedCategory === 'ALL' 
    ? sampleEvents 
    : sampleEvents.filter(e => e.category === selectedCategory)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    const days: (number | null)[] = []
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null)
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    
    return days
  }

  const getEventsForDay = (day: number) => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.getDate() === day && 
             eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear()
    })
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const days = getDaysInMonth(currentDate)
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Book Your Date
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Events Calendar
            </h1>
            <p className="text-gray-300 text-lg">
              View upcoming events and book your special date. Select a day to see 
              available events or contact us to reserve your slot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4 md:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'ALL'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            {eventCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-accent text-primary-dark'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-primary text-white p-6 flex items-center justify-between">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="font-serif text-2xl font-bold">{monthName}</h2>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 bg-gray-50">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="p-4 text-center text-sm font-semibold text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {days.map((day, index) => {
                const events = day ? getEventsForDay(day) : []
                const isToday = day === new Date().getDate() && 
                               currentDate.getMonth() === new Date().getMonth() &&
                               currentDate.getFullYear() === new Date().getFullYear()

                return (
                  <div
                    key={index}
                    className={`min-h-[100px] border border-gray-100 p-2 ${
                      day ? 'hover:bg-gray-50 cursor-pointer' : 'bg-gray-50'
                    }`}
                    onClick={() => events.length > 0 && setSelectedEvent(events[0])}
                  >
                    {day && (
                      <>
                        <div className={`text-sm font-medium mb-1 ${
                          isToday ? 'bg-accent text-primary-dark w-7 h-7 rounded-full flex items-center justify-center' : 'text-gray-700'
                        }`}>
                          {day}
                        </div>
                        <div className="space-y-1">
                          {events.slice(0, 2).map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs px-2 py-1 rounded text-white truncate ${
                                categoryColors[event.category]
                              }`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {events.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{events.length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden hover:shadow-elevated transition-shadow cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className={`h-2 ${categoryColors[event.category]}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[event.category]}`}>
                      {event.category.replace('_', ' ')}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.guestCount && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.guestCount} guests</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 text-primary-dark mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-primary-dark/80 mb-8 max-w-xl mx-auto">
              Contact us to discuss your custom event requirements. We'll work with you 
              to create the perfect experience.
            </p>
            <WhatsAppButton 
              phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}
              message="Hi Savannah Events, I'd like to book an event. Please contact me with available dates."
              size="lg"
              variant="secondary"
            />
          </motion.div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className={`w-12 h-12 rounded-xl ${categoryColors[selectedEvent.category]} flex items-center justify-center mb-6`}>
                <Calendar className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                {selectedEvent.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>{formatDate(selectedEvent.date)}</span>
                </div>
                {selectedEvent.time && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>{selectedEvent.time}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{selectedEvent.location}</span>
                </div>
                {selectedEvent.guestCount && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5 text-accent" />
                    <span>{selectedEvent.guestCount} guests</span>
                  </div>
                )}
              </div>

              {selectedEvent.description && (
                <p className="text-gray-600 mb-6">
                  {selectedEvent.description}
                </p>
              )}

              <WhatsAppButton 
                phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}
                message={`Hi Savannah Events, I'm interested in the ${selectedEvent.title} on ${formatDate(selectedEvent.date)}. Please provide more details.`}
                label="Book This Event"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
