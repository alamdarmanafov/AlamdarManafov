"use client"

import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Brands from "@/components/brands"
import Testimonials from "@/components/testimonials"
import Podcast from "@/components/podcast"
import BlogPreview from "@/components/blog-preview"
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
  const podcastRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)
  const portfolioRef = useRef<HTMLElement | null>(null)
  const blogRef = useRef<HTMLElement | null>(null)

  const sections = [
    { id: "home", label: "Ana səhifə", ref: null },
    { id: "about", label: "Haqqımda", ref: aboutRef },
    { id: "podcast", label: "Podkastlar", ref: podcastRef },
    { id: "portfolio", label: "Portfolio", ref: portfolioRef },
    { id: "blog", label: "Bloq", ref: blogRef },
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

      <section id="brands" className="relative">
        <Brands />
      </section>

      <section id="testimonials" className="relative">
        <Testimonials />
      </section>

      <section id="podcast" ref={podcastRef} className="relative">
        <Podcast />
      </section>

      <section id="portfolio" ref={portfolioRef} className="relative">
        <Portfolio />
      </section>

      <section id="blog" ref={blogRef} className="relative">
        <BlogPreview />
      </section>

      <section id="contact" ref={contactRef} className="relative">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
