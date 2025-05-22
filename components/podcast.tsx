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

export default function Podcast() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div
      className="min-h-screen py-20 flex items-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
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
            Podcast & Media
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore my latest podcasts, videos, and media appearances where I discuss technology, creativity, and
            digital innovation.
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
            {podcastData.map((item) => (
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
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="relative aspect-[16/9]">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play size={20} className="text-[#0808c1] ml-1" />
            </div>
          </div>
          <div className="absolute top-3 left-3 px-2 py-1 bg-[#0808c1] text-white text-xs sm:text-sm font-medium rounded-full">
            {item.type}
          </div>
        </div>
        <div className="p-4 sm:p-6 flex flex-col h-[calc(100%-16/9*100%)]">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 line-clamp-3 flex-grow">{item.description}</p>
          <div className="text-xs sm:text-sm text-gray-500">{item.date}</div>
        </div>
      </Link>
    </div>
  )
}
