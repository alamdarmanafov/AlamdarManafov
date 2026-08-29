import { NextResponse, type NextRequest } from "next/server"

const locales = ["en", "az"] as const
const defaultLocale = "en"

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || ""
  if (acceptLanguage.toLowerCase().includes("az")) return "az"
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocalePrefix) return NextResponse.next()

  const locale = pathname === "/" ? detectLocale(request) : defaultLocale
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
