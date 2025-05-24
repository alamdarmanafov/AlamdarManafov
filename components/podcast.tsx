"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Play } from "lucide-react"
import { podcastData } from "@/data/podcast-data"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Podcast() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { language } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div
      className="min-h-screen py-20 flex items-center relative overflow-hidden "
      ref={containerRef}
      id="podcast-section"
      aria-label="Podcast and Media Section"
    >
     
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ opacity }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4" style={{ y: y1 }}>
            {language === 'en' ? 'Podcast & Media' : 'Podkast & Media'}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-600">
            {language === 'en' 
              ? 'Explore my latest podcasts, videos, and media appearances where I discuss technology, creativity, and digital innovation.'
              : 'Texnologiya, yaradıcılıq və rəqəmsal innovasiya haqqında müzakirə etdiyim ən son podkastlarımı, videolarımı və media görünüşlərimi kəşf edin.'}
          </motion.p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="podcast-swiper"
          >
            {podcastData[language].map((item) => (
              <SwiperSlide key={item.id}>
                <PodcastCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

interface PodcastCardProps {
  item: {
    id: number
    title: string
    description: string
    image: string
    type: string
    date: string
    url: string
  }
}

function PodcastCard({ item }: PodcastCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full border hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        <div className="relative aspect-[16/9] w-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play size={28} className="text-[#0808c1] ml-1" />
            </div>
          </div>
          <div className="absolute top-3 left-3 px-3 py-1 bg-[#0808c1] text-white text-xs sm:text-sm font-semibold rounded-full shadow">
            {item.type}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-tight min-h-[2.7em]">{item.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 line-clamp-3 flex-grow min-h-[4.5em]">{item.description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-400 font-medium">{item.date}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
