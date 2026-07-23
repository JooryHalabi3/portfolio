import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HERO } from "@/constants";
import {
  Container,
  Reveal,
  Section,
} from "@/components/ui";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Decorative blueprint lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-32 right-[8%] h-px w-40 bg-gold/20" />
        <div className="absolute top-32 right-[8%] h-40 w-px bg-gold/20" />

        <div className="absolute bottom-24 left-[6%] h-px w-28 bg-gold/15" />
        <div className="absolute bottom-24 left-[6%] h-28 w-px bg-gold/15" />

        <div className="absolute top-1/3 right-[15%] h-56 w-56 rounded-full border border-gold/10" />
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold sm:text-sm">
                {HERO.eyebrow}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-7 font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-8xl">
              <span className="block">
                {HERO.heading.firstLine}
              </span>

              <span className="mt-2 block text-gold-light">
                {HERO.heading.highlightedLine}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
              {HERO.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={HERO.primaryAction.href}
                className="group inline-flex items-center gap-2 rounded-full border border-gold bg-gold px-7 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                {HERO.primaryAction.label}

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={HERO.secondaryAction.href}
                className="inline-flex items-center rounded-full border border-brand-border bg-white/[0.02] px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
              >
                {HERO.secondaryAction.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>

              <p className="text-sm text-text-secondary">
                {HERO.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}