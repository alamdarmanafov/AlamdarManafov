import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alamdar Manafov | Business Developer & Marketing Consultant",
    short_name: "Alamdar Manafov",
    description:
      "Portfolio of Alamdar Manafov - 10+ years Business Developer & Marketing Consultant | Founder of Be Positive Life Planner.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0808c1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/img/Logo_Blue.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
