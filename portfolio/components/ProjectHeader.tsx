"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useState,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Container } from "@/components/ui";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

type ProjectHeaderProps = {
  title: string;
  locale: Locale;
  dictionary: Dictionary;
};

export default function ProjectHeader({
  title,
  locale,
  dictionary,
}: ProjectHeaderProps) {
  const [scrolled, setScrolled] =
    useState(false);

  const isArabic = locale === "ar";

  const BackIcon = isArabic
    ? ArrowRight
    : ArrowLeft;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <header
      dir="ltr"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-border bg-background/85 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl"
          : "bg-background"
      }`}
    >
      <Container>
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Back button — always left */}
          <Link
            href={`/${locale}#projects`}
            className="group inline-flex w-fit items-center gap-2 justify-self-start text-sm text-text-secondary transition-colors duration-300 hover:text-gold-light"
          >
            <BackIcon
              aria-hidden="true"
              className={`h-4 w-4 text-gold transition-transform duration-300 ${
                isArabic
                  ? "group-hover:translate-x-1"
                  : "group-hover:-translate-x-1"
              }`}
            />

            <span
              dir={
                isArabic ? "rtl" : "ltr"
              }
              className="hidden sm:inline"
            >
              {
                dictionary.actions
                  .backToProjects
              }
            </span>

            <span
              dir={
                isArabic ? "rtl" : "ltr"
              }
              className="sm:hidden"
            >
              {
                dictionary.navigation
                  .projects
              }
            </span>
          </Link>

          {/* Project title — always center */}
          <Link
            href="#top"
            dir={
              isArabic ? "rtl" : "ltr"
            }
            aria-label={
              isArabic
                ? "العودة إلى بداية المشروع"
                : "Back to the top of the project"
            }
            className={`hidden max-w-sm truncate text-center text-sm font-medium text-foreground transition-colors duration-300 hover:text-gold-light md:block ${
              isArabic
                ? "tracking-normal"
                : "uppercase tracking-[0.18em]"
            }`}
          >
            {title}
          </Link>

          {/* Language and logo — always right */}
          <div
            dir="ltr"
            className="flex items-center justify-self-end gap-3"
          >
            <LanguageSwitcher />

            <Link
              href={`/${locale}`}
              aria-label={
                isArabic
                  ? "العودة إلى الصفحة الرئيسية"
                  : "Go to home page"
              }
              className="flex h-20 items-center"
            >
              <Image
                src="/brand/just-logo.png"
                alt="Joory Halabi logo"
                width={64}
                height={64}
                priority
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}