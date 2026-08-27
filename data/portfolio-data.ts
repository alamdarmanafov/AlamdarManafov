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
      description: "Plan your day.Stay focused.Feel positive.",
      image: "/img/portfolio/2.svg",
      category: "SaaS",
      link: "https://bepositive.cc",
      technologies: ["SaaS", "Planner", "Productivity"]
    },
    {
      id: "3",
      title: "Consultation",
      description: "Business and Marketing consultation services",
      image: "/img/portfolio/3.svg",
      category: "Services",
      link: "https://wa.me/994105310129",
      technologies: ["Consultation", "Social Media", "Business"]
    },
    {
      id: "4",
      title: "ARDIC Mebel",
      description: "Sample portfolio website for a furniture company",
      image: "/img/portfolio/4.svg",
      category: "Web Design",
      link: "/mebel",
      technologies: ["Web Design", "Next.js", "Branding"]
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
      description: "Plan your day.Stay focused.Feel positive.",
      image: "/img/portfolio/2.svg",
      category: "SaaS",
      link: "https://bepositive.cc",
      technologies: ["SaaS", "Planner", "Productivity"]
    },
    {
      id: "3",
      title: "Konsultasiya",
      description: "Biznes və Marketinq üzrə konsultasiya xidmətləri",
      image: "/img/portfolio/3.svg",
      category: "Xidmət",
      link: "https://wa.me/994105310129",
      technologies: ["Konsultasiya", "Sosial Media", "biznes"]
    },
    {
      id: "4",
      title: "ARDIC Mebel",
      description: "Mebel şirkəti üçün nümunə portfolio sayt",
      image: "/img/portfolio/4.svg",
      category: "Veb Dizayn",
      link: "/mebel",
      technologies: ["Veb Dizayn", "Next.js", "Brendinq"]
    }
  ]
} 