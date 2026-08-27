export interface MebelCollection {
  id: string
  title: string
  description: string
  icon: "sofa" | "bed" | "kitchen" | "office" | "kids" | "outdoor"
  itemCount: string
}

export interface MebelFeature {
  id: string
  title: string
  description: string
  icon: "shield" | "truck" | "palette" | "hammer"
}

export interface MebelTestimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
}

export interface MebelStat {
  id: string
  value: string
  label: string
}

export const mebelBrand = {
  name: "ARDIC Mebel",
  tagline: "Evinizin xarakterini tamamlayan mebel",
  description:
    "Massiv ağacdan hazırlanan, fərdi ölçüyə uyğunlaşdırılan və Bakıda əl işi ilə istehsal olunan mebel kolleksiyaları.",
  phone: "+994 12 000 00 00",
  whatsapp: "994120000000",
  email: "info@ardicmebel.az",
  address: "Zığ yolu 15, Bakı, Azərbaycan",
  workHours: "B.e - Şənbə: 10:00 - 19:00",
}

export const mebelStats: MebelStat[] = [
  { id: "1", value: "12+", label: "İl təcrübə" },
  { id: "2", value: "3200+", label: "Məmnun müştəri" },
  { id: "3", value: "850+", label: "Tamamlanmış layihə" },
  { id: "4", value: "40+", label: "Peşəkar usta" },
]

export const mebelCollections: MebelCollection[] = [
  {
    id: "1",
    title: "Oturma otağı",
    description: "Divan dəstləri, kreslolar və jurnal masaları",
    icon: "sofa",
    itemCount: "48 model",
  },
  {
    id: "2",
    title: "Yataq otağı",
    description: "Çarpayı, şkaf və gecə dolabı dəstləri",
    icon: "bed",
    itemCount: "36 model",
  },
  {
    id: "3",
    title: "Mətbəx mebeli",
    description: "Mətbəx dəstləri, masa və stul kolleksiyaları",
    icon: "kitchen",
    itemCount: "29 model",
  },
  {
    id: "4",
    title: "Ofis mebeli",
    description: "İş masaları, kitab şkafları və oturacaqlar",
    icon: "office",
    itemCount: "22 model",
  },
  {
    id: "5",
    title: "Uşaq otağı",
    description: "Təhlükəsiz və rəngarəng uşaq mebel dəstləri",
    icon: "kids",
    itemCount: "18 model",
  },
  {
    id: "6",
    title: "Bağ və teras",
    description: "Açıq hava üçün davamlı mebel həlləri",
    icon: "outdoor",
    itemCount: "15 model",
  },
]

export const mebelFeatures: MebelFeature[] = [
  {
    id: "1",
    title: "5 il zəmanət",
    description: "Bütün məhsullarımıza uzunmüddətli keyfiyyət zəmanəti veririk",
    icon: "shield",
  },
  {
    id: "2",
    title: "Pulsuz çatdırılma",
    description: "Bakı daxilində pulsuz çatdırılma və quraşdırma xidməti",
    icon: "truck",
  },
  {
    id: "3",
    title: "Fərdi dizayn",
    description: "Ölçü və rəngi tamamilə sizin otağınıza uyğunlaşdırırıq",
    icon: "palette",
  },
  {
    id: "4",
    title: "Əl işi ustalıq",
    description: "Massiv ağacdan, təcrübəli ustalar tərəfindən hazırlanır",
    icon: "hammer",
  },
]

export const mebelTestimonials: MebelTestimonial[] = [
  {
    id: "1",
    name: "Nərmin Əliyeva",
    role: "Yasamal, Bakı",
    quote:
      "Mətbəx mebelimizi ARDIC-də sifariş etdik, nəticə gözlədiyimizdən də gözəl oldu. Ölçülər dəqiq, materialın keyfiyyəti yüksəkdir.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rəşad Hüseynov",
    role: "Xətai, Bakı",
    quote:
      "Ofis üçün sifariş etdiyimiz iş masaları həm zərif görünür, həm də çox davamlıdır. Çatdırılma da vaxtında oldu.",
    rating: 5,
  },
  {
    id: "3",
    name: "Günel Məmmədova",
    role: "Nərimanov, Bakı",
    quote:
      "Uşaq otağı üçün fərdi dizayn təklif etdilər, nəticə uşağımın çox xoşuna gəldi. Peşəkar və mehriban komanda.",
    rating: 5,
  },
]
