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
  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <div className="mb-16 flex justify-center text-center md:mb-20">
            <SectionTitle
              subtitle="Selected Work"
              title="Featured Projects"
              description="A selection of software solutions built across AI, mobile development, backend systems, and enterprise platforms."
            />
          </div>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {PROJECTS.filter((project) => project.featured).map(
            (project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.12}
              >
                <GlassCard className="overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Project placeholder */}
                    <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-brand-border bg-gradient-to-br from-surface-light via-surface to-background lg:min-h-96 lg:border-r lg:border-b-0">
                      <div
                        aria-hidden="true"
                        className="absolute inset-6 rounded-2xl border border-gold/10"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-gold/10"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-gold/10"
                      />

                      <div className="relative z-10 px-8 text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                          Project Preview
                        </p>

                        <p className="mt-6 font-[var(--font-heading)] text-4xl font-semibold text-gold-light sm:text-5xl">
                          {project.title}
                        </p>
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                          {project.category}
                        </p>

                        <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-xl leading-8 text-text-secondary">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-brand-border bg-white/[0.02] px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-gold hover:text-gold-light"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-light"
                      >
                        View Project

                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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