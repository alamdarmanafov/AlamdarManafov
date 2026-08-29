import type { MetadataRoute } from "next"

const baseUrl = "https://www.alamdarmanafov.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${baseUrl}/en`,
    az: `${baseUrl}/az`,
  }

  return [
    {
      url: languages.en,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: languages.az,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
  ]
}
