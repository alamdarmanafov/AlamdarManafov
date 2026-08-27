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
      image: "/img/portfolio/1.svg",
      category: "Branding",
      link: "https://bepositive.az",
      technologies: ["Social Media", "Branding", "Marketing"]
    },
    {
      id: "2",
      title: "Be Positive Life Planner",
      description: "Plan your day. Stay focused. Feel positive. Now with gamified challenges for students.",
      image: "/img/portfolio/2.svg",
      category: "SaaS",
      link: "https://bepositive.cc",
      technologies: ["SaaS", "Planner", "Productivity", "Gamification"]
    },
    {
      id: "3",
      title: "Consultation",
      description: "Business and Marketing consultation services",
      image: "/img/portfolio/3.svg",
      category: "Services",
      link: "https://wa.me/994105310129",
      technologies: ["Consultation", "Social Media", "Business"]
    }
  ],
  az: [
    {
      id: "1",
      title: "BePositive.az",
      description: "Reklam Agentliyi",
      image: "/img/portfolio/1.svg",
      category: "Agentlik",
      link: "https://bepositive.az",
      technologies: ["Sosial Media", "Brendinq", "Marketinq"]
    },
    {
      id: "2",
      title: "Be Positive Life Planner",
      description: "Gününü planlaşdır. Fokuslan. Pozitiv qal. İndi şagirdlər üçün oyunlaşdırma (gamification) sistemi ilə.",
      image: "/img/portfolio/2.svg",
      category: "SaaS",
      link: "https://bepositive.cc",
      technologies: ["SaaS", "Planner", "Productivity", "Gamification"]
    },
    {
      id: "3",
      title: "Konsultasiya",
      description: "Biznes və Marketinq üzrə konsultasiya xidmətləri",
      image: "/img/portfolio/3.svg",
      category: "Xidmət",
      link: "https://wa.me/994105310129",
      technologies: ["Konsultasiya", "Sosial Media", "biznes"]
    }
  ]
} 