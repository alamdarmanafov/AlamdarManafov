export interface PodcastItem {
  id: number
  title: string
  description: string
  image: string
  type: string
  date: string
  url: string
}

export const podcastData = {
  en: [
    {
      id: 1,
      title: "The Future of Web Development",
      description: "Discussing the latest trends and technologies in web development.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Podcast",
      date: "May 15, 2023",
      url: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Creative Coding Workshop",
      description: "Learn how to create stunning visual effects with JavaScript.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Video",
      date: "April 22, 2023",
      url: "https://youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      description: "Exploring the fundamentals of creating user-friendly interfaces.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Webinar",
      date: "March 10, 2023",
      url: "https://youtube.com/watch?v=example3",
    },
    {
      id: 4,
      title: "Building Interactive Websites",
      description: "How to create engaging user experiences with modern web technologies.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Tutorial",
      date: "February 5, 2023",
      url: "https://youtube.com/watch?v=example4",
    },
    {
      id: 5,
      title: "The Art of Animation",
      description: "Creating smooth and meaningful animations for the web.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Podcast",
      date: "January 18, 2023",
      url: "https://youtube.com/watch?v=example5",
    },
  ],
  az: [
    {
      id: 1,
      title: "Veb İnkişafın Gələcəyi",
      description: "Veb inkişafdakı ən son trendlər və texnologiyalar haqqında müzakirə.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Podcast",
      date: "15 May 2023",
      url: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Yaradıcı Kodlaşdırma Seminarı",
      description: "JavaScript ilə gözəl vizual effektlər yaratmağı öyrənin.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Video",
      date: "22 Aprel 2023",
      url: "https://youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "UI/UX Dizayn Prinsipləri",
      description: "İstifadəçi dostu interfeyslər yaratmağın əsasları.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Webinar",
      date: "10 Mart 2023",
      url: "https://youtube.com/watch?v=example3",
    },
    {
      id: 4,
      title: "İnteraktiv Veb Sayt",
      description: "Müasir veb texnologiyaları ilə maraqlı istifadəçi təcrübələri yaratmaq.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Tutorial",
      date: "5 Fevral 2023",
      url: "https://youtube.com/watch?v=example4",
    },
    {
      id: 5,
      title: "Animasiya Sənəti",
      description: "Veb üçün səlis və mənalı animasiyalar yaratmaq.",
      image: "/placeholder.svg?height=200&width=350",
      type: "Podcast",
      date: "18 Yanvar 2023",
      url: "https://youtube.com/watch?v=example5",
    },
  ]
}
