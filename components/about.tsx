"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Heart, Book, GraduationCap, Briefcase, Bike, Users } from "lucide-react"

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

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
            id="about-section"
            aria-label="About Me Section"
          >
            Haqqımda
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg font-semibold text-gray-600">
            Sloqanımız: #BePositive ✌
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ opacity }}
        >
          {/* Ana Bilgi Kartı */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0808c1]/5 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fff45c]/20 rounded-full -ml-12 -mb-12" />
            
            <h3 className="text-2xl font-bold text-[#0808c1] mb-4">Ələmdar Manafov</h3>
            <p className="text-gray-600 mb-6">
              1994-cü ildə Bakı şəhərində anadan olub. Orta təhsilini 195 saylı tam orta məktəbdə alıb. 
              Ali təhsili - Azərbaycan Texniki Universitetində Proseslərin Avtomatlaşdırılması ixtisasında 
              2011-2015-ci illərdə Bakalavr və 2016-2018-ci illərdə isə eyni ixtisasın Magistr təhsilin alıb.
            </p>
            <div className="flex items-center gap-2 text-[#0808c1]">
              <GraduationCap size={20} />
              <span className="font-medium">ATU Mezunu</span>
            </div>
          </motion.div>

          {/* Kariyer Kartı */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#fff45c]/20 rounded-full -ml-16 -mt-16" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#0808c1]/5 rounded-full -mr-12 -mb-12" />
            
            <h3 className="text-2xl font-bold text-[#0808c1] mb-4">Professional Kariyer</h3>
            <p className="text-gray-600 mb-6">
              2018-ci ildən başlayaraq Sosial media üzrə araşdırmalar edir və seminarlar həyata keçirir. 
              2019-cu illərdən etibarən Sosial media ilə bağlı müxtəlif Sosial şəbəkələrdə paylaşımlar edir. 
              2023-cü ildən "BePositive.az" şirkətinin qurucusu olaraq brendinq və marketinq xidmətləri təqdim edir.
            </p>
            <div className="flex items-center gap-2 text-[#0808c1]">
              <Briefcase size={20} />
              <span className="font-medium">BePositive.az</span>
            </div>
          </motion.div>

          {/* Kitab ve Başarılar Kartı */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0808c1]/5 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fff45c]/20 rounded-full -ml-12 -mb-12" />
            
            <h3 className="text-2xl font-bold text-[#0808c1] mb-4">Kitab və Başarılar</h3>
            <p className="text-gray-600 mb-6">
              "Niyə görə #BePositive" kitabının müəllifidir. Sosial media strategiyası və brendinq sahəsində 
              bir çox uğurlu layihələrə imza atıb. Şirkətlərə və fərdi şəxslərə marketinq xidmətləri təqdim edir.
            </p>
            <div className="flex items-center gap-2 text-[#0808c1]">
              <Book size={20} />
              <span className="font-medium">Kitab Müəllifi</span>
            </div>
          </motion.div>

          {/* Hobbilər və Həyat Şüarı Kartı */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#fff45c]/20 rounded-full -ml-16 -mt-16" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#0808c1]/5 rounded-full -mr-12 -mb-12" />
            
            <h3 className="text-2xl font-bold text-[#0808c1] mb-4">Hobbilər və Həyat Şüarı</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Bike size={20} className="text-[#0808c1]" />
                <span className="text-gray-600">Velosiped sürmək</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart size={20} className="text-[#0808c1]" />
                <span className="text-gray-600">Fitneslə məşğul olmaq</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#0808c1]" />
                <span className="text-gray-600">İnsanlarla ünsiyyət</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#0808c1]/5 rounded-xl">
              <p className="text-[#0808c1] font-bold text-lg">Həyat şüarı: #BePositive</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
