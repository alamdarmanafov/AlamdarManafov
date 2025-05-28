import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ələmdar Manafov | Rəqəmsal Marketinq Eksperti",
  description:
    "Portfolio of Alamdar Manafov - 8+ years Marketing Strategist | Branding & Digital Expert | Founder of Be Positive Company.",
  keywords: ["Alamdar Manafov", "Ələmdar Manafov" , "Digital Marketing Expert", "Marketing Strategist" , "Branding & Digital Expert" , "Social media advisor", "Portfolio", "Digital Experiences","sosial media məsləhətçisi", "smm", "Blogger", "researcher"],
  openGraph: {
    title: "Ələmdar Manafov | Rəqəmsal Marketinq Eksperti",
    description:
      "Portfolio of Alamdar Manafov - 8+ years Marketing Strategist | Branding & Digital Expert | Founder of Be Positive Company.",
    url: "https://alamdarmanafov.com",
    siteName: "Ələmdar Manafov Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ələmdar Manafov Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ələmdar Manafov | Rəqəmsal Marketinq Eksperti",
    description:
      "Portfolio of Alamdar Manafov - 8+ years Marketing Strategist | Branding & Digital Expert | Founder of Be Positive Company.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
