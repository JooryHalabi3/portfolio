import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

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
          <GlassCard className="relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-surface-light/40 blur-3xl"
            />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              {/* Left */}
              <div>
                <SectionTitle
                  subtitle={CONTACT.label}
                  title={CONTACT.title}
                  description={CONTACT.description}
                />

                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-brand-border bg-white/[0.03] px-4 py-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                  </span>

                  <span className="text-sm text-text-secondary">
                    {CONTACT.availability}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <div className="border-t border-brand-border pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                    Get in touch
                  </p>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group mt-4 flex items-center justify-between gap-4 text-base text-foreground transition-colors duration-300 hover:text-gold-light sm:text-lg"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-gold" />

                      <span className="truncate">{CONTACT.email}</span>
                    </span>

                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" />

                  <span>{CONTACT.location}</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={CONTACT.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/[0.02] px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                    LinkedIn
                  </a>

                  <a
                    href={CONTACT.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/[0.02] px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </div>

                {/* TODO:
                  ضع روابط GitHub و LinkedIn الحقيقية
                  داخل constants/contact.ts قبل نشر الموقع.
                */}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </Section>
  );
}