import hero1 from "@/src/shared/assets/hero1.jpg";
import hero2 from "@/src/shared/assets/hero2.jpg";
import heroMarket from "@/src/shared/assets/heroMarket.png";
import type { Slide } from "../types/slide";

export const getSlides = (): Slide[] => [
  {
    id: 1,
    badge: "Mentorlik",
    title: "Yangi",
    mentor: "texnologiya",
    description: "Kuchli mentorlar va amaliy loyihalar bilan kelajak kasbingizni o‘rganing.",
    image: hero1,
    rating: "4.9",
  },
  {
    id: 2,
    badge: "Karyera",
    title: "Ro’yhatdan",
    mentor: "o‘ting",
    description: "Zamonaviy bilimlarni olib, o‘zingizga mos yo‘nalishni tanlang.",
    image: hero2,
    rating: "4.9",
  },
  {
    id: 3,
    badge: "Market",
    title: "Biznes",
    mentor: "bozori",
    description: "Onlayn savdo va marketing ko‘nikmalarini real misollar orqali egallang.",
    image: heroMarket,
    rating: "4.9",
  },
];
