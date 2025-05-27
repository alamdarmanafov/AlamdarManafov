import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alamdar Manafov | Digital Marketing Expert",
  description:
    "Portfolio of Alamdar Manafov - Creative developer building digital experiences that captivate and inspire.",
  keywords: ["Alamdar Manafov", "Digital Marketing Expert", "Social media advisor", "Portfolio", "Digital Experiences, sosial media məsləhətçisi, smm, blogger, researcher"],
  openGraph: {
    title: "Alamdar Manafov | Creative Developer",
    description:
      "Portfolio of Alamdar Manafov - Creative developer building digital experiences that captivate and inspire.",
    url: "https://alamdarmanafov.com",
    siteName: "Alamdar Manafov Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alamdar Manafov Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alamdar Manafov | Creative Developer",
    description:
      "Portfolio of Alamdar Manafov - Creative developer building digital experiences that captivate and inspire.",
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
