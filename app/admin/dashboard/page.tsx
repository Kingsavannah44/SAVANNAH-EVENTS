'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AdminSidebar from '@/components/layouts/AdminSidebar'
import AdminHeader from '@/components/layouts/AdminHeader'
import { 
  Calendar, Users, DollarSign, TrendingUp, 
  CalendarDays, ChevronRight
} from 'lucide-react'

const stats = [
  { title: 'Total Bookings', value: '156', change: '+12%', icon: Calendar, color: 'bg-blue-500' },
  { title: 'Revenue', value: 'KES 2.4M', change: '+8%', icon: DollarSign, color: 'bg-green-500' },
  { title: 'Clients', value: '89', change: '+5%', icon: Users, color: 'bg-purple-500' },
  { title: 'Upcoming Events', value: '12', change: '+2', icon: CalendarDays, color: 'bg-orange-500' },
]

const recentBookings = [
  { id: '1', client: 'Sarah Johnson', event: 'Wedding', date: '2026-03-15', status: 'CONFIRMED' },
  { id: '2', client: 'David Mwangi', event: 'Corporate', date: '2026-03-20', status: 'PENDING' },
  { id: '3', client: 'Grace Atieno', event: 'Birthday', date: '2026-03-25', status: 'CONFIRMED' },
  { id: '4', client: 'James Ochieng', event: 'Conference', date: '2026-04-01', status: 'PENDING' },
  { id: '5', client: 'Mary Wanjiku', event: 'Wedding', date: '2026-04-05', status: 'CANCELLED' },
]

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-700',
  CONFIRMED: 'bg-green-100 text-green-700',
  CANCELLED: 'bg-red-100 text-red-700',
  COMPLETED: 'bg-blue-100 text-blue-700',
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 lg:p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 mt-1">
              Welcome back! Here's what's happening with your events.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="bg-white rounded-xl shadow-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-primary">
                Recent Bookings
              </h2>
              <Link 
                href="/admin/bookings"
                className="text-sm text-accent hover:text-accent-dark flex items-center gap-1"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Event Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Date
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
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">{booking.client}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {booking.event}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(booking.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => router.push('/admin/bookings')}
                          className="text-gray-400 hover:text-primary"
                          title="View booking details"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
