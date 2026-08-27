export type Testimonial = {
  id: string;
  name: string;
  role: { en: string; az: string };
  text: { en: string; az: string };
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "review_4",
    name: "Colibri Express",
    role: { en: "Client", az: "Müştəri" },
    text: {
      en: "Working with Alamdar, our sales grew by 22%, our new customer base increased by 15%, and we won back 10% of previously lost customers.",
      az: "Ələmdarla əməkdaşlıqdan sonra satışlarımız 22%, yeni müştəri bazamız 15% artdı və itirilmiş müştərilərimizin 10%-i geri qayıtdı.",
    },
    avatar: "/img/brands/brand2.png",
  },
  {
    id: "review_5",
    name: "Push30",
    role: { en: "Ambassador Partnership", az: "Səfirlik Əməkdaşlığı" },
    text: {
      en: "The content and Reels Alamdar produced for us attracted 10 corporate companies interested in a partnership with Push30.",
      az: "Ələmdarın bizim üçün hazırladığı kontent və Reels-lər Push30 ilə əməkdaşlığa maraq göstərən 10 korporativ şirkəti cəlb etdi.",
    },
    avatar: "/img/brands/brand11.png",
  },
  {
    id: "review_6",
    name: "Apar",
    role: { en: "Client", az: "Müştəri" },
    text: {
      en: "The content and Reels campaign Alamdar ran for us brought in 100 new cyclists.",
      az: "Ələmdarın bizim üçün apardığı kontent və Reels kampaniyası 100 yeni velosiped sürücüsü qazandırdı.",
    },
    avatar: "/img/brands/brand5.png",
  },
];
