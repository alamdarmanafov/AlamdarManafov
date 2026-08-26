"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { blogPosts } from "@/data/blog-data"

export default function BlogPreview() {
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
            {language === "en" ? "Insights" : "Bloq"}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-600">
            {language === "en"
              ? "Practical marketing and social media lessons from real client work."
              : "Real müştəri işlərindən praktiki marketinq və sosial media dərsləri."}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full border hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.image}
                    alt={post.title[language]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
                    {post.title[language]}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-3 flex-grow">
                    {post.excerpt[language]}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#0808c1] font-medium mt-2">
                    {language === "en" ? "Read more" : "Ətraflı oxu"}
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#0808c1] text-[#0808c1] font-medium hover:bg-[#0808c1] hover:text-white transition-colors"
          >
            {language === "en" ? "View all posts" : "Bütün yazılara bax"}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
