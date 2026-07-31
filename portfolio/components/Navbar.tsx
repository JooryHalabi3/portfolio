"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation, SITE } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navigation
        .map((item) => {
          const sectionId = item.href.replace("#", "");

          return document.getElementById(sectionId);
        })
        .filter(
          (section): section is HTMLElement =>
            section !== null,
        );

      const currentSection = sections
        .slice()
        .reverse()
        .find((section) => {
          return window.scrollY + 180 >= section.offsetTop;
        });

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Main navbar */}
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
        {/* Logo and name image */}
    <Link
  href="#home"
  aria-label="Joory Halabi home"
  onClick={() => {
    setActiveSection("#home");
    setIsOpen(false);
  }}
  className="flex h-20 items-center justify-self-start"
>
  <Image
  src="/brand/navbar-logo.png"
  alt="Joory Halabi"
  width={240}
  height={70}
  priority
  className="block h-11 w-auto translate-y-1 object-contain object-center"
/>
</Link>
        {/* Desktop navigation */}
      <nav
  aria-label="Main navigation"
  className="hidden h-20 items-center gap-8 justify-self-center lg:flex"
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
className={`relative py-3 text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                    ? "text-gold-light"
                    : "text-text-secondary hover:text-gold-light"
                }`}
              >
                {item.title}

                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 mx-auto h-px bg-gold transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Download CV button */}
        <Link
          href={SITE.resume}
          target="_blank"
          rel="noopener noreferrer"
className="hidden self-center justify-self-end rounded-xl border border-gold/70 px-5 py-2.5 text-sm font-medium text-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-background lg:inline-flex"        >
          Download CV
        </Link>

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
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="flex h-10 w-10 items-center justify-center justify-self-end text-gold-light transition-colors hover:text-gold lg:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] border-t border-brand-border"
            : "max-h-0"
        }`}
      >
        <div className="bg-background/95 px-6 py-5 backdrop-blur-xl">
          <nav
            aria-label="Mobile navigation"
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
                    setIsOpen(false);
                  }}
                  className={`border-b border-brand-border py-4 text-sm uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "text-gold-light"
                      : "text-text-secondary hover:text-gold-light"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

            <Link
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsOpen(false);
              }}
              className="mt-6 rounded-xl border border-gold py-3 text-center text-sm font-medium text-gold-light transition-colors hover:bg-gold hover:text-background"
            >
              Download CV
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}