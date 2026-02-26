'use client'

import { useSession } from 'next-auth/react'
import { Menu } from 'lucide-react'

interface AdminHeaderProps {
  onMenuClick: () => void
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4 ml-auto">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900">
              {session?.user?.name || 'Admin'}
            </p>
            <p className="text-xs text-gray-500">
              {session?.user?.email}
            </p>
          </div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
            {session?.user?.name?.charAt(0) || 'A'}
          </div>
        </div>
      </div>
    </header>
  )
}
