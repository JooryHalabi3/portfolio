import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PROJECTS } from "@/constants";
import {
  Container,
  GlassCard,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

export default function SelectedWork() {
  const featuredProjects = PROJECTS.filter(
    (project) => project.featured,
  );

  return (
    <Section id="projects">
      <Container>
        <Reveal
          duration={0.8}
          distance={24}
          blur={7}
        >
          <div className="mb-16 flex justify-center text-center md:mb-20">
            <SectionTitle
              subtitle="Selected Work"
              title="Featured Projects"
              description="A selection of software solutions built across AI, mobile development, backend systems, and enterprise platforms."
            />
          </div>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {featuredProjects.map(
            (project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.1}
                duration={0.85}
                distance={42}
                blur={8}
                direction={
                  index % 2 === 0
                    ? "right"
                    : "left"
                }
              >
                <GlassCard className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_70px_rgb(0_0_0_/_25%)]">
                  {/* Moving gold shine */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-[45%] z-20 w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-gold/[0.09] to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
                  />

                  <div className="grid lg:grid-cols-2">
                    {/* Project preview */}
                    <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-brand-border bg-gradient-to-br from-surface-light via-surface to-background lg:min-h-96 lg:border-r lg:border-b-0">
                      <div
                        aria-hidden="true"
                        className="absolute inset-6 rounded-2xl border border-gold/10 transition-all duration-700 group-hover:inset-5 group-hover:border-gold/20"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/10 transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-110"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-gold/10 transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute left-[18%] top-[20%] h-1.5 w-1.5 rounded-full bg-gold/50 opacity-0 shadow-[0_0_18px_rgb(214_186_116_/_50%)] transition-all duration-500 group-hover:opacity-100"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute bottom-[20%] right-[18%] h-1 w-1 rounded-full bg-gold-light/60 opacity-0 shadow-[0_0_14px_rgb(232_214_162_/_45%)] transition-all delay-100 duration-500 group-hover:opacity-100"
                      />

                      <div className="relative z-10 px-8 text-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                          Project Preview
                        </p>

                        <p className="mt-6 font-[var(--font-heading)] text-4xl font-semibold text-gold-light transition-colors duration-500 group-hover:text-gold-gradient sm:text-5xl">
                          {project.title}
                        </p>
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                          {project.category}
                        </p>

                        <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-gold-light sm:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-xl leading-8 text-text-secondary">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-brand-border bg-white/[0.02] px-4 py-2 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/[0.05] hover:text-gold-light"
                            >
                              {technology}
                            </span>
                          ),
                        )}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-light"
                      >
                        View Project

                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
                        />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ),
          )}
        </div>
      </Container>
    </Section>
  );
}