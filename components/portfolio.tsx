"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { portfolioData } from "@/data/portfolio-data"
import Link from "next/link"
import { ExternalLink, Tag } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Portfolio() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { language } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

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
            id="portfolio-section"
            aria-label="Portfolio Section"
          >
            {language === 'en' ? 'Portfolio' : 'Portfolio'}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-600">
            {language === 'en' ? 'My successful projects and works' : 'Uğurlu layihələrim və işlərim'}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ opacity }}
        >
          {portfolioData[language].map((item) => (
            <motion.div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#0808c1]/10 text-[#0808c1] rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <ExternalLink size={20} className="text-[#0808c1] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-[#fff45c]/20 text-[#0808c1] rounded-md text-sm"
                      >
                        <Tag size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 