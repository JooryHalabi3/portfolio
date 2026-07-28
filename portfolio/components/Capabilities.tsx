import { CAPABILITIES } from "@/constants";
import TechnologyIcon from "@/components/TechnologyIcon";
import {
  Container,
  GlassCard,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

export default function Capabilities() {
  return (
    <Section id="skills">
      <Container>
        <Reveal>
          <div className="mb-12 flex justify-center text-center md:mb-16">
            <SectionTitle
              subtitle="Capabilities"
              title="What I Build"
              description="My primary areas of expertise across backend engineering, databases, full-stack development, mobile applications, and AI integration."
            />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 0.1}
            >
              <GlassCard
                className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold"
                contentClassName="flex h-full flex-col p-6 sm:p-7"
              >
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-gold-light">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  {capability.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {capability.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-border px-3.5 py-2 text-sm text-foreground transition-colors duration-300 hover:border-gold hover:text-gold-light"
                    >
                      <TechnologyIcon
                        name={skill}
                        className="h-4 w-4 shrink-0 text-gold"
                      />

                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}