"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Download,
  Menu,
  X,
} from "lucide-react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { navigation, SITE } from "@/constants";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Navbar({
  locale,
  dictionary,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState("#home");

  const isArabic = locale === "ar";

  const getNavigationLabel = (href: string) => {
    const key = href.replace(
      "#",
      "",
    ) as keyof Dictionary["navigation"];

    return dictionary.navigation[key];
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navigation
        .map((item) =>
          document.getElementById(
            item.href.replace("#", ""),
          ),
        )
        .filter(
          (section): section is HTMLElement =>
            section !== null,
        );

      const currentSection = [...sections]
        .reverse()
        .find(
          (section) =>
            window.scrollY + 180 >=
            section.offsetTop,
        );

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
<header
  dir="ltr"
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled || isOpen
      ? "border-b border-brand-border/70 bg-background/90 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}#home`}
          aria-label={
            isArabic
              ? "العودة إلى الصفحة الرئيسية"
              : "Go to home page"
          }
          onClick={() => {
            setActiveSection("#home");
            closeMobileMenu();
          }}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/brand/navbar-logo.png"
            alt="Joory Halabi"
            width={240}
            height={70}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label={
            isArabic
              ? "التنقل الرئيسي"
              : "Main navigation"
          }
          className="absolute left-1/2 hidden h-20 -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {navigation.map((item) => {
            const isActive =
              activeSection === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href);
                }}
                className={`relative flex h-20 items-center whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
                  isArabic
                    ? "tracking-normal"
                    : "uppercase tracking-[0.14em]"
                } ${
                  item.href === "#contact"
                    ? "-ms-8"
                    : ""
                } ${
                  isActive
                    ? "text-gold-light"
                    : "text-text-secondary hover:text-gold-light"
                }`}
              >
                {getNavigationLabel(item.href)}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1/2 h-px w-8 -translate-x-1/2 bg-gold transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <Link
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-gold/70 px-4 text-sm font-medium text-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-background"
          >
            {dictionary.actions.downloadCV}

            <Download className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((previous) => !previous);
          }}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isOpen
              ? isArabic
                ? "إغلاق قائمة التنقل"
                : "Close navigation menu"
              : isArabic
                ? "فتح قائمة التنقل"
                : "Open navigation menu"
          }
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-gold-light transition-colors hover:border-gold/50 hover:bg-white/[0.04] lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[650px]"
            : "max-h-0"
        }`}
      >
        <div className="border-t border-brand-border/60 bg-background/95 px-5 pb-6 pt-3 backdrop-blur-xl sm:px-6">
          <nav
            aria-label={
              isArabic
                ? "التنقل عبر الجوال"
                : "Mobile الج navigation"
            }
            className="flex flex-col"
          >
            {navigation.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    closeMobileMenu();
                  }}
                  className={`flex items-center justify-between border-b border-brand-border/50 py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gold-light"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                 <span dir={isArabic ? "rtl" : "ltr"}>
  {getNavigationLabel(item.href)}
</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}

            {/* Mobile language switcher */}
            <div className="mt-6 flex justify-center">
              <LanguageSwitcher />
            </div>

            {/* Mobile CV */}
            <Link
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-gold/60 text-sm font-medium text-gold-light transition-colors hover:bg-gold hover:text-background"
            >
           <span dir={isArabic ? "rtl" : "ltr"}>
  {dictionary.actions.downloadCV}
</span>

              <Download className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}