"use client"

import { useEffect, useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Plus, Trash2, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { generatorSchema, type GeneratorData } from "@/lib/generator-types"

interface GeneratorFormProps {
  defaultValues: GeneratorData
  onChange: (data: GeneratorData) => void
}

function FormSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-bold text-[#0808c1] mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-500 mb-5">{description}</p>}
      <div className="space-y-4">{children}</div>
    </motion.div>
  )
}

export default function GeneratorForm({ defaultValues, onChange }: GeneratorFormProps) {
  const form = useForm<GeneratorData>({
    resolver: zodResolver(generatorSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  })

  const [skillInput, setSkillInput] = useState("")
  const skills = form.watch("skills") ?? []

  useEffect(() => {
    const subscription = form.watch((value) => onChange(value as GeneratorData))
    return () => subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addSkill = () => {
    const trimmed = skillInput.trim()
    if (!trimmed || skills.includes(trimmed)) return
    form.setValue("skills", [...skills, trimmed], { shouldDirty: true })
    setSkillInput("")
  }

  const removeSkill = (skill: string) => {
    form.setValue(
      "skills",
      skills.filter((s) => s !== skill),
      { shouldDirty: true }
    )
  }

  const errors = form.formState.errors

  return (
    <div className="space-y-6">
      <FormSection title="Şəxsi məlumat" description="Portfolyonuzun başlığında görünəcək əsas məlumatlar">
        <div>
          <Label htmlFor="fullName">Ad Soyad</Label>
          <Input id="fullName" placeholder="Məs: Elvin Əliyev" {...form.register("fullName")} className="mt-1.5" />
          {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="title">Peşə / Başlıq</Label>
          <Input id="title" placeholder="Məs: Frontend Developer" {...form.register("title")} className="mt-1.5" />
          {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <Label htmlFor="bio">Qısa bio</Label>
          <Textarea
            id="bio"
            placeholder="Özünüz və işiniz haqqında bir neçə cümlə yazın"
            rows={4}
            {...form.register("bio")}
            className="mt-1.5"
          />
          {errors.bio && <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>}
        </div>
      </FormSection>

      <FormSection title="Bacarıqlar" description="Enter düyməsi ilə bacarıq əlavə edin">
        <div className="flex gap-2">
          <Input
            placeholder="Məs: React, Figma, SEO..."
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                addSkill()
              }
            }}
          />
          <Button type="button" onClick={addSkill} className="bg-[#0808c1] hover:bg-[#0606a0] shrink-0">
            <Plus size={18} />
          </Button>
        </div>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0808c1]/10 text-[#0808c1] rounded-full text-sm font-medium"
              >
                {skill}
                <button type="button" onClick={() => removeSkill(skill)} aria-label={`${skill} sil`}>
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </FormSection>

      <FormSection title="Layihələr" description="Ən uğurlu işlərinizi əlavə edin">
        <div className="space-y-5">
          {fields.map((field, index) => (
            <div key={field.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-3 relative">
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                aria-label="Layihəni sil"
              >
                <Trash2 size={16} />
              </button>
              <div>
                <Label>Layihə adı</Label>
                <Input
                  placeholder="Layihə adı"
                  {...form.register(`projects.${index}.title` as const)}
                  className="mt-1.5"
                />
                {errors.projects?.[index]?.title && (
                  <p className="text-sm text-red-500 mt-1">{errors.projects[index]?.title?.message}</p>
                )}
              </div>
              <div>
                <Label>Qısa təsvir</Label>
                <Textarea
                  placeholder="Layihə haqqında qısa məlumat"
                  rows={2}
                  {...form.register(`projects.${index}.description` as const)}
                  className="mt-1.5"
                />
                {errors.projects?.[index]?.description && (
                  <p className="text-sm text-red-500 mt-1">{errors.projects[index]?.description?.message}</p>
                )}
              </div>
              <div>
                <Label>Link (istəyə bağlı)</Label>
                <Input
                  placeholder="https://..."
                  {...form.register(`projects.${index}.link` as const)}
                  className="mt-1.5"
                />
                {errors.projects?.[index]?.link && (
                  <p className="text-sm text-red-500 mt-1">{errors.projects[index]?.link?.message}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => append({ title: "", description: "", link: "" })}
          className="w-full border-dashed border-[#0808c1]/40 text-[#0808c1] hover:bg-[#0808c1]/5"
        >
          <Plus size={16} className="mr-2" /> Layihə əlavə et
        </Button>
      </FormSection>

      <FormSection title="Əlaqə" description="İstəyə bağlı - istifadəçilərin sizinlə əlaqə saxlaması üçün">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="ad@nümunə.com" {...form.register("email")} className="mt-1.5" />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" placeholder="+994 XX XXX XX XX" {...form.register("phone")} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="website">Vebsayt</Label>
            <Input id="website" placeholder="https://..." {...form.register("website")} className="mt-1.5" />
            {errors.website && <p className="text-sm text-red-500 mt-1">{errors.website.message}</p>}
          </div>
          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input id="instagram" placeholder="@istifadəçi" {...form.register("instagram")} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input id="linkedin" placeholder="linkedin.com/in/..." {...form.register("linkedin")} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="github">GitHub</Label>
            <Input id="github" placeholder="github.com/..." {...form.register("github")} className="mt-1.5" />
          </div>
        </div>
      </FormSection>
    </div>
  )
}
