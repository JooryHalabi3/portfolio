import {
  Code2,
  Gauge,
  UsersRound,
} from "lucide-react";

import { ABOUT } from "@/constants";
import {
  Container,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

const strengthIcons = [
  Code2,
  Gauge,
  UsersRound,
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Main About layout */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Heading and description — left */}
            <div>
              <Reveal>
                <SectionTitle
                  subtitle={ABOUT.label}
                  title={ABOUT.title}
                />
              </Reveal>

              <div className="mt-8 space-y-5">
                {ABOUT.description.map(
                  (paragraph, index) => (
                    <Reveal
                      key={paragraph}
                      delay={index * 0.1}
                    >
                      <p className="text-base leading-8 text-text-secondary md:text-lg">
                        {paragraph}
                      </p>
                    </Reveal>
                  ),
                )}
              </div>
            </div>

            {/* Strength cards — right */}
            <div className="space-y-4">
              {ABOUT.strengths.map(
                (strength, index) => {
                  const Icon =
                    strengthIcons[index];

                  return (
                    <Reveal
                      key={strength.title}
                      delay={0.12 + index * 0.1}
                    >
                      <article className="flex items-center gap-5 rounded-2xl border border-brand-border bg-surface/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {strength.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-text-secondary">
                            {strength.description}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  );
                },
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ABOUT.highlights.map(
              (highlight, index) => (
                <Reveal
                  key={highlight.label}
                  delay={0.15 + index * 0.08}
                  className="h-full"
                >
                  <div className="flex h-full min-h-24 flex-col items-center justify-center rounded-2xl border border-brand-border bg-surface/25 px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
  <p className="font-[var(--font-heading)] text-3xl font-semibold text-gold-light md:text-4xl">
    {highlight.value}
  </p>

  <p className="mt-1.5 text-xs leading-5 text-text-secondary sm:text-sm">
    {highlight.label}
  </p>
</div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}