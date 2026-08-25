"use client"

import { useEffect, useState } from "react"
import { emptyGeneratorData, type GeneratorData } from "@/lib/generator-types"

const STORAGE_KEY = "portfolio-generator-draft"

export function useGeneratorStorage() {
  const [data, setData] = useState<GeneratorData>(emptyGeneratorData)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setData({ ...emptyGeneratorData, ...JSON.parse(raw) })
    } catch {
      // corrupted or inaccessible storage, start fresh
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // storage unavailable (private mode, quota) - draft just won't persist
    }
  }, [data, loaded])

  const reset = () => {
    setData(emptyGeneratorData)
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  return { data, setData, reset, loaded }
}
