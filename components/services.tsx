"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Target, Megaphone, Palette, Calendar, Video, TrendingUp, Users, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { servicesData } from "@/data/services-data"

const icons = {
  target: Target,
  megaphone: Megaphone,
  palette: Palette,
  calendar: Calendar,
  video: Video,
  "trending-up": TrendingUp,
  users: Users,
  globe: Globe,
}

export default function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { language } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const data = servicesData[language]

  return (
    <div className="min-h-screen py-20 flex items-center relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4"
            style={{ y: y1 }}
            id="services-section"
            aria-label="Services Section"
          >
            {data.title}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg font-semibold text-gray-600">
            {data.slogan}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                variants={itemVariants}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0808c1]/5 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fff45c]/20 rounded-full -ml-12 -mb-12" />

                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0808c1]/10 text-[#0808c1] mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
