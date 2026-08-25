"use client"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { staticData } from "@/data/static"

export default function DocumentTitle() {
  const { language } = useLanguage()

  useEffect(() => {
    document.title = staticData[language].meta.title
  }, [language])

  return null
}
