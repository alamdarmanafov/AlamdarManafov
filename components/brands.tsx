"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { brandsData, brandLogos } from "@/data/brands-data"

export default function Brands() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { language } = useLanguage()
  const data = brandsData[language]

  return (
    <div className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-[#fff45c] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600">{data.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl shadow-md p-4 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.image}
                  alt="Brand logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
