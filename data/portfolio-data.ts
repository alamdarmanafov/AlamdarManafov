export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  link: string
  technologies: string[]
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "BePositive.az",
    description: "Sosial media marketinq və brendinq şirkəti",
    image: "/img/portfolio/bepositive.jpg",
    category: "Branding",
    link: "https://bepositive.az",
    technologies: ["Social Media", "Branding", "Marketing"]
  },
  {
    id: "2",
    title: "Niyə görə #BePositive",
    description: "Kitab layihəsi və marketinq strategiyası",
    image: "/img/portfolio/book.jpg",
    category: "Publishing",
    link: "https://bepositive.az/book",
    technologies: ["Book", "Marketing", "Strategy"]
  },
  {
    id: "3",
    title: "Sosial Media Training",
    description: "Sosial media üzrə təlim və seminarlar",
    image: "/img/portfolio/training.jpg",
    category: "Education",
    link: "https://bepositive.az/training",
    technologies: ["Training", "Social Media", "Education"]
  }
] 