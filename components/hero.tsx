"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Person from "@/public/img/AlemdarManafovPerson.jpg"
import { useLanguage } from "@/contexts/LanguageContext"
import { staticData } from "@/data/static"

export default function Hero() {
  const { language } = useLanguage()
  const [text] = useTypewriter({
    words: language === 'en' 
      ? ["Marketing & Branding Specialist","Instructor" ]
      : ["Marketinq & Brendinq Mütəxəssisi ","Təlimçi"],
    loop: true,
    delaySpeed: 2000,
  })

  const handleConsultationClick = () => {
    const phoneNumber = "+994105310129" // WhatsApp numaranızı buraya ekleyin
    const message = language === 'en' 
      ? "Hello, I would like to join the consultation."
      : "Salam, konsultasiyaya qoşulmaq istəyirəm."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#0808c1]">
              {language === 'en' ? 'Alamdar Manafov' : 'Ələmdar Manafov'}
            </h1>
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl font-medium h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>{text}</span>
            <Cursor cursorColor="#0808c1" />
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {staticData[language].hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-4 space-y-4"
          >
            <motion.span
              className="text-4xl font-extrabold text-[#d4c92d] drop-shadow-md tracking-tight block"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}
            >
              #BePositive✌🏻
            </motion.span>

            <motion.button
              onClick={handleConsultationClick}
              className="px-8 py-4 bg-[#0808c1] text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, backgroundColor: "#0606a0" }}
              whileTap={{ scale: 0.98 }}
            >
              {language === 'en' ? 'Join Consultation' : 'Konsultasiyaya qoşul'}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0808c1]/20 to-[#fff45c]/20 backdrop-blur-sm shadow-xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Person}
              alt={language === 'en' ? 'Alamdar Manafov' : 'Ələmdar Manafov'}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#fff45c] opacity-30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#0808c1] opacity-30 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-[#0808c1] rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#0808c1] rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
