"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

export default function TestimonialCard({
  testimonial,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="bg-primary-light/30 rounded-2xl p-8 h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent fill-accent" />
          ))}
        </div>

        <p className="text-gray-200 mb-6 leading-relaxed italic">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
            <span className="text-primary-dark font-bold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
