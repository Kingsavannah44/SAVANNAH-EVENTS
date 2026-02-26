'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/layouts/AdminSidebar'
import AdminHeader from '@/components/layouts/AdminHeader'
import { 
  User, Bell, Shield, Palette, Database, Save
} from 'lucide-react'

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

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

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'database', name: 'Database', icon: Database },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={session?.user?.name || ''}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue={session?.user?.email || ''}
                    className="input-field"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input
                    type="text"
                    defaultValue="Administrator"
                    className="input-field"
                    disabled
                  />
                </div>
              </div>
            </div>
            <button 
              onClick={() => alert('Save functionality - Connect to your database/API')}
              className="btn-primary flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
              <div className="space-y-4">
                {[
                  { label: 'New booking received', description: 'Get notified when a client makes a new booking' },
                  { label: 'Payment received', description: 'Get notified when a payment is made' },
                  { label: 'Booking cancelled', description: 'Get notified when a booking is cancelled' },
                  { label: 'Upcoming events', description: 'Get daily summary of upcoming events' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
              <div className="grid gap-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              <button 
                onClick={() => alert('Update password functionality - Connect to your API')}
                className="btn-primary mt-4 flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Update Password
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
              <p className="text-gray-600 mb-4">Add an extra layer of security to your account.</p>
              <button 
                onClick={() => alert('2FA setup - Implement authentication provider')}
                className="btn-secondary"
              >
                Enable 2FA
              </button>
            </div>
          </div>
        )

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border-2 border-accent rounded-lg bg-white">
                  <div className="w-full aspect-video bg-gray-100 rounded mb-2"></div>
                  <p className="font-medium">Light</p>
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-lg bg-gray-900">
                  <div className="w-full aspect-video bg-gray-800 rounded mb-2"></div>
                  <p className="font-medium text-white">Dark</p>
                </button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Accent Color</h3>
              <div className="flex gap-3">
                {['#D4A853', '#3B82F6', '#10B981', '#EF4444', '#8B5CF6'].map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full ${color === '#D4A853' ? 'ring-2 ring-offset-2 ring-gray-900' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        )

      case 'database':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Database Status</h3>
              <div className="grid gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <Database className="w-5 h-5" />
                    <span className="font-medium">Connected to PostgreSQL</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Events</p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">156</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Users</p>
                    <p className="text-2xl font-bold text-gray-900">89</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup</h3>
              <p className="text-gray-600 mb-4">Download a backup of your database.</p>
              <button 
                onClick={() => alert('Database backup - Implement backup functionality')}
                className="btn-secondary"
              >
                Download Backup
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary">
              Settings
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your account settings and preferences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="md:flex">
              {/* Sidebar Tabs */}
              <div className="md:w-64 border-r bg-gray-50">
                <nav className="p-4 space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeTab === tab.id
                          ? 'bg-white text-primary shadow-sm'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
