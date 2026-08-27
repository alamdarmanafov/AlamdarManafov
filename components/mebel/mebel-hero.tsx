"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sofa } from "lucide-react"
import { mebelBrand } from "@/data/mebel-data"

export default function MebelHero() {
  const scrollToCollections = () => {
    const element = document.getElementById("mebel-collections")
    if (element) {
      window.scrollTo({ top: element.offsetTop - 76, behavior: "smooth" })
    }
  }

  const openWhatsapp = () => {
    const message = "Salam, mebel kolleksiyalarınız haqqında məlumat almaq istəyirəm."
    window.open(`https://wa.me/${mebelBrand.whatsapp}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden bg-[#faf7f2]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c8a24d]/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-[#5c3a21]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#5c3a21]/10 text-[#5c3a21] text-sm font-medium">
            Bakıda əl işi ilə hazırlanır
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-[#3a2413] leading-tight">
            {mebelBrand.tagline}
          </h1>

          <p className="text-lg text-[#6b5946] max-w-lg">{mebelBrand.description}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              onClick={scrollToCollections}
              className="px-8 py-4 bg-[#5c3a21] text-[#faf7f2] rounded-full text-base font-medium shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.03, backgroundColor: "#472c19" }}
              whileTap={{ scale: 0.98 }}
            >
              Kolleksiyalara bax
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              onClick={openWhatsapp}
              className="px-8 py-4 border border-[#5c3a21] text-[#5c3a21] rounded-full text-base font-medium"
              whileHover={{ scale: 1.03, backgroundColor: "#5c3a21", color: "#faf7f2" }}
              whileTap={{ scale: 0.98 }}
            >
              Sifariş ver
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#5c3a21] to-[#8a5a34] shadow-2xl flex items-center justify-center"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
          >
            <Sofa size={140} className="text-[#faf7f2]/90" strokeWidth={1} />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-2xl font-bold text-[#5c3a21]">12+ il</p>
            <p className="text-sm text-[#6b5946]">Bazarda təcrübə</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
