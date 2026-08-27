import type { Metadata } from "next"
import MebelNavbar from "@/components/mebel/mebel-navbar"
import MebelHero from "@/components/mebel/mebel-hero"
import MebelAbout from "@/components/mebel/mebel-about"
import MebelCollections from "@/components/mebel/mebel-collections"
import MebelFeatures from "@/components/mebel/mebel-features"
import MebelTestimonials from "@/components/mebel/mebel-testimonials"
import MebelContact from "@/components/mebel/mebel-contact"
import MebelFooter from "@/components/mebel/mebel-footer"

export const metadata: Metadata = {
  title: "ARDIC Mebel | Nümunə Portfolio Sayt",
  description:
    "Mebel şirkəti üçün nümunə portfolio sayt - Alamdar Manafov tərəfindən hazırlanmış web dizayn işi.",
}

export default function MebelPage() {
  return (
    <main className="relative min-h-screen bg-[#faf7f2] overflow-hidden">
      <MebelNavbar />

      <section id="mebel-home">
        <MebelHero />
      </section>

      <section id="mebel-about">
        <MebelAbout />
      </section>

      <section id="mebel-collections">
        <MebelCollections />
      </section>

      <section id="mebel-features">
        <MebelFeatures />
      </section>

      <section id="mebel-testimonials">
        <MebelTestimonials />
      </section>

      <section id="mebel-contact">
        <MebelContact />
      </section>

      <MebelFooter />
    </main>
  )
}
