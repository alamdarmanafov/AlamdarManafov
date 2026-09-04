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
      title: "YouTube podcast",
      description: "YouTube podcast",
      image: "/img/podcast/youtube.jpg",
      type: "Podcast",
      date: "May 15, 2024",
      url: "https://www.youtube.com/playlist?list=PLBsQ42RZykVN5JwvrXN07vVhjTvVB9uRX",
    },
    {
      id: 2,
      title: "Spotify podcast",
      description: "Spotify podcast.",
      image: "/img/podcast/spotify.png",
      type: "Podcast",
      date: "April 22, 2024",
      url: "https://open.spotify.com/show/4c675tz3FGAWn6P84OVWSZ?si=a281e82cfc5942c5",
    },
    {
      id: 3,
      title: "Apple podcast",
      description: "Apple podcast.",
      image: "/img/podcast/apple-podcasts.png",
      type: "Podcast",
      date: "March 10, 2024",
      url: "https://podcasts.apple.com/az/podcast/%C9%99l%C9%99mdar-manafov/id1698599220",
    },
  ],
  az: [
    {
      id: 1,
      title: "Youtube podcast",
      description: "Youtube podcast.",
      image: "/img/podcast/youtube.jpg",
      type: "Podcast",
      date: "15 May 2024",
      url: "https://www.youtube.com/playlist?list=PLBsQ42RZykVN5JwvrXN07vVhjTvVB9uRX",
    },
    {
      id: 2,
      title: "Spotify podcast",
      description: "Spotify podcast.",
      image: "/img/podcast/spotify.png",
      type: "Podcast",
      date: "22 Aprel 2024",
      url: "https://open.spotify.com/show/4c675tz3FGAWn6P84OVWSZ?si=a281e82cfc5942c5",
    },
    {
      id: 3,
      title: "Apple podcast",
      description: "Apple podcast.",
      image: "/img/podcast/apple-podcasts.png",
      type: "Podcast",
      date: "10 Mart 2024",
      url: "https://podcasts.apple.com/az/podcast/%C9%99l%C9%99mdar-manafov/id1698599220",
    },
  ]
}
