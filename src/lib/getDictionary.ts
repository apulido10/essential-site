import type { Dictionary } from "./dictionaries/en";

const dictionaries = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
};

export type Lang = keyof typeof dictionaries;

export const i18n = {
  defaultLocale: "en" as const,
  locales: ["en", "es"] as const,
};

export default async function getDictionary(lang: Lang): Promise<Dictionary> {
  return dictionaries[lang]();
}
