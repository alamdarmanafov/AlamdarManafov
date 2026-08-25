"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { mebelTestimonials } from "@/data/mebel-data"

export default function MebelTestimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div className="py-24 bg-[#faf7f2]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#c8a24d]">
            Müştəri rəyləri
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3a2413] mt-3">
            Bizə etibar edənlər
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mebelTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="text-[#c8a24d]/30" size={40} />
              <div className="flex gap-1 my-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#c8a24d] text-[#c8a24d]" />
                ))}
              </div>
              <p className="text-[#6b5946] mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold text-[#3a2413]">{testimonial.name}</p>
                <p className="text-sm text-[#6b5946]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
