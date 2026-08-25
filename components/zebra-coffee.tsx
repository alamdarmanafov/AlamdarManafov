"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Clock,
  Coffee,
  ExternalLink,
  Instagram,
  MapPin,
  Star,
  Utensils,
  ShoppingBag,
} from "lucide-react"
import {
  zebraCoffeeGallery,
  zebraCoffeeInfo,
  zebraCoffeeMenu,
} from "@/data/zebra-coffee-data"

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  zebraCoffeeInfo.mapsQuery,
)}`

const navLinks = [
  { id: "haqqinda", label: "Haqqımızda" },
  { id: "menyu", label: "Menyu" },
  { id: "qalereya", label: "Qalereya" },
  { id: "mekan", label: "Məkan" },
]

function ZebraStripes({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-[0.06] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(115deg, #000 0, #000 14px, transparent 14px, transparent 34px)",
      }}
    />
  )
}

export default function ZebraCoffee() {
  return (
    <main className="relative min-h-screen bg-[#f7f3ec] text-[#161311]">
      {/* Utility bar */}
      <div className="bg-[#161311] text-[#f7f3ec] text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-[#e0a530] text-[#e0a530]" />
              {zebraCoffeeInfo.rating} ({zebraCoffeeInfo.reviewCount} rəy)
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock size={14} />
              Bağlanır: {zebraCoffeeInfo.closesAt}
            </span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1 text-[#e0a530] hover:text-[#f7f3ec] transition-colors"
          >
            <ArrowLeft size={14} />
            Portfolioya qayıt
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#f7f3ec]/90 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <span className="w-9 h-9 rounded-full bg-[#161311] flex items-center justify-center">
              <Coffee size={18} className="text-[#e0a530]" />
            </span>
            ZEBRA <span className="text-[#e0a530]">COFFEE</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-[#e0a530] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={zebraCoffeeInfo.wolt}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#161311] text-[#f7f3ec] text-sm font-semibold hover:bg-[#e0a530] hover:text-[#161311] transition-colors"
          >
            Sifariş et
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <ZebraStripes />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#161311]/5 text-xs font-semibold uppercase tracking-wider mb-4">
              Bakı, Xəqani prospekti
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] mb-6">
              Sadə, keyfiyyətli
              <br />
              <span className="text-[#e0a530]">qəhvə mədəniyyəti.</span>
            </h1>
            <p className="text-lg text-[#161311]/70 max-w-md mb-8">
              Zebra Coffee — gündəlik ritmə uyğun sürətli, səmimi və dadlı qəhvə
              təcrübəsi. Yerində otur, ya da yolda apar.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={zebraCoffeeInfo.wolt}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#161311] text-[#f7f3ec] font-semibold hover:bg-[#e0a530] hover:text-[#161311] transition-colors"
              >
                <ShoppingBag size={18} />
                Wolt-da sifariş et
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#161311] font-semibold hover:bg-[#161311] hover:text-[#f7f3ec] transition-colors"
              >
                <MapPin size={18} />
                Yol tarifi
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1.5 rounded-full bg-white shadow-sm">
                ★ {zebraCoffeeInfo.rating} · {zebraCoffeeInfo.reviewCount} rəy
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white shadow-sm">
                {zebraCoffeeInfo.priceRange} / nəfər
              </span>
              {zebraCoffeeInfo.services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 rounded-full bg-white shadow-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-square rounded-[2rem] bg-[#161311] overflow-hidden shadow-2xl"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, #fff 0, #fff 18px, transparent 18px, transparent 44px)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Coffee size={96} className="text-[#e0a530]" strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="haqqinda" className="py-20 border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Haqqımızda</h2>
          <div className="w-16 h-1 bg-[#e0a530] mx-auto mb-6" />
          <p className="text-[#161311]/70 text-lg leading-relaxed">
            Zebra Coffee qara-ağ minimalist ovqatı isti qəhvə mədəniyyəti ilə
            birləşdirən kiçik bir məkandır. Məqsədimiz sadədir: hər fincanda
            sabit dad, sürətli xidmət və səmimi ünsiyyət. İstər sürətli bir
            "quick stop", istərsə də dostlarla uzun söhbət üçün — qapımız
            açıqdır.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menyu" className="py-20 bg-white/60 border-t border-black/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Menyu</h2>
            <div className="w-16 h-1 bg-[#e0a530] mx-auto mb-4" />
            <p className="text-sm text-[#161311]/50">
              * Nümunə menyu — dizayn konsepti üçün hazırlanıb, qiymətlər
              illüstrativdir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {zebraCoffeeMenu.map((group) => (
              <div key={group.category}>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e0a530]" />
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between text-sm border-b border-dashed border-black/10 pb-2"
                    >
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price} ₼</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="qalereya" className="py-20 border-t border-black/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Qalereya</h2>
            <div className="w-16 h-1 bg-[#e0a530] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {zebraCoffeeGallery.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative aspect-square rounded-2xl bg-[#161311] overflow-hidden flex items-end p-4"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(70deg, #fff 0, #fff 10px, transparent 10px, transparent 24px)",
                  }}
                />
                <span className="relative text-[#f7f3ec] text-sm font-semibold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & contact */}
      <section id="mekan" className="py-20 bg-[#161311] text-[#f7f3ec]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Məkan &amp; İş saatları</h2>
            <div className="space-y-4 text-[#f7f3ec]/80">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-[#e0a530] shrink-0" />
                <div>
                  <p>{zebraCoffeeInfo.address}</p>
                  <p className="text-sm text-[#f7f3ec]/50">
                    Plus code: {zebraCoffeeInfo.plusCode}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 text-[#e0a530] shrink-0" />
                <div>
                  <p>Açıq · Bağlanma vaxtı {zebraCoffeeInfo.closesAt}</p>
                  <p className="text-sm text-[#f7f3ec]/50">
                    Dəqiq iş saatları Google Xəritədə yenilənir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Utensils size={20} className="mt-0.5 text-[#e0a530] shrink-0" />
                <p>{zebraCoffeeInfo.services.join(" · ")}</p>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[#e0a530] text-[#161311] font-semibold hover:opacity-90 transition-opacity"
            >
              <MapPin size={18} />
              Xəritədə aç
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={zebraCoffeeInfo.wolt}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl bg-[#f7f3ec] text-[#161311] font-semibold hover:bg-[#e0a530] transition-colors"
            >
              <span className="flex items-center gap-3">
                <ShoppingBag size={20} />
                Wolt ilə sifariş ver
              </span>
              <ExternalLink size={16} />
            </a>
            <a
              href={zebraCoffeeInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl bg-[#f7f3ec] text-[#161311] font-semibold hover:bg-[#e0a530] transition-colors"
            >
              <span className="flex items-center gap-3">
                <Instagram size={20} />
                @zebracoffee.aze
              </span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-[#161311]/50">
        <p>
          Bu, Zebra Coffee üçün hazırlanmış dizayn nümunəsidir ·{" "}
          <Link href="/" className="underline hover:text-[#e0a530]">
            Alamdar Manafov portfolio
          </Link>
        </p>
      </footer>
    </main>
  )
}
