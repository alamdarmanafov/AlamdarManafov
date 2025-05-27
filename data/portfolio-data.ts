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
      image: "/img/portfolio/bepositive.jpg",
      category: "Branding",
      link: "https://bepositive.az",
      technologies: ["Social Media", "Branding", "Marketing"]
    },
    {
      id: "2",
      title: "Why #BePositive",
      description: "Book project and marketing strategy",
      image: "/img/portfolio/book.jpg",
      category: "Publishing",
      link: "https://novella.az/kitab/niye-bepositive",
      technologies: ["Book", "Marketing", "Strategy"]
    },
    {
      id: "3",
      title: "Social Media Trainings",
      description: "Social media trainings and seminars",
      image: "/img/portfolio/training.jpg",
      category: "Education",
      link: "https://wa.me/994105310129",
      technologies: ["Training", "Social Media", "Education"]
    }
  ],
  az: [
    {
      id: "1",
      title: "BePositive.az",
      description: "Reklam Agentliyi",
      image: "/img/portfolio/bepositive.jpg",
      category: "Agentlik",
      link: "https://bepositive.az",
      technologies: ["Sosial Media", "Brendinq", "Marketinq"]
    },
    {
      id: "2",
      title: "Niyə görə #BePositive",
      description: "Kitab layihəsi və marketinq strategiyası",
      image: "/img/portfolio/book.jpg",
      category: "Nəşriyyat",
      link: "https://novella.az/kitab/niye-bepositive",
      technologies: ["Kitab", "Marketinq", "Strategiya"]
    },
    {
      id: "3",
      title: "Sosial Media Təlimləri",
      description: "Sosial media üzrə təlimlər və seminarlar",
      image: "/img/portfolio/training.jpg",
      category: "Təhsil",
      link: "https://wa.me/994105310129",
      technologies: ["Təlim", "Sosial Media", "Təhsil"]
    }
  ]
} 