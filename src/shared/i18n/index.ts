import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en },
} as const;

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "uz";

  const saved = window.localStorage.getItem("i18nextLng");
  if (saved && ["uz", "ru", "en"].includes(saved)) return saved;

  return "uz";
};

const initializeI18n = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "uz",
    supportedLngs: ["uz", "ru", "en"],
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
};

initializeI18n();

export const setLanguage = async (lng: string) => {
  if (!["uz", "ru", "en"].includes(lng)) return;

  await i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    window.localStorage.setItem("i18nextLng", lng);
    document.documentElement.lang = lng;
  }
};

export { i18n };
