'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Calendar, Users, TrendingUp, CalendarDays, Settings, LogOut } from 'lucide-react'

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: TrendingUp },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Bookings', href: '/admin/bookings', icon: CalendarDays },
  { name: 'Clients', href: '/admin/clients', icon: Users },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-primary text-white transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <Image 
              src="/LOGO.png" 
              alt="Savannah Events" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg">SAVANNAH EVENTS</span>
              <span className="text-xs text-accent">Admin Panel</span>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-white/10 transition-colors text-left"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}
