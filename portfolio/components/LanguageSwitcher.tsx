"use client";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  getOppositeLocale,
  isLocale,
  type Locale,
} from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname
    .split("/")
    .filter(Boolean);

  const pathLocale = pathSegments[0];

  const currentLocale: Locale =
    isLocale(pathLocale)
      ? pathLocale
      : "ar";

  const targetLocale =
    getOppositeLocale(currentLocale);

  const switchLanguage = () => {
    const updatedSegments = [
      ...pathSegments,
    ];

    if (
      updatedSegments.length > 0 &&
      isLocale(updatedSegments[0])
    ) {
      updatedSegments[0] = targetLocale;
    } else {
      updatedSegments.unshift(targetLocale);
    }

    const targetPath = `/${updatedSegments.join(
      "/",
    )}`;

    const currentHash =
      window.location.hash;

    // Save language for future visits
    window.localStorage.setItem(
      "locale",
      targetLocale,
    );

    // Keep the cookie temporarily for compatibility
    document.cookie = `locale=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;

    router.push(
      `${targetPath}${currentHash}`,
    );
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={`Switch to ${
        targetLocale === "ar"
          ? "Arabic"
          : "English"
      }`}
      className="inline-flex h-10 items-center rounded-xl border border-brand-border px-3 text-xs font-medium tracking-[0.14em] transition-all duration-300 hover:border-gold"
    >
      <span
        className={
          currentLocale === "ar"
            ? "text-gold-light"
            : "text-text-secondary"
        }
      >
        AR
      </span>

      <span className="mx-2 text-brand-border">
        |
      </span>

      <span
        className={
          currentLocale === "en"
            ? "text-gold-light"
            : "text-text-secondary"
        }
      >
        EN
      </span>
    </button>
  );
}