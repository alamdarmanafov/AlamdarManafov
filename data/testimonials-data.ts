export type Testimonial = {
  id: string;
  name: string;
  role: { en: string; az: string };
  text: { en: string; az: string };
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "review_1",
    name: "Xanim İlhamqizi",
    role: { en: "CEO of Novella Book Center", az: "Novella Kitab Mərkəzinin Direktoru" },
    text: {
      en: "After working with Alamdar, we saw a noticeable increase in our sales. He developed a special visual concept and social media strategy for our store. Each campaign was both creative and sales-oriented.",
      az: "Ələmdarla əməkdaşlıqdan sonra satışlarımızda gözlə görülən artım oldu. O, mağazamız üçün xüsusi vizual konsept və sosial media strategiyası hazırladı. Hər kampaniya həm yaradıcı, həm də satış yönümlü idi.",
    },
    avatar: "/img/testimonials/novella.jpeg",
  },
  {
    id: "review_2",
    name: "Murshud Mehdi",
    role: { en: "Author", az: "Yazıçı" },
    text: {
      en: "I collaborated with Alamdar to sell and promote my book. The branding, advertising, and content creation processes were carried out professionally and in a planned manner. Thanks to the right strategy, my book's online visibility increased and a stronger connection with readers was established.",
      az: "Kitabımın satışı və tanıdılması üçün Ələmdarla əməkdaşlıq etdim. Brendinq, reklam və kontent yaradılması prosesləri peşəkar və planlı şəkildə həyata keçirildi. Düzgün strategiya sayəsində kitabımın onlayn görünürlüğü artdı və oxucularla daha güclü əlaqə quruldu.",
    },
    avatar: "/img/testimonials/murshudmehdi.jpeg",
  },
  {
    id: "review_3",
    name: "Ali Javadov",
    role: { en: "CEO of Clife Agency", az: "Direktor / Clife Agency" },
    text: {
      en: "As a company providing digital solutions, our brand image is very important to us. Alamdar developed professional branding, content and advertising campaigns for us. As a result, we increased the number of both local and international customers.",
      az: "Rəqəmsal həllər təqdim edən bir şirkət olaraq brend imicimiz bizim üçün çox önəmlidir. Ələmdar bizim üçün peşəkar brendinq, kontent və reklam kampaniyaları hazırladı. Nəticədə həm yerli, həm də xarici müştəri sayımız artdı.",
    },
    avatar: "/img/testimonials/clife.png",
  },
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
