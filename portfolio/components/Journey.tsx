import { JOURNEY } from "@/constants";
import {
  Container,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

export default function Journey() {
  return (
    <Section id="journey">
      <Container>
        <Reveal>
          <div className="mb-16 text-center md:mb-20">
            <SectionTitle
              subtitle="Journey"
              title="My Professional Path"
              description="A timeline of the experiences and milestones that shaped my software engineering journey."
            />
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          {/* الخط العمودي */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-brand-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {JOURNEY.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal
                  key={`${item.year}-${item.title}`}
                  direction={isEven ? "right" : "left"}
                  delay={index * 0.1}
                >
                  <div className="relative grid md:grid-cols-2 md:gap-14">
                    {/* نقطة الخط الزمني */}
                    <div className="absolute top-2 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-gold bg-background shadow-[0_0_18px_rgb(214_186_116_/_35%)] md:left-1/2" />

                    {/* محتوى الجهة اليسرى */}
                    <div
                      className={
                        isEven
                          ? "ml-10 md:ml-0 md:pr-10 md:text-right"
                          : "hidden md:block"
                      }
                    >
                      {isEven && (
                        <JourneyItem
                          year={item.year}
                          title={item.title}
                          description={item.description}
                        />
                      )}
                    </div>

                    {/* محتوى الجهة اليمنى */}
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
                          description={item.description}
                        />
                      )}
                    </div>

                    {/* نسخة الجوال للعناصر التي تقع يسارًا على الديسكتوب */}
                    {isEven && (
                      <div className="ml-10 md:hidden">
                        <JourneyItem
                          year={item.year}
                          title={item.title}
                          description={item.description}
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
};

function JourneyItem({
  year,
  title,
  description,
}: JourneyItemProps) {
  return (
    <article className="border-t border-brand-border pt-5 transition-colors duration-300 hover:border-gold">
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