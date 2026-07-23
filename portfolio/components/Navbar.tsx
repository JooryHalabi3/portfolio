"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation, SITE } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-border bg-background/85 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.jpg"
            alt="Joory Halabi logo"
            width={46}
            height={46}
            priority
            className="h-11 w-11 rounded-full border border-gold/40 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <span className="hidden font-[var(--font-heading)] text-2xl font-semibold text-gold-light sm:block">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm uppercase tracking-[0.16em] transition-colors duration-300 ${
                  isActive
                    ? "text-gold-light"
                    : "text-text-secondary hover:text-gold-light"
                }`}
              >
                {item.title}

                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Resume */}
        <Link
          href={SITE.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-gold px-6 py-3 text-sm font-medium text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-background lg:inline-flex"
        >
          Resume
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="rounded-md p-2 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gold-light" />
          ) : (
            <Menu className="h-6 w-6 text-gold-light" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-brand-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-brand-border py-4 transition-colors ${
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
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full border border-gold py-3 text-center text-gold transition-all hover:bg-gold hover:text-background"
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}