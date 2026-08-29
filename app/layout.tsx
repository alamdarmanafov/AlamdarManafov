import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alamdarmanafov.com"),
  alternates: {
    canonical: "https://www.alamdarmanafov.com",
  },
  title: "Alamdar Manafov | Business Developer & Marketing Consultant",
  description:
    "Portfolio of Alamdar Manafov - 10+ years Business Developer & Marketing Consultant | Founder of Be Positive Life Planner.",
  keywords: [
    "Alamdar Manafov",
    "Ələmdar Manafov",
    "Business Developer",
    "Marketing Consultant",
    "Marketing Specialist",
    "Marketing Strategist",
    "Branding & Digital Expert",
    "Social media advisor",
    "Marketing & Branding Specialist",
    "Digital Experiences",
    "smm",
    "Blogger",
    "researcher",
    "BePositive slogan",
    "marketing expert",
    "be positive advertising agency",
    "be positive life planner",
    "bepositive.az",
    "digital marketing agency",
    "social media management",
    "branding and design",
    "SMM specialist",
    "Reels production and editing",
    "content creation",
    "advertising planning",
    "influencer marketing",
    "social media for business",
    "marketing for small business",
    "brand promotion services",
    "sales-boosting advertising",
    "advertising services",
    "marketing agency",
    "digital marketing",
    "branding agency",
    "social media advertising",
    "Instagram Reels production",
    "social media strategy",
    "Instagram ads",
    "TikTok ads",
    "Facebook ads",
    "Meta ads",
    "Google ads",
    "SEO analysis",
    "website development",
    "marketing specialist",
    "social media strategist",
    "digital marketing expert",
    "brand strategist",
    "content creator",
    "digital marketing specialist",
    "social media trainer",
    "smm mentor",
    "SMM training",
    "digital marketing training",
    "social media courses",
    "Be Positive founder",
    "creative entrepreneur",
    "Be Positive brand story",
    "motivational speaker",
    "personal brand strategist",
    "digital brand builder",
    "content marketing expert",
    "digital marketing consultant",
    "social media growth expert",
    "creative marketing solutions",
    "content production for business",
    "social media ads specialist",
    "SMM masterclass",
    "marketing mentor",
    "digital marketing trainer",
    "marketing manager",
    "digital advertising training",
    "Azerbaijani marketing expert",
    "international marketing consultant",
  ],

  openGraph: {
    title: "Alamdar Manafov | Business Developer & Marketing Consultant",
    description:
      "Portfolio of Alamdar Manafov - 10+ years Business Developer & Marketing Consultant | Founder of Be Positive Life Planner.",
    url: "https://www.alamdarmanafov.com",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alamdar Manafov",
  alternateName: "Ələmdar Manafov",
  url: "https://www.alamdarmanafov.com",
  image: "https://www.alamdarmanafov.com/img/AlemdarManafovPerson.jpg",
  jobTitle: "Business Developer & Marketing Consultant",
  description:
    "Business Developer & Marketing Consultant with 10+ years of experience. Founder of Be Positive.",
  worksFor: {
    "@type": "Organization",
    name: "Be Positive",
    url: "https://bepositive.az",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Baku",
    addressCountry: "AZ",
  },
  sameAs: [
    "https://www.linkedin.com/in/alamdarmanafov/",
    "https://www.facebook.com/alamdarmanafov/",
    "https://www.instagram.com/alamdarmanafov/",
    "https://www.youtube.com/@alamdarmanafov",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <meta
        name="google-site-verification"
        content="IJd1OCh-NJK06OntLoHZnRBRSaxs76r326aLETi329c"
      />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
