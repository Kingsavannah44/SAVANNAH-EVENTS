'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/layouts/AdminSidebar'
import AdminHeader from '@/components/layouts/AdminHeader'
import { 
  Users, DollarSign, TrendingUp, CalendarDays,
  Search, Mail, Phone, Calendar as CalendarIcon,
  Eye, MessageCircle
} from 'lucide-react'

const sampleClients = [
  { 
    id: '1', 
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+254 700 000 001',
    totalBookings: 2,
    totalSpent: 350000,
    lastBooking: '2026-03-15',
    status: 'ACTIVE',
  },
  { 
    id: '2', 
    name: 'David Mwangi',
    email: 'david@example.com',
    phone: '+254 700 000 002',
    totalBookings: 1,
    totalSpent: 180000,
    lastBooking: '2026-03-20',
    status: 'ACTIVE',
  },
  { 
    id: '3', 
    name: 'Grace Atieno',
    email: 'grace@example.com',
    phone: '+254 700 000 003',
    totalBookings: 3,
    totalSpent: 225000,
    lastBooking: '2026-03-25',
    status: 'ACTIVE',
  },
  { 
    id: '4', 
    name: 'James Ochieng',
    email: 'james@example.com',
    phone: '+254 700 000 004',
    totalBookings: 1,
    totalSpent: 0,
    lastBooking: '2026-04-01',
    status: 'PENDING',
  },
  { 
    id: '5', 
    name: 'Mary Wanjiku',
    email: 'mary@example.com',
    phone: '+254 700 000 005',
    totalBookings: 1,
    totalSpent: 0,
    lastBooking: '2026-04-05',
    status: 'INACTIVE',
  },
]

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-700',
  PENDING: 'bg-yellow-100 text-yellow-700',
  INACTIVE: 'bg-gray-100 text-gray-700',
};

export default function ClientsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [clients] = useState(sampleClients)

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

  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)
    const matchesStatus = statusFilter === 'ALL' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = [
    { 
      title: 'Total Clients', 
      value: clients.length, 
      icon: Users,
      color: 'bg-blue-500'
    },
    { 
      title: 'Active Clients', 
      value: clients.filter(c => c.status === 'ACTIVE').length, 
      icon: CalendarDays,
      color: 'bg-green-500'
    },
    { 
      title: 'Total Revenue', 
      value: `KES ${clients.reduce((acc, c) => acc + c.totalSpent, 0).toLocaleString()}`, 
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    { 
      title: 'Avg. Booking Value', 
      value: `KES ${Math.round(clients.reduce((acc, c) => acc + c.totalSpent, 0) / clients.filter(c => c.totalSpent > 0).length || 0).toLocaleString()}`, 
      icon: TrendingUp,
      color: 'bg-orange-500'
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
              Clients Management
            </h1>
            <p className="text-gray-500 mt-1">
              View and manage your client database.
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
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="input-field"
                  aria-label="Filter by status"
                >
                  <option value="ALL">All Status</option>
                  <option value="ACTIVE">Active</option>
                  <option value="PENDING">Pending</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <div key={client.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{client.name}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColors[client.status]}`}>
                          {client.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4" />
                      <span>Last booking: {new Date(client.lastBooking).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Total Bookings</span>
                      <span className="font-semibold text-gray-900">{client.totalBookings}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-500">Total Spent</span>
                      <span className="font-semibold text-primary">KES {client.totalSpent.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-3 flex items-center gap-2">
                  <button 
                    onClick={() => alert(`View details for ${client.name}`)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button 
                    onClick={() => window.open(`https://wa.me/${client.phone.replace(/\s/g, '')}`, '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-card">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No clients found</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
