import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { navigation, SITE } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="border-t border-brand-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link
href="/#home"
              className="font-[var(--font-heading)] text-3xl font-semibold text-gold-light transition-colors duration-300 hover:text-gold"
            >
              {SITE.name}
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-text-secondary">
              {SITE.title} focused on building scalable, reliable, and
              thoughtful digital experiences.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-300 hover:text-gold-light"
            >
              <Mail
                aria-hidden="true"
                className="h-4 w-4 text-gold"
              />

              {SITE.email}

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
href={`/${item.href}`}
                  className="w-fit text-sm text-text-secondary transition-colors duration-300 hover:text-gold-light"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-sm text-text-secondary transition-colors duration-300 hover:text-gold-light"
              >
                <FaLinkedinIn
                  aria-hidden="true"
                  className="h-4 w-4 text-gold"
                />

                LinkedIn

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-sm text-text-secondary transition-colors duration-300 hover:text-gold-light"
              >
                <FaGithub
                  aria-hidden="true"
                  className="h-4 w-4 text-gold"
                />

                GitHub

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-border pt-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE.name}. All rights reserved.
          </p>

          <a
href="#top"
            className="w-fit uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold-light"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}