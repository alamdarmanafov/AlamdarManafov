"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { mebelStats } from "@/data/mebel-data"

export default function MebelAbout() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <div className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-[#c8a24d]">
              Haqqımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3a2413] mt-3 mb-6">
              Hər ev üçün öz xarakterində mebel
            </h2>
            <p className="text-[#6b5946] text-lg mb-4">
              ARDIC Mebel 2013-cü ildən bəri Bakıda fəaliyyət göstərir. Massiv ağac və keyfiyyətli
              materiallardan istifadə edərək, hər müştərinin otağına uyğun fərdi həllər təqdim edirik.
            </p>
            <p className="text-[#6b5946] text-lg">
              Kiçik studiyadan böyük villaya qədər, hər layihədə eyni diqqət və ustalıqla çalışırıq.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {mebelStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-[#faf7f2] rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#5c3a21]">{stat.value}</p>
                <p className="text-sm text-[#6b5946] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
