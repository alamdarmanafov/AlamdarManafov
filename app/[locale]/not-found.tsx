"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const copy = {
  en: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to homepage",
  },
  az: {
    title: "Səhifə tapılmadı",
    description: "Axtardığınız səhifə mövcud deyil və ya ünvanı dəyişdirilib.",
    cta: "Ana səhifəyə qayıt",
  },
}

export default function NotFound() {
  const pathname = usePathname()
  const locale = pathname?.startsWith("/az") ? "az" : "en"
  const text = copy[locale]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-7xl md:text-8xl font-bold text-[#0808c1]">404</p>
      <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
        {text.title}
      </h1>
      <p className="mt-2 text-gray-600 max-w-md">{text.description}</p>
      <Link
        href={`/${locale}`}
        className="mt-8 px-8 py-4 bg-[#0808c1] text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
      >
        {text.cta}
      </Link>
    </div>
  )
}
