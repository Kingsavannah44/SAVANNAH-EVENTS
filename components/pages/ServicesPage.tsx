'use client'

import { motion } from 'framer-motion'
import { Calendar, Mic, PartyPopper, Sparkles, ChevronDown, CheckCircle } from 'lucide-react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { useState } from 'react'

const services = [
  {
    id: 'organizing',
    icon: Calendar,
    title: 'Event Organizing',
    description: 'Our comprehensive event organizing service handles every aspect of your event from concept to completion. We take care of venue selection, vendor coordination, timeline management, and day-of execution.',
    features: [
      'Venue selection and booking',
      'Vendor coordination and management',
      'Timeline and schedule creation',
      'Budget planning and tracking',
      'Day-of coordination',
      'Guest list management',
    ],
    pricing: 'Starting from KES 150,000',
  },
  {
    id: 'mc',
    icon: Mic,
    title: 'MC Services',
    description: 'Professional MC services to keep your event engaging, organized, and memorable. Our experienced masters of ceremonies bring energy, professionalism, and crowd engagement to any occasion.',
    features: [
      'Event script writing',
      'Crowd engagement',
      'Schedule management',
      'Guest introductions',
      'Interactive activities',
      'Professional equipment',
    ],
    pricing: 'Starting from KES 50,000',
  },
  {
    id: 'gatherings',
    icon: PartyPopper,
    title: 'Outside Gatherings',
    description: 'Transform any outdoor space into a stunning event venue. We handle everything from tent setup to landscape coordination for memorable outdoor celebrations.',
    features: [
      'Outdoor venue scouting',
      'Tent and marquee setup',
      'Decoration and theming',
      'Weather contingency planning',
      'Outdoor catering coordination',
      'Lighting and ambiance',
    ],
    pricing: 'Starting from KES 200,000',
  },
  {
    id: 'management',
    icon: Sparkles,
    title: 'Event Management',
    description: 'Full-service event management for corporate and personal events. We handle all logistics, vendor relationships, and operational details so you can focus on your guests.',
    features: [
      'Complete event planning',
      'Vendor management',
      'Logistics coordination',
      'Staff coordination',
      'Risk management',
      'Post-event analysis',
    ],
    pricing: 'Starting from KES 250,000',
  },
]

const faqs = [
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 2-3 months in advance for weddings and large events, and 1 month for smaller events. However, we can sometimes accommodate last-minute bookings depending on availability.',
  },
  {
    question: 'Do you provide services outside of Nairobi?',
    answer: 'Yes! We provide event services throughout Kenya. Additional travel fees may apply for events outside of Nairobi.',
  },
  {
    question: 'What is your payment structure?',
    answer: 'We typically require a 30% deposit to secure your booking, with the remaining balance due 14 days before your event date. We offer flexible payment plans for larger events.',
  },
  {
    question: 'Can you work with our existing vendors?',
    answer: 'Absolutely! We are happy to coordinate with your existing vendors. We can also recommend trusted vendors from our network if needed.',
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Comprehensive Event Solutions
            </h1>
            <p className="text-gray-300 text-lg">
              From intimate gatherings to grand celebrations, we provide professional 
              event services tailored to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-white'}`}
        >
          <div className="container-custom px-4 md:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-accent/10 rounded-xl p-6 mb-6">
                  <span className="text-accent font-semibold">{service.pricing}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <WhatsAppButton 
                  phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}
                  message={`Hi Savannah Events, I'm interested in your ${service.title} service. Please provide more details.`}
                  label={`Book ${service.title}`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-accent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-primary pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-dark/80 mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and let's discuss how we can make your event unforgettable.
            </p>
            <WhatsAppButton 
              phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}
              message="Hi Savannah Events, I'd like to discuss booking your services."
              size="lg"
              variant="secondary"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
