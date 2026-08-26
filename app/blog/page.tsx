"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BlogHeader from "@/components/blog-header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"
import { blogPosts } from "@/data/blog-data"

export default function BlogIndexPage() {
  const { language } = useLanguage()

  return (
    <main className="relative min-h-screen bg-white">
      <BlogHeader />

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4">
          {language === "en" ? "Insights" : "Bloq"}
        </h1>
        <div className="w-20 h-1 bg-[#fff45c] mb-10" />

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-shadow p-4 sm:p-5">
                <div className="relative w-full sm:w-56 aspect-[16/9] sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={post.image} alt={post.title[language]} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {post.title[language]}
                  </h2>
                  <p className="text-gray-600 mb-3">{post.excerpt[language]}</p>
                  <span className="inline-flex items-center gap-1 text-[#0808c1] font-medium">
                    {language === "en" ? "Read more" : "Ətraflı oxu"}
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
