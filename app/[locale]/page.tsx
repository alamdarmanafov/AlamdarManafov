"use client"

import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Brands from "@/components/brands"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import Portfolio from "@/components/portfolio"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const aboutRef = useRef<HTMLElement | null>(null)
  const servicesRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)
  const portfolioRef = useRef<HTMLElement | null>(null)

  const sections = [
    { id: "home", label: "Ana səhifə", ref: null },
    { id: "about", label: "Haqqımda", ref: aboutRef },
    { id: "services", label: "Xidmətlər", ref: servicesRef },
    { id: "portfolio", label: "Portfolio", ref: portfolioRef },
    { id: "contact", label: "Əlaqə", ref: contactRef },
  ]

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <ParticleBackground />
      <Navbar sections={sections} scrollY={scrollY} />

      <section id="home" className="relative">
        <Hero />
      </section>

      <section id="about" ref={aboutRef} className="relative">
        <About />
      </section>

      <section id="services" ref={servicesRef} className="relative">
        <Services />
      </section>

      <section id="brands" className="relative">
        <Brands />
      </section>

      <section id="testimonials" className="relative">
        <Testimonials />
      </section>

      <section id="portfolio" ref={portfolioRef} className="relative">
        <Portfolio />
      </section>

      <section id="contact" ref={contactRef} className="relative">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
