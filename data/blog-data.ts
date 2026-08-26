export type BlogPost = {
  id: string;
  slug: string;
  title: { en: string; az: string };
  excerpt: { en: string; az: string };
  content: { en: string; az: string };
  image: string;
  category: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog_1",
    slug: "what-is-spam-on-social-media",
    title: {
      en: "What is spam on Social Media?",
      az: "Sosial mediyada spam nədir?",
    },
    excerpt: {
      en: "Understanding how social platforms detect spam behavior — and how to avoid losing access to your account.",
      az: "Sosial platformaların spam davranışını necə aşkarladığını və hesabınıza girişi itirməməyi öyrənin.",
    },
    content: {
      en: "Spam - translated from English to Azerbaijani, it is translated as a word of prohibition and limitation. For example, you cannot do something continuously too much, and if you do, it is considered spam. Unfortunately, nowadays, people who have knowledge on this topic do not inform people. As Alamdar Manafov, I constantly make videos on this topic every year on social networks and explain it, but I thought that I would write it as an article so that more people can get this information and some scammers do not scam you with the sentence 'we are removing your account from spam.'\n\nSocial networks are controlled by bots, that is, robots, and unfortunately, when you make a mistake, it does not forgive you. It is very important what mistake you make here — for example, the bot remembers that one person can write 3-4 comments with their own thoughts in one minute, but if you write a smiley in the comment or like every post on 5-10 pages in one minute, the bot understands that a person cannot do this and is a bot, and then it does not allow you to write a comment for 24 hours. This applies to all actions taken on social networks in general, such as following, liking, and other actions.\n\nIf you receive such a message that you cannot write a comment according to the Community Rules, just do nothing and wait 24 hours. If you have any questions, you can write to me on Instagram @alamdarmanafov.",
      az: "Spam — İngilis dilindən Azərbaycan dilinə tərcümədə qadağan və məhdudiyyət sözü kimi tərcümə olunur. Məsələn, bir şeyi davamlı olaraq həddindən artıq çox edə bilməzsiniz və əgər etsəniz, bu spam hesab olunur. Təəssüf ki, bu mövzuda məlumatı olan insanlar bunu digərləri ilə paylaşmırlar. Ələmdar Manafov olaraq, mən hər il sosial şəbəkələrdə bu mövzuda videolar çəkib izah edirəm, amma düşündüm ki, bunu məqalə kimi də yazım ki, daha çox insan bu məlumatı əldə edə bilsin.\n\nSosial şəbəkələr botlar tərəfindən idarə olunur və səhv etdiyiniz zaman sizi bağışlamır. Burada hansı səhvi etdiyiniz çox vacibdir — məsələn, bot xatırlayır ki, bir nəfər bir dəqiqə ərzində öz düşüncələri ilə 3-4 şərh yaza bilər, amma siz 5-10 səhifədə hər paylaşıma bir dəqiqə ərzində smaylik yazır və ya bəyənirsinizsə, bot bunun insan deyil, bot davranışı olduğunu anlayır və 24 saat şərh yazmağa icazə vermir.\n\nƏgər İcma Qaydalarına görə şərh yaza bilmədiyiniz barədə mesaj alsanız, sadəcə 24 saat gözləyin. Sualınız varsa, İnstaqramda @alamdarmanafov ünvanına yaza bilərsiniz.",
    },
    image: "/img/blog/blog1.jpg",
    category: ["social media", "spam"],
  },
  {
    id: "blog_2",
    slug: "how-to-increase-followers",
    title: {
      en: "How to Increase Followers?",
      az: "İzləyiciləri necə artırmaq olar?",
    },
    excerpt: {
      en: "Growing an audience isn't about chasing numbers — it's about consistent, relevant content people can rely on.",
      az: "Auditoriya artırmaq rəqəm qovmaq deyil — insanların etibar etdiyi ardıcıl, aktual kontent yaratmaqdır.",
    },
    content: {
      en: "I am often asked this question: how to increase the number of followers. Everyone wants to be recognized and famous, but the main thing is to do quality work. This issue comes up during meetings with individuals and companies, and we always mention that we investigate the demand for a brand in society, and then decide which questions we should answer through content.\n\nThe word 'audience' is often confused with 'customer' — it isn't the same. The audience simply looks at you and tries to understand you. When they believe in you, they can become customers, and that's why you should talk about the services you provide so people get to know you and later become customers.\n\nThe algorithm social networks use around followers works roughly like this: users are active or passive — those who use social media more than 5-8 hours a day, and those who use it a maximum of 1-2 hours a day. We should always provide information in advance on the page we manage, so people can memorize our posting rhythm, almost like a multiplication table.\n\nIncrease followers in a healthy way, and most importantly, post weekly and monthly without a break. After at least a year, you will see the number of followers on your page has grown, and people will already recognize you when you walk around the city. If you have any questions, you can write to me on Instagram @alamdarmanafov.",
      az: "Mənə tez-tez bu sual verilir: izləyici sayını necə artırmaq olar. Hər kəs tanınmaq və məşhur olmaq istəyir, amma əsas məsələ keyfiyyətli iş görməkdir. Bu məsələ fərdlər və şirkətlərlə görüşlər zamanı qaldırılır və biz həmişə qeyd edirik ki, cəmiyyətdə brendə olan tələbatı araşdırırıq və sonra hansı suallara kontent vasitəsilə cavab verməli olduğumuzu müəyyən edirik.\n\n'Auditoriya' sözü tez-tez 'müştəri' sözü ilə qarışdırılır — bunlar eyni deyil. Auditoriya sadəcə sizə baxır və sizi anlamağa çalışır. Sizə inandıqda müştəri ola bilərlər, buna görə də təqdim etdiyiniz xidmətlər haqqında danışmalısınız ki, insanlar sizi tanısın və sonradan müştəri olsun.\n\nSosial şəbəkələrin izləyicilərlə bağlı istifadə etdiyi alqoritm belədir: istifadəçilər aktiv və passivdir — gündə 5-8 saatdan çox istifadə edənlər və gündə maksimum 1-2 saat istifadə edənlər. İdarə etdiyimiz səhifədə həmişə əvvəlcədən məlumat verməliyik ki, insanlar bizim paylaşım ritmimizi əzbərləyə bilsin.\n\nİzləyicilərinizi sağlam şəkildə artırın və ən əsası, fasiləsiz həftəlik və aylıq paylaşımlar edin. Ən azı bir ildən sonra səhifənizdəki izləyici sayının artdığını və şəhərdə gəzərkən insanların artıq sizi tanıdığını görəcəksiniz. Sualınız varsa, İnstaqramda @alamdarmanafov ünvanına yaza bilərsiniz.",
    },
    image: "/img/blog/blog2.jpg",
    category: ["social media", "growth"],
  },
  {
    id: "blog_3",
    slug: "why-should-we-advertise",
    title: {
      en: "Why Should We Advertise?",
      az: "Niyə reklam verməliyik?",
    },
    excerpt: {
      en: "Advertising isn't just about direct sales — it's about staying top of mind so people choose you when they're ready.",
      az: "Reklam yalnız birbaşa satış üçün deyil — insanlar hazır olduqda sizi seçsin deyə, daim yadda qalmaq üçündür.",
    },
    content: {
      en: "The word advertising simply means to show and promote. Let me explain: not everyone likes all your clothes or accessories when you go to work every day, but sometimes someone says a particular outfit suits you very well. The issue isn't about the clothes — it's simply about people's reaction to what's being shown. That's why, when you advertise any post on social media, you should try to get more comments and likes on that post so the advertising effect is strong.\n\nLet's take big companies as an example. Have you noticed that when they run an advertisement, they often make simple videos? Of course, they spend a lot of money on that ad to make it more attractive, but they aren't necessarily expecting a huge audience spike — they're making sure more people in the country simply know the product exists. That awareness alone won't cover advertising costs through direct sales, but it builds long-term recognition.\n\nThere's a saying in world practice that 15-30% of monthly income should be allocated to advertising. Why? Advertising keeps you constantly on the agenda. Think of it like daily breakfast — people rarely feel hungry right when they wake up, but they eat anyway so they don't run out of energy later. Advertising works the same way: when you advertise monthly, people remember you, so when they need a marketing consultant, they think of you first. If you don't advertise, someone else will reach your audience before you do, and you'll lose customers. If you have any questions, you can write to me on Instagram @alamdarmanafov.",
      az: "Reklam sözü sadəcə göstərmək və tanıtmaq deməkdir. İzah edim: hər gün işə gedəndə hamı bütün geyimlərinizi bəyənmir, amma bəzən kimsə deyir ki, bu geyim sizə çox yaraşır. Məsələ geyimdə deyil, sadəcə insanların göstərilənə reaksiyasındadır. Buna görə də, sosial şəbəkədə hər hansı paylaşımı reklam edərkən, reklam effektinin güclü olması üçün daha çox şərh və bəyənmə toplamağa çalışın.\n\nBöyük şirkətləri nümunə götürək. Görmüsünüzmü ki, reklam verərkən çox vaxt sadə videolar çəkirlər? Əlbəttə, onlar bu reklamı daha cəlbedici etmək üçün pul xərcləyirlər, amma məqsəd həmişə auditoriyanın kəskin artması deyil — sadəcə ölkədə daha çox insanın həmin məhsulun mövcudluğunu bilməsidir. Bu tanınma birbaşa satışla reklam xərclərini ödəməyə bilər, amma uzunmüddətli tanınma yaradır.\n\nDünya praktikasında aylıq gəlirin 15-30%-nin reklama ayrılması tövsiyə olunur. Niyə? Reklam sizi daim gündəmdə saxlayır. Bunu gündəlik səhər yeməyi kimi düşünün — insanlar oyanan kimi ac olmurlar, amma sonradan enerjisiz qalmamaq üçün yeyirlər. Reklam da eynidir: aylıq reklam verdikdə insanlar sizi xatırlayır və marketinq məsləhətçisinə ehtiyac duyduqda ilk sizi düşünürlər. Reklam verməsəniz, başqası sizdən əvvəl auditoriyaya çatacaq və siz müştəri itirəcəksiniz. Sualınız varsa, İnstaqramda @alamdarmanafov ünvanına yaza bilərsiniz.",
    },
    image: "/img/blog/blog3.jpg",
    category: ["social media", "advertising"],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
