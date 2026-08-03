export const locales = ["ar", "en"] as const;

export type Locale =
  (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeConfig = {
  ar: {
    label: "العربية",
    shortLabel: "AR",
    direction: "rtl",
    languageTag: "ar-SA",
  },

  en: {
    label: "English",
    shortLabel: "EN",
    direction: "ltr",
    languageTag: "en",
  },
} as const;

export function isLocale(
  value: string,
): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(
  locale: Locale,
) {
  return localeConfig[locale].direction;
}

export function getOppositeLocale(
  locale: Locale,
): Locale {
  return locale === "ar" ? "en" : "ar";
}