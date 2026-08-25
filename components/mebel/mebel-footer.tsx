"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TreePine, Instagram, Facebook } from "lucide-react"
import { mebelBrand } from "@/data/mebel-data"

export default function MebelFooter() {
  return (
    <footer className="py-12 bg-[#3a2413] text-[#f3ece1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="w-9 h-9 rounded-full bg-[#f3ece1] text-[#3a2413] flex items-center justify-center">
              <TreePine size={18} />
            </span>
            {mebelBrand.name}
          </div>

          <div className="flex gap-4">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "#c8a24d" }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "#c8a24d" }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={18} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-[#f3ece1]/70">
          <p>&copy; {new Date().getFullYear()} {mebelBrand.name}. Bütün hüquqlar qorunur.</p>
          <p className="mt-2">
            Bu nümunə sayt{" "}
            <Link href="/" className="text-[#c8a24d] hover:underline">
              Alamdar Manafov
            </Link>{" "}
            tərəfindən portfolio layihəsi kimi hazırlanmışdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
