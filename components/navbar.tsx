"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import Logo from "@/public/img/Logo_Blue.png"

interface NavbarProps {
  sections: {
    id: string
    label: string
    ref: React.RefObject<HTMLElement | null> | null
  }[]
  scrollY: number
}

export default function Navbar({ sections, scrollY }: NavbarProps) {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref && section.ref.current) {
          const element = section.ref.current
          if (element.offsetTop <= currentPosition) {
            setActiveSection(section.id)
            break
          }
        } else if (i === 0) {
          setActiveSection("home")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const navbarHeight = Math.max(64, 80 - scrollY * 0.1)

  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 backdrop-blur-md bg-white/80"
      style={{ height: navbarHeight }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <motion.div
          className="text-[#0808c1] font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={82}
              height={82}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`relative font-medium ${activeSection === section.id ? "text-[#0808c1]" : "text-gray-600"}`}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0808c1]"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0808c1] focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mounted && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50"
              initial={{ opacity: 0, scale: 0.9, transformOrigin: "top center" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col py-4 rounded-b-xl backdrop-blur-md bg-white/95">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    className={`py-3 px-6 text-left ${
                      activeSection === section.id ? "text-[#0808c1] font-medium" : "text-gray-600"
                    }`}
                    onClick={() => scrollToSection(section.id)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  )
}
