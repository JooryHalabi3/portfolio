import { ABOUT } from "@/constants";
import {
  Container,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* عنوان القسم */}
          <Reveal direction="right">
            <SectionTitle
              subtitle={ABOUT.label}
              title={ABOUT.title}
            />
          </Reveal>

          <div>
            {/* النصوص التعريفية */}
            <div className="space-y-5">
              {ABOUT.description.map((paragraph, index) => (
                <Reveal
                  key={paragraph}
                  delay={index * 0.12}
                >
                  <p className="max-w-2xl text-base leading-8 text-[#AAB6C8] md:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* الإحصائيات */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {ABOUT.highlights.map((highlight, index) => (
                <Reveal
                  key={highlight.label}
                  delay={0.2 + index * 0.12}
                >
                  <div className="group h-full border-t border-[#D6BA74]/35 py-5 transition-colors duration-300 hover:border-[#D6BA74]">
                    <p className="font-[var(--font-heading)] text-4xl font-semibold text-[#E8D6A2] md:text-5xl">
                      {highlight.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#AAB6C8]">
                      {highlight.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}