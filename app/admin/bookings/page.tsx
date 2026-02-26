'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/layouts/AdminSidebar'
import AdminHeader from '@/components/layouts/AdminHeader'
import { 
  Calendar, Users, DollarSign, CalendarDays,
  Search, Filter, CheckCircle, Clock, Eye, Edit, Trash2
} from 'lucide-react'

const sampleBookings = [
  { 
    id: '1', 
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah@example.com',
    clientPhone: '+254 700 000 001',
    eventType: 'WEDDING',
    eventDate: '2026-03-15',
    guestCount: 200,
    totalAmount: 250000,
    paidAmount: 125000,
    status: 'CONFIRMED',
    paymentStatus: 'PARTIAL',
  },
  { 
    id: '2', 
    clientName: 'David Mwangi',
    clientEmail: 'david@example.com',
    clientPhone: '+254 700 000 002',
    eventType: 'CORPORATE',
    eventDate: '2026-03-20',
    guestCount: 150,
    totalAmount: 180000,
    paidAmount: 0,
    status: 'PENDING',
    paymentStatus: 'UNPAID',
  },
  { 
    id: '3', 
    clientName: 'Grace Atieno',
    clientEmail: 'grace@example.com',
    clientPhone: '+254 700 000 003',
    eventType: 'BIRTHDAY',
    eventDate: '2026-03-25',
    guestCount: 50,
    totalAmount: 75000,
    paidAmount: 75000,
    status: 'CONFIRMED',
    paymentStatus: 'PAID',
  },
  { 
    id: '4', 
    clientName: 'James Ochieng',
    clientEmail: 'james@example.com',
    clientPhone: '+254 700 000 004',
    eventType: 'CONFERENCE',
    eventDate: '2026-04-01',
    guestCount: 300,
    totalAmount: 350000,
    paidAmount: 175000,
    status: 'PENDING',
    paymentStatus: 'PARTIAL',
  },
  { 
    id: '5', 
    clientName: 'Mary Wanjiku',
    clientEmail: 'mary@example.com',
    clientPhone: '+254 700 000 005',
    eventType: 'WEDDING',
    eventDate: '2026-04-05',
    guestCount: 250,
    totalAmount: 300000,
    paidAmount: 0,
    status: 'CANCELLED',
    paymentStatus: 'UNPAID',
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

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-700',
  CONFIRMED: 'bg-green-100 text-green-700',
  CANCELLED: 'bg-red-100 text-red-700',
  COMPLETED: 'bg-blue-100 text-blue-700',
}

const paymentColors: Record<string, string> = {
  UNPAID: 'bg-red-100 text-red-700',
  PARTIAL: 'bg-yellow-100 text-yellow-700',
  PAID: 'bg-green-100 text-green-700',
}

export default function BookingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [bookings, setBookings] = useState(sampleBookings)

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

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.clientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.clientPhone.includes(searchTerm)
    const matchesStatus = statusFilter === 'ALL' || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = [
    { 
      title: 'Total Bookings', 
      value: bookings.length, 
      icon: CalendarDays,
      color: 'bg-blue-500'
    },
    { 
      title: 'Pending', 
      value: bookings.filter(b => b.status === 'PENDING').length, 
      icon: Clock,
      color: 'bg-yellow-500'
    },
    { 
      title: 'Confirmed', 
      value: bookings.filter(b => b.status === 'CONFIRMED').length, 
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    { 
      title: 'Revenue', 
      value: `KES ${bookings.reduce((acc, b) => acc + b.paidAmount, 0).toLocaleString()}`, 
      icon: DollarSign,
      color: 'bg-purple-500'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary">
              Bookings Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage client bookings, track payments, and update status.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.title} className="bg-white rounded-xl shadow-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-card p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="input-field"
                  aria-label="Filter by status"
                >
                  <option value="ALL">All Status</option>
                  <option value="PENDING">Pending</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="CANCELLED">Cancelled</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bookings Table */}
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Event
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Payment
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{booking.clientName}</p>
                          <p className="text-sm text-gray-500">{booking.clientEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <span className={`px-2 py-1 rounded text-xs font-medium text-white ${categoryColors[booking.eventType]}`}>
                            {booking.eventType.replace('_', ' ')}
                          </span>
                          <p className="text-sm text-gray-500 mt-1">{booking.guestCount} guests</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(booking.eventDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">KES {booking.totalAmount.toLocaleString()}</p>
                          <p className="text-sm text-green-600">KES {booking.paidAmount.toLocaleString()} paid</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${paymentColors[booking.paymentStatus]}`}>
                          {booking.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => alert(`View booking details for ${booking.clientName}`)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-primary" 
                            title="View details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => alert(`Edit booking for ${booking.clientName}`)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-primary" 
                            title="Edit booking"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              if (confirm(`Cancel booking for ${booking.clientName}?`)) {
                                setBookings(bookings.filter(b => b.id !== booking.id))
                              }
                            }}
                            className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600" 
                            title="Cancel booking"
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
            
            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <CalendarDays className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No bookings found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
