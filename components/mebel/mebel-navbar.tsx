"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, TreePine } from "lucide-react"
import { mebelBrand } from "@/data/mebel-data"

const sections = [
  { id: "mebel-home", label: "Ana səhifə" },
  { id: "mebel-about", label: "Haqqımızda" },
  { id: "mebel-collections", label: "Kolleksiyalar" },
  { id: "mebel-features", label: "Niyə biz?" },
  { id: "mebel-testimonials", label: "Rəylər" },
  { id: "mebel-contact", label: "Əlaqə" },
]

export default function MebelNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 76, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-colors duration-300 ${
        scrolled ? "bg-[#faf7f2]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        <button
          onClick={() => scrollToSection("mebel-home")}
          className="flex items-center gap-2 text-[#5c3a21] font-bold text-xl"
        >
          <span className="w-9 h-9 rounded-full bg-[#5c3a21] text-[#faf7f2] flex items-center justify-center">
            <TreePine size={18} />
          </span>
          {mebelBrand.name}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-medium text-[#6b5946] hover:text-[#5c3a21] transition-colors"
            >
              {section.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("mebel-contact")}
            className="px-5 py-2.5 rounded-full bg-[#5c3a21] text-[#faf7f2] text-sm font-medium hover:bg-[#472c19] transition-colors"
          >
            Sifariş ver
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#5c3a21]"
          aria-label="Menyu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#faf7f2] shadow-lg rounded-b-2xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="py-3 px-6 text-left text-[#6b5946] hover:text-[#5c3a21] font-medium"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
