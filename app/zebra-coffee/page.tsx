import type { Metadata } from "next"
import ZebraCoffee from "@/components/zebra-coffee"

export const metadata: Metadata = {
  title: "Zebra Coffee | Portfolio Nümunəsi — Alamdar Manafov",
  description:
    "Bakıdakı Zebra Coffee üçün hazırlanmış dizayn nümunəsi — Alamdar Manafov portfolio layihəsi.",
}

export default function ZebraCoffeePage() {
  return <ZebraCoffee />
}
