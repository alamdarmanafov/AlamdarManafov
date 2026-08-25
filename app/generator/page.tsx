"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Copy, RotateCcw } from "lucide-react"
import { toast } from "sonner"

import GeneratorForm from "@/components/generator/generator-form"
import GeneratorPreview from "@/components/generator/generator-preview"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { useGeneratorStorage } from "@/hooks/use-generator-storage"

export default function GeneratorPage() {
  const { data, setData, reset, loaded } = useGeneratorStorage()

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${data.fullName || "portfolio"}.json`.replace(/\s+/g, "-").toLowerCase()
    a.click()
    URL.revokeObjectURL(url)
    toast.success("JSON faylı endirildi")
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      toast.success("Məlumat panoya kopyalandı")
    } catch {
      toast.error("Kopyalama uğursuz oldu")
    }
  }

  const handleReset = () => {
    if (window.confirm("Bütün məlumatlar silinsin? Bu geri qaytarıla bilməz.")) {
      reset()
      toast.success("Forma sıfırlandı")
    }
  }

  return (
    <LanguageProvider>
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0808c1] transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} /> Ana səhifəyə qayıt
        </Link>

        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4">Portfolio Generator</h1>
          <div className="w-20 h-1 bg-[#fff45c] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Məlumatlarınızı daxil edin, portfolyonuzun canlı önizləməsini sağda görün. Hazır olanda JSON kimi
            endirə və ya kopyalaya bilərsiniz.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button onClick={handleDownload} className="bg-[#0808c1] hover:bg-[#0606a0]">
            <Download size={16} className="mr-2" /> JSON kimi endir
          </Button>
          <Button onClick={handleCopy} variant="outline" className="border-[#0808c1]/30 text-[#0808c1]">
            <Copy size={16} className="mr-2" /> Kopyala
          </Button>
          <Button onClick={handleReset} variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
            <RotateCcw size={16} className="mr-2" /> Sıfırla
          </Button>
        </div>

        {loaded ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <GeneratorForm defaultValues={data} onChange={setData} />
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-medium text-gray-500 mb-3 text-center lg:text-left">Canlı önizləmə</p>
              <GeneratorPreview data={data} />
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">Yüklənir...</div>
        )}
      </div>

      <Footer />
      <Toaster position="top-center" />
    </main>
    </LanguageProvider>
  )
}
