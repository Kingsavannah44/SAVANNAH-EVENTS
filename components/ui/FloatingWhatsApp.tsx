'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/utils'

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254715970249'
  const message = "Hi Savannah Events! I'd like to inquire about your services."
  const whatsappLink = generateWhatsAppLink(phone, message)

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
          >
            {/* Tooltip/Message Bubble */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs mr-2 relative"
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors shadow-md"
                  >
                    <X className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <WhatsAppIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Chat with us!</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Need help planning your event? We're here to assist you!
                      </p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Start Chat
                      </a>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main WhatsApp Button */}
            <motion.div className="relative">
              {/* Glow Effect - Multiple Layers */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-green-400 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 bg-green-500 rounded-full blur-2xl"
              />

              {/* Pulse Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 bg-green-400 rounded-full border-2 border-green-400"
              />

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
              >
                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />

                <WhatsAppIcon className="w-9 h-9 text-white relative z-10 group-hover:scale-110 transition-transform drop-shadow-lg" />

                {/* Notification Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-xs font-bold">1</span>
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
