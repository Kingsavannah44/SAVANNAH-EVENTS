'use client'

import { motion } from 'framer-motion'
import { Calendar, Mic, PartyPopper, Sparkles, CheckCircle, Star, ArrowRight, Users, Award, Clock } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import EventCard from '@/components/ui/EventCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { useState, useEffect } from 'react'

const services = [
  {
    icon: Calendar,
    title: 'Event Organizing',
    description: 'From concept to completion, we handle every detail of your event with precision and creativity.',
    href: '/services#organizing',
  },
  {
    icon: Mic,
    title: 'MC Services',
    description: 'Professional masters of ceremonies who bring energy, engagement, and expertise to your events.',
    href: '/services#mc',
  },
  {
    icon: PartyPopper,
    title: 'Outside Gatherings',
    description: 'Transform outdoor spaces into stunning event venues with our comprehensive setup services.',
    href: '/services#gatherings',
  },
  {
    icon: Sparkles,
    title: 'Event Management',
    description: 'Full-service event management ensuring seamless execution from start to finish.',
    href: '/services#management',
  },
]

const heroImages = [
  'https://images.unsplash.com/photo-1519167758481-83f29da8c2b6?w=1920&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
  'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80',
]

const upcomingEvents = [
  {
    id: '1',
    title: 'Spring Wedding Expo',
    date: new Date(2026, 2, 15),
    location: 'Nairobi Convention Center',
    category: 'WEDDING' as const,
  },
  {
    id: '2',
    title: 'Corporate Leadership Summit',
    date: new Date(2026, 2, 22),
    location: 'KICC',
    category: 'CORPORATE' as const,
  },
  {
    id: '3',
    title: 'Garden Birthday Celebration',
    date: new Date(2026, 2, 28),
    location: 'Nairobi Botanical Garden',
    category: 'BIRTHDAY' as const,
  },
]

const testimonials = [
  {
    name: 'Sarah Kamau',
    role: 'Wedding Client',
    content: 'Savannah Events made our wedding day absolutely perfect. Their attention to detail and professionalism exceeded all our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'John Mwangi',
    role: 'Corporate Client',
    content: 'We\'ve used Savannah Events for multiple corporate events. Their MC services and event management are top-notch. They always deliver beyond expectations.',
    rating: 5,
  },
  {
    name: 'Grace Njeri',
    role: 'Birthday Client',
    content: 'The team transformed our outdoor space into a magical venue. Everything was handled professionally from start to finish. Best event planners in Kenya!',
    rating: 5,
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to creating unforgettable moments',
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Services',
    description: 'End-to-end event solutions tailored to your unique needs',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision is our priority, ensuring personalized attention',
  },
  {
    icon: Clock,
    title: 'Timely Execution',
    description: 'Punctual and organized, we respect your schedule',
  },
]

const stats = [
  { value: '500+', label: 'Events Organized' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(imageTimer)
  }, [])

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254715970249'

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        </div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent font-semibold text-sm tracking-wider mb-6">
                  PREMIER EVENT MANAGEMENT
                </span>
                <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  Creating Moments<br />
                  <span className="text-accent">That Matter</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Transforming visions into unforgettable experiences across Kenya
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <WhatsAppButton
                  phone={phoneNumber}
                  message="Hi Savannah Events, I'm interested in your event management services. Please get back to me with more details."
                  size="lg"
                  label="Book Your Event"
                  variant="primary"
                />
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-primary py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:gap-3 shadow-xl"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Dynamic Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 rounded-2xl transition-all duration-300" />
                    <div className="relative">
                      <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description.split('.')[0]}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Image Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-3 justify-center mt-16"
            >
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentImageIndex ? 'w-12 bg-accent' : 'w-8 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive event solutions tailored to make your special occasions extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 md:py-32 bg-primary-dark">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our latest events and join us in creating memorable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/events"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark py-3 px-8 rounded-lg font-semibold transition-all duration-200 hover:shadow-button hover:-translate-y-0.5"
            >
              View All Events
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Savannah Events?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring passion, expertise, and dedication to every event we manage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-accent transition-all duration-300">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary-dark">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it — hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent to-accent-light">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-xl text-primary mb-12 leading-relaxed">
              Let's bring your vision to life. Contact us today to start planning 
              an unforgettable experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                phone={phoneNumber}
                message="Hi Savannah Events, I'd like to discuss planning an event. Please get back to me."
                size="lg"
                label="Get Started Now"
                variant="primary"
              />
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary text-white py-4 px-8 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
