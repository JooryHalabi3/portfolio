import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  Container,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

type JourneyProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Journey({
  locale,
  dictionary,
}: JourneyProps) {
  const isArabic = locale === "ar";
  const journey = dictionary.journey;

  return (
    <Section id="journey">
      <Container>
        <Reveal>
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className="mb-16 flex justify-center text-center md:mb-20"
          >
            <SectionTitle
              subtitle={journey.label}
              title={journey.title}
              description={journey.description}
            />
          </div>
        </Reveal>

        <div
          dir="ltr"
          className="relative mx-auto max-w-4xl"
        >
          {/* Timeline */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-brand-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {journey.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal
                  key={`${item.year}-${item.title}`}
                  direction={
                    isEven ? "right" : "left"
                  }
                  delay={index * 0.1}
                >
                  <div className="relative grid md:grid-cols-2 md:gap-14">
                    {/* Timeline point */}
                    <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-gold bg-background shadow-[0_0_18px_rgb(214_186_116_/_35%)] md:left-1/2" />

                    {/* Left side */}
                    <div
                      className={
                        isEven
                          ? "ml-10 md:ml-0 md:pr-10"
                          : "hidden md:block"
                      }
                    >
                      {isEven && (
                        <JourneyItem
                          year={item.year}
                          title={item.title}
                          description={
                            item.description
                          }
                          direction={
                            isArabic ? "rtl" : "ltr"
                          }
                          alignment="right"
                        />
                      )}
                    </div>

                    {/* Right side */}
                    <div
                      className={
                        isEven
                          ? "hidden md:block"
                          : "ml-10 md:ml-0 md:pl-10"
                      }
                    >
                      {!isEven && (
                        <JourneyItem
                          year={item.year}
                          title={item.title}
                          description={
                            item.description
                          }
                          direction={
                            isArabic ? "rtl" : "ltr"
                          }
                          alignment="left"
                        />
                      )}
                    </div>

                    {/* Mobile version */}
                    {isEven && (
                      <div className="ml-10 md:hidden">
                        <JourneyItem
                          year={item.year}
                          title={item.title}
                          description={
                            item.description
                          }
                          direction={
                            isArabic ? "rtl" : "ltr"
                          }
                          alignment={
                            isArabic
                              ? "right"
                              : "left"
                          }
                        />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type JourneyItemProps = {
  year: string;
  title: string;
  description: string;
  direction: "rtl" | "ltr";
  alignment: "right" | "left";
};

function JourneyItem({
  year,
  title,
  description,
  direction,
  alignment,
}: JourneyItemProps) {
  return (
    <article
      dir={direction}
      className={`border-t border-brand-border pt-5 transition-colors duration-300 hover:border-gold ${
        alignment === "right"
          ? "text-right"
          : "text-left"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
        {year}
      </p>

      <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold text-gold-light md:text-3xl">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-text-secondary">
        {description}
      </p>
    </article>
  );
}