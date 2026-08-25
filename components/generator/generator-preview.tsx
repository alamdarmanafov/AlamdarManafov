"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Globe, Instagram, Linkedin, Github, ExternalLink, Tag } from "lucide-react"
import type { GeneratorData } from "@/lib/generator-types"

interface GeneratorPreviewProps {
  data: GeneratorData
}

function normalizeUrl(value: string) {
  if (!value) return ""
  return value.startsWith("http") ? value : `https://${value.replace(/^@/, "")}`
}

export default function GeneratorPreview({ data }: GeneratorPreviewProps) {
  const contactLinks = [
    data.email && { href: `mailto:${data.email}`, icon: Mail, label: data.email },
    data.phone && { href: `tel:${data.phone}`, icon: Phone, label: data.phone },
    data.website && { href: normalizeUrl(data.website), icon: Globe, label: data.website },
    data.instagram && { href: normalizeUrl(`instagram.com/${data.instagram.replace(/^@/, "")}`), icon: Instagram, label: data.instagram },
    data.linkedin && { href: normalizeUrl(data.linkedin), icon: Linkedin, label: data.linkedin },
    data.github && { href: normalizeUrl(data.github), icon: Github, label: data.github },
  ].filter(Boolean) as { href: string; icon: typeof Mail; label: string }[]

  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-3 md:p-4">
      <div className="rounded-xl bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#0808c1] to-[#0808c1]/80 px-6 py-10 md:px-10 md:py-14 text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#fff45c]/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <motion.h2
            key={data.fullName}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white relative"
          >
            {data.fullName || "Adınız Soyadınız"}
          </motion.h2>
          <p className="text-[#fff45c] font-medium mt-2 relative">{data.title || "Peşə / Başlıq"}</p>
          <p className="text-white/80 max-w-xl mx-auto mt-4 text-sm md:text-base relative">
            {data.bio || "Özünüz haqqında qısa bir bio buraya yazılacaq."}
          </p>
        </div>

        <div className="p-6 md:p-10 space-y-10">
          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#0808c1] mb-3">Bacarıqlar</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#fff45c]/20 text-[#0808c1] rounded-full text-sm font-medium"
                  >
                    <Tag size={12} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#0808c1] mb-3">Layihələr</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.projects.map((project, index) => {
                  const card = (
                    <div className="group h-full bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#0808c1]/30 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{project.title || "Layihə adı"}</h4>
                        {project.link && (
                          <ExternalLink size={16} className="text-[#0808c1] opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{project.description || "Layihə haqqında qısa məlumat"}</p>
                    </div>
                  )
                  return project.link ? (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                      {card}
                    </a>
                  ) : (
                    <div key={index}>{card}</div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Contact */}
          {contactLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#0808c1] mb-3">Əlaqə</h3>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#0808c1] hover:text-white transition-colors text-sm"
                  >
                    <Icon size={16} />
                    <span className="max-w-[160px] truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {data.skills.length === 0 && data.projects.length === 0 && contactLinks.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-6">
              Formu doldurduqca canlı önizləmə burada görünəcək.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
