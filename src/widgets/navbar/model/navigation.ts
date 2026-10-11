import type { NavItem } from "../types/navigation";

export const getNavigationItems = (): NavItem[] => [
  { key: "home", label: "Bosh sahifa", href: "/" },
  { key: "courses", label: "Kurslar", href: "/kurslar" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "contact", label: "Kontakt", href: "/contact" },
  { key: "simulator", label: "Simulator", href: "https://robo.myrobo.uz/", external: true },
];
