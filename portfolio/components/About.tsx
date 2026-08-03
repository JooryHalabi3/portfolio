import {
  Code2,
  Gauge,
  UsersRound,
} from "lucide-react";

import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  Container,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

type AboutProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const strengthIcons = [
  Code2,
  Gauge,
  UsersRound,
];

export default function About({
  locale,
  dictionary,
}: AboutProps) {
  const isArabic = locale === "ar";
  const about = dictionary.about;

  return (
    <Section id="about">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Keep the physical layout unchanged */}
          <div
            dir="ltr"
            className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16"
          >
            {/* Heading and description — always left */}
            <div
              dir={isArabic ? "rtl" : "ltr"}
              className={
                isArabic
                  ? "text-right"
                  : "text-left"
              }
            >
              <Reveal>
                <SectionTitle
                  subtitle={about.label}
                  title={about.title}
                />
              </Reveal>

              <div className="mt-8 space-y-5">
                {about.description.map(
                  (paragraph, index) => (
                    <Reveal
                      key={`${index}-${paragraph}`}
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

            {/* Strength cards — always right */}
            <div className="space-y-4">
              {about.strengths.map(
                (strength, index) => {
                  const Icon =
                    strengthIcons[index] ??
                    Code2;

                  return (
                    <Reveal
                      key={strength.title}
                      delay={0.12 + index * 0.1}
                    >
                      <article
                        dir="ltr"
                        className="flex items-center gap-5 rounded-2xl border border-brand-border bg-surface/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div
                          dir={
                            isArabic
                              ? "rtl"
                              : "ltr"
                          }
                          className={`min-w-0 flex-1 ${
                            isArabic
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          <h3 className="text-lg font-semibold text-foreground">
                            {strength.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-text-secondary">
                            {
                              strength.description
                            }
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
          <div
            dir="ltr"
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {about.highlights.map(
              (highlight, index) => (
                <Reveal
                  key={`${highlight.value}-${highlight.label}`}
                  delay={
                    0.15 + index * 0.08
                  }
                  className="h-full"
                >
                  <div className="flex h-full min-h-24 flex-col items-center justify-center rounded-2xl border border-brand-border bg-surface/25 px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
                    <p className="font-[var(--font-heading)] text-3xl font-semibold text-gold-light md:text-4xl">
                      {highlight.value}
                    </p>

                    <p
                      dir={
                        isArabic
                          ? "rtl"
                          : "ltr"
                      }
                      className="mt-1.5 text-xs leading-5 text-text-secondary sm:text-sm"
                    >
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