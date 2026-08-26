import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alamdarmanafov.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://alamdarmanafov.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `https://alamdarmanafov.com/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
