# 🚀 Alamder Portfolio

Modern və interaktiv şəxsi portfolyo veb saytı. Next.js, TypeScript, Tailwind CSS və Framer Motion istifadə edilərək hazırlanmışdır.

## ✨ Xüsusiyyətlər

- 🎨 Modern və şık dizayn
- 📱 Tam responsive
- ⚡ Sürətli və optimizasiya edilmiş performans
- 🌈 Smooth animasiyalar
- 📬 Əlaqə forması
- 🎬 Podcast və media bölməsi
- 💼 Portfolyo qalereyası
- 🌐 Çoxdilli dəstək (Azərbaycan Türkcəsi)

## 🛠️ Texnologiyalar

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Tip təhlükəsizliyi
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animasiyalar
- [EmailJS](https://www.emailjs.com/) - Email inteqrasiyası
- [Swiper](https://swiperjs.com/) - Slider/Carousel
- [Lucide Icons](https://lucide.dev/) - İkonlar

## 🚀 Başlanğıc

### Tələblər

- Node.js 18.0.0 və ya daha yuxarı
- npm və ya yarn

### Quraşdırma

1. Reponu klonlayın:
```bash
git clone https://github.com/yourusername/alamder-portfolio.git
cd alamder-portfolio
```

2. Asılılıqları yükləyin:
```bash
npm install
# və ya
yarn install
```

3. İnkişaf serverini başladın:
```bash
npm run dev
# və ya
yarn dev
```

4. Brauzerinizdə [http://localhost:3000](http://localhost:3000) ünvanını açın.

## 📦 Layihə Strukturu

```
alamder-portfolio/
├── app/                # Next.js app router
├── components/         # React komponentləri
├── public/            # Statik fayllar
├── styles/            # Global stillər
└── data/              # Məlumat faylları
```

## 🔧 Konfiqurasiya

### EmailJS Parametrləri

1. [EmailJS](https://www.emailjs.com/)'də hesab yaradın
2. Email xidməti yaradın
3. Email şablonu yaradın
4. `.env.local` faylında aşağıdakı dəyişənləri tənzimləyin:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Xüsusiləşdirmə

### Rənglər

Tailwind konfiqurasiyasında əsas rəngləri dəyişdirə bilərsiniz:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0808c1',
        secondary: '#fff45c',
      },
    },
  },
}
```

### Məzmun

- Portfolyo layihələri: `data/portfolio-data.ts`
- Podcast və media: `data/podcast-data.ts`
- Əlaqə məlumatları: `components/contact.tsx`

## 📱 Responsive Dizayn

- 📱 Mobil: 320px və yuxarı
- 📱 Tablet: 768px və yuxarı
- 💻 Masaüstü: 1024px və yuxarı

## 🚀 Deployment

1. Layihəni build edin:
```bash
npm run build
# və ya
yarn build
```

2. Vercel, Netlify və ya başqa bir platformada deploy edin.

## 📝 Lisenziya

MIT Lisenziyası - Ətraflı məlumat üçün [LICENSE](LICENSE) faylına baxın.

## 👥 Əlaqə

- 🌐 Veb sayt: [alamder.com](https://alamder.com)
- 📧 Email: alamder@example.com
- 💼 LinkedIn: [Alamder](https://linkedin.com/in/alamder)
- 🐦 Twitter: [@alamder](https://twitter.com/alamder)

## 🙏 Təşəkkürlər

- [Next.js](https://nextjs.org/) komandasına
- [Tailwind CSS](https://tailwindcss.com/) komandasına
- [Framer Motion](https://www.framer.com/motion/) komandasına
- Və bütün açıq mənbə icmasına

---

⭐️ Bu layihəni bəyəndinizsə, ulduz verməyi unutmayın! 