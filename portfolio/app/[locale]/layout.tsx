import { Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";

import {
  isLocale,
  localeConfig,
  locales,
} from "@/lib/i18n";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type LocaleLayoutProps = {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const config = localeConfig[locale];
  const isArabic = locale === "ar";

  return (
    <div
      lang={config.languageTag}
      dir={config.direction}
      data-locale={locale}
      className={`${notoSansArabic.variable} min-h-screen ${
        isArabic
          ? "font-[var(--font-arabic)]"
          : "font-[var(--font-body)]"
      }`}
    >
      {children}
    </div>
  );
}