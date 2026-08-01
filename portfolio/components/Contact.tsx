import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { CONTACT } from "@/constants";
import {
  Container,
  GlassCard,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";
export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <GlassCard
            className="relative overflow-hidden"
            contentClassName="p-7 sm:p-9 lg:p-10"
          >
            {/* Subtle decorative lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-10 h-px w-36 bg-gradient-to-l from-gold/50 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-12 top-10 h-16 w-px bg-gradient-to-b from-gold/30 to-transparent"
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              {/* Left content */}
              <div>
                <SectionTitle
                  subtitle={CONTACT.label}
                  title={CONTACT.title}
                  description={CONTACT.description}
                />

                {/* Availability */}
                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-brand-border px-4 py-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-30" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                  </span>

                  <span className="text-sm text-text-secondary">
                    {CONTACT.availability}
                  </span>
                </div>
              </div>

              {/* Right content */}
              <div className="border-t border-brand-border pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Get in touch
                </p>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group mt-5 flex items-center justify-between gap-4 rounded-2xl border border-brand-border bg-surface/20 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                      <Mail className="h-5 w-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-text-secondary">
                        Email
                      </span>

                      <span className="mt-1 block truncate text-sm text-foreground sm:text-base">
                        {CONTACT.email}
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                {/* Location */}
                <div className="mt-4 flex items-center gap-4 rounded-2xl border border-brand-border bg-surface/20 px-5 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-text-secondary">
                      Location
                    </span>

                    <span className="mt-1 block text-sm text-foreground sm:text-base">
                      {CONTACT.location}
                    </span>
                  </span>
                </div>

                {/* Social links */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={CONTACT.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
                  >
                    <FaLinkedinIn className="h-4 w-4 text-gold" />
                    LinkedIn
                  </a>

                  <a
                    href={CONTACT.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
                  >
                    <FaGithub className="h-4 w-4 text-gold" />
                    GitHub
                  </a>
                </div>
                                     </div>
            </div>
          </GlassCard>
        </Reveal>

        {/* Copyright — outside the card */}
        <Reveal delay={0.1}>
          <div className="mt-8 border-t border-brand-border pt-6 text-center">
            <p className="text-sm text-text-secondary">
              © 2026 Joory Halabi. All rights reserved.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}