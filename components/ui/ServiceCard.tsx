'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  delay?: number
}

export default function ServiceCard({ icon: Icon, title, description, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link href={href}>
        <div className="card h-full group cursor-pointer">
          <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7 text-accent group-hover:text-primary-dark transition-colors" />
          </div>
          
          <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
