'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/layouts/AdminSidebar'
import AdminHeader from '@/components/layouts/AdminHeader'
import { 
  Calendar, Plus, Edit, Trash2, Eye, EyeOff,
  Search, Filter
} from 'lucide-react'

const sampleEvents = [
  { 
    id: '1', 
    title: 'Spring Wedding Expo', 
    date: '2026-03-15', 
    location: 'Nairobi Convention Center',
    category: 'WEDDING',
    price: 150000,
    isPublished: true,
    isFeatured: true
  },
  { 
    id: '2', 
    title: 'Corporate Leadership Summit', 
    date: '2026-03-22', 
    location: 'KICC',
    category: 'CORPORATE',
    price: 250000,
    isPublished: true,
    isFeatured: false
  },
  { 
    id: '3', 
    title: 'Garden Birthday Celebration', 
    date: '2026-03-28', 
    location: 'Nairobi Botanical Garden',
    category: 'BIRTHDAY',
    price: 75000,
    isPublished: true,
    isFeatured: false
  },
  { 
    id: '4', 
    title: 'Charity Gala Dinner', 
    date: '2026-04-05', 
    location: 'Safari Park Hotel',
    category: 'CORPORATE',
    price: 300000,
    isPublished: false,
    isFeatured: true
  },
]

const categoryColors: Record<string, string> = {
  WEDDING: 'bg-pink-500',
  CORPORATE: 'bg-blue-500',
  MC_EVENTS: 'bg-purple-500',
  OUTSIDE_GATHERINGS: 'bg-green-500',
  BIRTHDAY: 'bg-orange-500',
  CONFERENCE: 'bg-cyan-500',
  OTHER: 'bg-gray-500',
}

export default function EventsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('ALL')
  const [events, setEvents] = useState(sampleEvents)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/admin/login')
    return null
  }

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'ALL' || event.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 lg:p-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary">
                Events Management
              </h1>
              <p className="text-gray-500 mt-1">
                Manage your events, publish/unpublish, and feature events.
              </p>
            </div>
            <button 
              onClick={() => alert('Add Event functionality - Connect to your database/API')}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Event
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-card p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="input-field"
                >
                  <option value="ALL">All Categories</option>
                  <option value="WEDDING">Wedding</option>
                  <option value="CORPORATE">Corporate</option>
                  <option value="BIRTHDAY">Birthday</option>
                  <option value="MC_EVENTS">MC Events</option>
                  <option value="OUTSIDE_GATHERINGS">Outside Gatherings</option>
                  <option value="CONFERENCE">Conference</option>
                </select>
              </div>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Event
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{event.title}</p>
                          <p className="text-sm text-gray-500">{event.location}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[event.category]}`}>
                          {event.category.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        KES {event.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.isPublished 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {event.isPublished ? 'Published' : 'Draft'}
                          </span>
                          {event.isFeatured && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                              Featured
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => alert(`Edit event: ${event.title}`)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-primary"
                            title="Edit event"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              const newEvents = events.map(e => 
                                e.id === event.id ? {...e, isPublished: !e.isPublished} : e
                              )
                              setEvents(newEvents)
                            }}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-primary"
                            title={event.isPublished ? 'Unpublish' : 'Publish'}
                          >
                            {event.isPublished ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                          <button 
                            onClick={() => {
                              if (confirm(`Delete event: ${event.title}?`)) {
                                setEvents(events.filter(e => e.id !== event.id))
                              }
                            }}
                            className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600"
                            title="Delete event"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No events found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
