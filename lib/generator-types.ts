import { z } from "zod"

export const projectSchema = z.object({
  title: z.string().min(1, "Layihə adı tələb olunur"),
  description: z.string().min(1, "Qısa təsvir tələb olunur"),
  link: z.string().trim().url("Düzgün link daxil edin").optional().or(z.literal("")),
})

export const generatorSchema = z.object({
  fullName: z.string().min(1, "Ad Soyad tələb olunur"),
  title: z.string().min(1, "Peşə / başlıq tələb olunur"),
  bio: z.string().min(1, "Qısa bio tələb olunur").max(600, "Bio 600 simvoldan çox ola bilməz"),
  skills: z.array(z.string().min(1)).default([]),
  projects: z.array(projectSchema).default([]),
  email: z.string().trim().email("Düzgün email daxil edin").optional().or(z.literal("")),
  phone: z.string().optional(),
  website: z.string().trim().url("Düzgün link daxil edin").optional().or(z.literal("")),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
})

export type Project = z.infer<typeof projectSchema>
export type GeneratorData = z.infer<typeof generatorSchema>

export const emptyGeneratorData: GeneratorData = {
  fullName: "",
  title: "",
  bio: "",
  skills: [],
  projects: [],
  email: "",
  phone: "",
  website: "",
  instagram: "",
  linkedin: "",
  github: "",
}
