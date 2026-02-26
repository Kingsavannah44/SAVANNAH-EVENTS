import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const services = [
  { name: 'Event Organizing', href: '/services#organizing' },
  { name: 'MC Services', href: '/services#mc' },
  { name: 'Outside Gatherings', href: '/services#gatherings' },
  { name: 'Event Management', href: '/services#management' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Events Calendar', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-14 w-auto flex-shrink-0">
                <Image 
                  src="/LOGO.png" 
                  alt="Savannah Events" 
                  width={56} 
                  height={56} 
                  className="object-contain h-full w-auto" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-xl tracking-tight text-white leading-tight">
                  SAVANNAH EVENTS
                </span>
                <span className="text-[10px] tracking-wide uppercase font-medium text-accent leading-tight">
                  We Plan It
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable moments through professional event management, 
              MC services, and exceptional gatherings across Kenya.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+254715970249" className="text-gray-300 hover:text-accent transition-colors">
                  +254 715 970 249
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@savannahevents.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@savannahevents.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <WhatsAppButton 
                phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}
                message="Hi Savannah Events, I'd like to get in touch."
                label="Chat on WhatsApp"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Savannah Events. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
