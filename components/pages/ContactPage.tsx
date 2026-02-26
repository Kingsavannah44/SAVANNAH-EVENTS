"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { eventCategories } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg">
              Have questions about our services? Ready to book your event? We'd
              love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          {eventCategories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Guest Count
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="100"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                        placeholder="Tell us about your event requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <span className="w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a
                      href="tel:+254715970249"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      +254 715 970 249
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href="mailto:info@savannahevents.com"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      info@savannahevents.com
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                      <br />
                      Sat: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-accent" />
                  <h3 className="font-serif text-xl font-semibold">
                    Quick Chat on WhatsApp
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Get instant responses to your inquiries via WhatsApp. We
                  typically reply within minutes during business hours.
                </p>
                <WhatsAppButton
                  phone={
                    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000"
                  }
                  message="Hi Savannah Events, I'd like to inquire about your services."
                  size="lg"
                  variant="secondary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-100">
        <div className="w-full h-full flex items-center justify-center bg-primary-dark">
          <div className="text-center text-white">
            <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
            <p className="text-xl">Nairobi, Kenya</p>
          </div>
        </div>
      </section>
    </div>
  );
}
