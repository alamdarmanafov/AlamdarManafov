"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useLanguage } from "@/contexts/LanguageContext"
import { testimonials } from "@/data/testimonials-data"

export default function Testimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { language } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div className="min-h-screen py-20 flex items-center relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4" style={{ y: y1 }}>
            {language === "en" ? "Client Results" : "Müştəri Nəticələri"}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-600">
            {language === "en"
              ? "What clients say after working together."
              : "Müştərilərin əməkdaşlıqdan sonra dedikləri."}
          </motion.p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          className="testimonials-swiper pb-4"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-2xl shadow-lg border p-6 h-full flex flex-col">
                <Quote className="text-[#fff45c] mb-4" size={32} fill="#fff45c" />
                <p className="text-gray-700 flex-grow mb-6 leading-relaxed">
                  &ldquo;{t.text[language]}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role[language]}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
