export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  link: string
  technologies: string[]
}

export const portfolioData = {
  en: [
    {
      id: "1",
      title: "BePositive.az",
      description: "Social media marketing and branding company",
      image: "/img/portfolio/1.png",
      category: "Branding",
      link: "https://bepositive.az",
      technologies: ["Social Media", "Branding", "Marketing"]
    },
    {
      id: "2",
      title: "Be Positive Life Planner",
      description: "Plan your day.Stay focused.Feel positive.",
      image: "/img/portfolio/2.svg",
      category: "SaaS",
      link: "https://bepositive.cc",
      technologies: ["SaaS", "Planner", "Productivity"]
    },
    {
      id: "3",
      title: "Cheap Market",
      description: "Price comparison app that finds the cheapest grocery market near you",
      image: "/img/portfolio/cheapmarket.jpg",
      category: "E-commerce",
      link: "https://cheapmarket.az",
      technologies: ["E-commerce", "Mobile App", "Price Comparison"]
    }
  ],
  az: [
    {
      id: "1",
      title: "BePositive.az",
      description: "Reklam Agentliyi",
      image: "/img/portfolio/1.png",
      category: "Agentlik",
      link: "https://bepositive.az",
      technologies: ["Sosial Media", "Brendinq", "Marketinq"]
    },
    {
      id: "2",
      title: "Be Positive Life Planner",
      description: "Plan your day.Stay focused.Feel positive.",
      image: "/img/portfolio/2.svg",
      category: "SaaS",
      link: "https://bepositive.cc",
      technologies: ["SaaS", "Planner", "Productivity"]
    },
    {
      id: "3",
      title: "Cheap Market",
      description: "Marketlər arasında qiymətləri müqayisə edib ən sərfəli variantı tapan tətbiq",
      image: "/img/portfolio/cheapmarket.jpg",
      category: "E-ticarət",
      link: "https://cheapmarket.az",
      technologies: ["E-ticarət", "Mobil Tətbiq", "Qiymət Müqayisəsi"]
    }
  ]
} 