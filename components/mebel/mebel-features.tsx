"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Truck, Palette, Hammer } from "lucide-react"
import { mebelFeatures, type MebelFeature } from "@/data/mebel-data"

const iconMap: Record<MebelFeature["icon"], typeof ShieldCheck> = {
  shield: ShieldCheck,
  truck: Truck,
  palette: Palette,
  hammer: Hammer,
}

export default function MebelFeatures() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#c8a24d]">
            Niyə biz?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3a2413] mt-3">
            Keyfiyyəti hiss edəcəksiniz
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mebelFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                className="text-center p-6 rounded-2xl bg-[#faf7f2]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#5c3a21]/10 flex items-center justify-center text-[#5c3a21] mb-4">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-[#3a2413] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b5946]">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
