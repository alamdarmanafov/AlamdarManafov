import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alamdarmanafov.com"),
  title: "Alamdar Manafov | Business Developer & Marketing Consultant",
  description:
    "Portfolio of Alamdar Manafov - 10+ years Business Developer & Marketing Consultant | Founder of Be Positive Life Planner.",
  keywords: [
    "Alamdar Manafov",
    "Ələmdar Manafov",
    "Business Developer",
    "Marketing Consultant",
    "Marketinq konsultant",
    "Marketinq Mütəxəssisi",
    "Marketing Strategist",
    "Branding & Digital Expert",
    "Social media advisor",
    "Marketinq və brendinq mütəxəssisi",
    "Digital Experiences",
    "sosial media məsləhətçisi",
    "smm",
    "Blogger",
    "researcher",
    "sloqan bepositive",
    "blogger",
    "marketinq expert",
    "marketinq konsultant",
    "be positive advertising agency",
    "be positive life planner",
    "bepositive.az",
    "rəqəmsal marketinq agentliyi",
    "sosial media idarəetməsi",
    "brendinq və dizayn",
    "smm mütəxəssis",
    "reels çəkilişi və montaj",
    "kontent yaradılması",
    "reklam planlaması",
    "influencer marketing",
    "biznes üçün sosial media",
    "kiçik biznes üçün marketing",
    "brend tanıtımı xidmətləri",
    "satış artıran reklam",
    "reklam xidməti",
    "marketing agency",
    "digital marketing",
    "brendinq agentliyi",
    "sosial media reklamı",
    "kInstagram reels çəkilişi",
    "sosial media strategiyası",
    "instagram reklam",
    "tiktok reklam",
    "facebook reklam",
    "meta reklam",
    "google reklam",
    "seo analiz",
    "seo anlysis",
    "website develop",
    "marketing specialist",
    "social media strategist",
    "digital marketing expert",
    "brand strategistm",
    "content creator",
    "rəqəmsal marketinq mütəxəssisi",
    "sosial media təlimçi",
    "smm mentor",
    "smm təlim",
    "rəqəmsal marketinq təlimləri",
    "sosial media kursları",
    "Be Positive founder",
    "kreativ sahibkar",
    "be pozitiv brend hekayəsi",
    "motivational speaker",
    "personal brand strategist ",
    "rəqəmsal brend qurucusu",
    "content marketing expert",
    "məzmun yaradıcısı",
    "digital marketing consultant",
    "social media growth expert",
    "creative marketing solutions",
    "biznes üçün kontent istehsalı",
    "social media ads specialist",
    "SMM masterclass",
    "marketing mentor",
    "digital marketing trainer",
    "marketing manager",
    "rəqəmsal reklam təlimi",
    "Azerbaijani marketing expert",
    "international marketing consultant",
  ],

  openGraph: {
    title: "Alamdar Manafov | Business Developer & Marketing Consultant",
    description:
      "Portfolio of Alamdar Manafov - 10+ years Business Developer & Marketing Consultant | Founder of Be Positive Life Planner.",
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
    title: "Alamdar Manafov | Business Developer & Marketing Consultant",
    description:
      "Portfolio of Alamdar Manafov - 10+ years Business Developer & Marketing Consultant | Founder of Be Positive Life Planner.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <meta
        name="google-site-verification"
        content="IJd1OCh-NJK06OntLoHZnRBRSaxs76r326aLETi329c"
      />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
