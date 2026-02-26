'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-3'
      )}
    >
      <div className="container-custom px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-auto flex-shrink-0">
              <Image 
                src="/LOGO.png" 
                alt="Savannah Events" 
                width={56} 
                height={56} 
                className="object-contain h-full w-auto" 
                priority 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={cn(
                "font-serif font-bold text-xl md:text-2xl tracking-tight leading-tight transition-colors",
                isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'
              )}>
                SAVANNAH EVENTS
              </span>
              <span className={cn(
                "text-[10px] md:text-xs tracking-wide uppercase font-medium leading-tight transition-colors",
                isScrolled ? 'text-accent' : 'text-accent-light'
              )}>
                We Plan It
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2.5 group"
                >
                  <span className={cn(
                    "text-sm font-semibold transition-all duration-300 relative z-10",
                    isScrolled
                      ? isActive ? 'text-accent' : 'text-gray-700 group-hover:text-accent'
                      : isActive ? 'text-accent' : 'text-white group-hover:text-accent drop-shadow-md'
                  )}>
                    {item.name}
                  </span>
                  {isActive && (
                    <div
                      className={cn(
                        "absolute inset-0 rounded-lg",
                        isScrolled ? 'bg-accent/10' : 'bg-white/10 backdrop-blur-sm'
                      )}
                    />
                  )}
                  <span className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-3/4",
                    isActive && 'w-3/4'
                  )} />
                </Link>
              )
            })}
            <Link
              href="/admin"
              className={cn(
                "relative px-5 py-2.5 group flex items-center gap-2",
                isScrolled
                  ? 'text-gray-700 group-hover:text-accent'
                  : 'text-white group-hover:text-accent drop-shadow-md'
              )}
              title="Admin Login"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Admin</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "relative px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden group border",
                isScrolled
                  ? 'bg-accent/10 text-accent hover:bg-accent hover:text-white border-accent/20'
                  : 'bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm border-white/20'
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Book Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? 'text-primary' : 'text-white')} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? 'text-primary' : 'text-white')} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t shadow-xl">
            <div className="container-custom px-4 py-6 flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-lg font-semibold transition-all",
                      isActive 
                        ? 'bg-accent/10 text-accent' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-accent'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="/admin"
                className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 hover:text-accent transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield className="w-4 h-4" />
                Admin
              </Link>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Link
                  href="/contact"
                  className="bg-accent text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  Book Now
                </Link>
              </div>
            </div>
        </div>
      )}
    </header>
  )
}
