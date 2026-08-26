"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import BlogHeader from "@/components/blog-header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"
import { getPostBySlug, blogPosts } from "@/data/blog-data"

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { language } = useLanguage()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <main className="relative min-h-screen bg-white">
        <BlogHeader />
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-[#0808c1] mb-4">
            {language === "en" ? "Post not found" : "Yazı tapılmadı"}
          </h1>
          <Link href="/blog" className="text-[#0808c1] font-medium underline">
            {language === "en" ? "Back to Insights" : "Bloqa qayıt"}
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main className="relative min-h-screen bg-white">
      <BlogHeader />

      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-[#0808c1] font-medium mb-8"
        >
          <ArrowLeft size={16} />
          {language === "en" ? "Back to Insights" : "Bloqa qayıt"}
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title[language]}
        </h1>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image src={post.image} alt={post.title[language]} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
          {post.content[language]}
        </div>

        <div className="mt-12 pt-8 border-t flex items-center gap-2">
          {post.category.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#0808c1]/10 text-[#0808c1] text-sm rounded-full capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {otherPosts.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {language === "en" ? "More insights" : "Daha çox yazı"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherPosts.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`}>
                <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image src={p.image} alt={p.title[language]} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{p.title[language]}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
