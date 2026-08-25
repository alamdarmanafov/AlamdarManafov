"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sofa, BedDouble, UtensilsCrossed, Briefcase, Lamp, TreePine, ArrowUpRight } from "lucide-react"
import { mebelCollections, type MebelCollection } from "@/data/mebel-data"

const iconMap: Record<MebelCollection["icon"], typeof Sofa> = {
  sofa: Sofa,
  bed: BedDouble,
  kitchen: UtensilsCrossed,
  office: Briefcase,
  kids: Lamp,
  outdoor: TreePine,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function MebelCollections() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })

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
            Kolleksiyalar
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3a2413] mt-3 mb-4">
            Otağınıza uyğun kolleksiya seçin
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#6b5946]">
            Hər otaq üçün fərqli üslub və funksionallıqda hazırlanmış mebel dəstləri
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {mebelCollections.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#5c3a21] to-[#8a5a34] flex items-center justify-center">
                  <Icon size={64} strokeWidth={1} className="text-[#faf7f2]/90" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#3a2413]">{item.title}</h3>
                    <span className="text-xs font-medium text-[#c8a24d]">{item.itemCount}</span>
                  </div>
                  <p className="text-[#6b5946]">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
