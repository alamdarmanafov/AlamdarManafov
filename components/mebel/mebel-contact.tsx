"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { mebelBrand } from "@/data/mebel-data"

export default function MebelContact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const [formState, setFormState] = useState({ name: "", phone: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Salam, mənim adım ${formState.name}.\nTelefon: ${formState.phone}\nMesaj: ${formState.message}`
    window.open(`https://wa.me/${mebelBrand.whatsapp}?text=${encodeURIComponent(text)}`, "_blank")
  }

  const infoItems = [
    { icon: Phone, label: "Telefon", value: mebelBrand.phone },
    { icon: Mail, label: "E-poçt", value: mebelBrand.email },
    { icon: MapPin, label: "Ünvan", value: mebelBrand.address },
    { icon: Clock, label: "İş saatları", value: mebelBrand.workHours },
  ]

  return (
    <div className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#c8a24d]">Əlaqə</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3a2413] mt-3 mb-4">
            Layihənizi birlikdə quraq
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#6b5946]">
            Sualınız var və ya sifariş vermək istəyirsiniz? Bizimlə əlaqə saxlayın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-[#faf7f2] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#5c3a21]/10 flex items-center justify-center text-[#5c3a21] shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#6b5946]">{item.label}</p>
                  <p className="text-lg font-medium text-[#3a2413]">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#faf7f2] rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="mebel-name" className="block text-sm font-medium text-[#3a2413] mb-1">
                  Adınız
                </label>
                <input
                  id="mebel-name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#e3d9c9] bg-white focus:outline-none focus:ring-2 focus:ring-[#5c3a21]/40"
                  placeholder="Adınızı daxil edin"
                />
              </div>
              <div>
                <label htmlFor="mebel-phone" className="block text-sm font-medium text-[#3a2413] mb-1">
                  Telefon
                </label>
                <input
                  id="mebel-phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#e3d9c9] bg-white focus:outline-none focus:ring-2 focus:ring-[#5c3a21]/40"
                  placeholder="+994 XX XXX XX XX"
                />
              </div>
              <div>
                <label htmlFor="mebel-message" className="block text-sm font-medium text-[#3a2413] mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="mebel-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#e3d9c9] bg-white focus:outline-none focus:ring-2 focus:ring-[#5c3a21]/40"
                  placeholder="Hansı mebelə ehtiyacınız var?"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-[#5c3a21] text-[#faf7f2] rounded-lg font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, backgroundColor: "#472c19" }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp ilə göndər
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
