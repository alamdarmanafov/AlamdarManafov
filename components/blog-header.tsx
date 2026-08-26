"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Logo from "@/public/img/Logo_Blue.png"
import { useLanguage } from "@/contexts/LanguageContext"

export default function BlogHeader() {
  const { language, setLanguage } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 px-6 md:px-12 backdrop-blur-md bg-white/80 h-20 flex items-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-3 text-[#0808c1] font-bold">
          <Image src={Logo} alt="Logo" width={44} height={44} className="object-contain" />
          <span className="hidden sm:inline">
            {language === "en" ? "Alamdar Manafov" : "Ələmdar Manafov"}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1 text-gray-600 hover:text-[#0808c1] font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            {language === "en" ? "Back to home" : "Ana səhifəyə qayıt"}
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`text-sm font-medium ${language === "en" ? "text-[#0808c1]" : "text-gray-400"}`}
            >
              EN
            </button>
            <span className="text-gray-300">/</span>
            <button
              onClick={() => setLanguage("az")}
              className={`text-sm font-medium ${language === "az" ? "text-[#0808c1]" : "text-gray-400"}`}
            >
              AZ
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
