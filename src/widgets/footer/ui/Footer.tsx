import Image from "next/image";
import Link from "next/link";
import facebook from "@/src/shared/assets/facebook.png";
import instagram from "@/src/shared/assets/instagram.png";
import logo from "@/src/shared/assets/logo3.png";
import telegram from "@/src/shared/assets/telegram.png";
import youtube from "@/src/shared/assets/youtube.png";

const platformLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/kurslar", label: "Kurslar" },
  { href: "/blog", label: "Maqolalar" },
];

const companyLinks = [
  { href: "/about", label: "Biz haqimizda" },
  { href: "/contact", label: "Bog‘lanish" },
  { href: "/subscription", label: "Foydalanish shartlari" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/myrobo.uz/",
    image: instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/myrobo.uz",
    image: facebook,
    label: "Facebook",
  },
  {
    href: "https://www.youtube.com/@myrobouz",
    image: youtube,
    label: "YouTube",
  },
  { href: "https://t.me/myrobouz", image: telegram, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white px-5 py-10 text-slate-700 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 max-w-sm lg:col-span-1">
          <Link
            href="/"
            aria-label="MyRobo bosh sahifa"
            className="mb-4 inline-flex"
          >
            <Image
              src={logo}
              alt="MyRobo"
              width={72}
              height={72}
              className="rounded-xl bg-white object-contain p-2 shadow-sm ring-1 ring-slate-200"
            />
          </Link>
          <p className="text-sm leading-6 text-slate-500">
            Kelajak kasblarini zamonaviy ta’lim va amaliy loyihalar orqali
            o‘rganing.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
            Platforma
          </h2>
          <ul className="space-y-3 text-sm">
            {platformLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
            Qo‘shimcha
          </h2>
          <ul className="space-y-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
            Bizni kuzating
          </h2>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm"
              >
                <Image
                  src={social.image}
                  alt=""
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Yangiliklarimizni ijtimoiy tarmoqlarda kuzatib boring.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} MyRobo. Barcha huquqlar himoyalangan.
        </p>
        <p>Toshkent, O‘zbekiston</p>
      </div>
    </footer>
  );
}
