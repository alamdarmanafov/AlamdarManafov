import type React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { seoData, type Locale } from "@/data/seo-data";

const inter = Inter({ subsets: ["latin"] });

const locales: Locale[] = ["en", "az"];
const baseUrl = "https://www.alamdarmanafov.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = (locales as string[]).includes(rawLocale)
    ? (rawLocale as Locale)
    : "en";
  const seo = seoData[locale];
  const canonical = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en`,
        az: `${baseUrl}/az`,
        "x-default": `${baseUrl}/en`,
      },
    },
    verification: {
      google: "IJd1OCh-NJK06OntLoHZnRBRSaxs76r326aLETi329c",
    },
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords as unknown as string[],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Alamdar Manafov Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Alamdar Manafov Portfolio",
        },
      ],
      locale: seo.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    generator: "v0.dev",
  };
}

function personJsonLd(locale: Locale) {
  const seo = seoData[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alamdar Manafov",
    alternateName: "Ələmdar Manafov",
    url: `${baseUrl}/en`,
    image: `${baseUrl}/img/AlemdarManafovPerson.jpg`,
    jobTitle: "Business Developer & Marketing Consultant",
    description: seo.personDescription,
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
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!(locales as string[]).includes(rawLocale)) {
    notFound();
  }
  const locale = rawLocale as Locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd(locale)),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider initialLanguage={locale}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
