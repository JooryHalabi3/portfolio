"use client";
import TechnologyIcon from "@/components/TechnologyIcon";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { FaGithub } from "react-icons/fa6";

import { PROJECTS } from "@/constants";
import {
  Container,
  GlassCard,
  Reveal,
  Section,
  SectionTitle,
} from "@/components/ui";

function getProjectInitials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  const featuredProjects = PROJECTS.filter(
    (project) => project.featured,
  );

  return (
    <Section id="projects">
      <Container>
        <Reveal
          duration={0.8}
          distance={30}
          blur={8}
        >
          <div className="mb-14 flex justify-center text-center md:mb-16">
            <SectionTitle
              subtitle="Selected Work"
              title="Featured Projects"
              description="A selection of software solutions built across AI, mobile development, backend systems, and enterprise platforms."
            />
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map(
            (project, index) => {
              const projectNumber = String(
                index + 1,
              ).padStart(2, "0");

              const projectInitials =
                getProjectInitials(project.title);

              const visibleTechnologies =
                project.technologies.slice(0, 4);

              const remainingTechnologies =
                project.technologies.length -
                visibleTechnologies.length;

              const hasGithubLink =
                Boolean(project.github) &&
                project.github !== "#";

              const hasLiveLink =
                Boolean(project.live) &&
                project.live !== "#";

              return (
                <motion.article
                  key={project.slug}
                  className="h-full"
                  initial={
                    reduceMotion
                      ? false
                      : {
                        opacity: 0,
                        y: 60,
                        filter: "blur(8px)",
                      }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                        y: -8,
                      }
                  }
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <GlassCard
                    contentClassName="h-full p-0"
                    className="group h-full overflow-hidden hover:translate-y-0 hover:border-gold/60 hover:shadow-[0_24px_70px_rgb(214_186_116_/_14%)]"
                  >
                    <div className="flex h-full flex-col">
                      {/* Project preview */}
                      <div className="relative flex h-44 shrink-0 items-center justify-center overflow-hidden border-b border-brand-border bg-gradient-to-br from-surface-light via-surface to-background sm:h-48">
                        <div
                          aria-hidden="true"
                          className="absolute inset-4 rounded-2xl border border-gold/10 transition-colors duration-500 group-hover:border-gold/30"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-gold/10 transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:rotate-12"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full border border-gold/10 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:-rotate-12"
                        />

                        <span className="absolute left-6 top-5 text-xs font-medium tracking-[0.25em] text-gold/70">
                          {projectNumber}
                        </span>

                        <div className="relative z-10 text-center transition-transform duration-500 group-hover:-translate-y-1">
                          <p className="font-[var(--font-heading)] text-5xl font-semibold text-gold-gradient">
                            {projectInitials}
                          </p>

                          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
                            Project Preview
                          </p>
                        </div>
                      </div>

                      {/* Project information */}
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                          {project.category}
                        </p>

                        <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-gold-light">
                          {project.title}
                        </h3>

                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-text-secondary">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {visibleTechnologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white/[0.02] px-3 py-1.5 text-xs text-foreground"
                              >
                                <TechnologyIcon name={technology} />
                                {technology}
                              </span>
                            ),
                          )}

                          {remainingTechnologies > 0 && (
                            <span className="rounded-full border border-gold/30 bg-gold/[0.05] px-3 py-1.5 text-xs text-gold-light">
                              +{remainingTechnologies}
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="mt-auto flex items-center gap-2 pt-7">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group/details inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-background transition-all duration-300 hover:bg-gold-light"
                          >
                            Project Details

                            <ArrowRight
                              aria-hidden="true"
                              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/details:translate-x-1"
                            />
                          </Link>

                          {hasGithubLink && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} GitHub repository`}
                              title="GitHub Repository"
                              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-background"
                            >
                              <FaGithub
                                aria-hidden="true"
                                className="h-4 w-4"
                              />
                            </a>
                          )}

                          {hasLiveLink && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} live project`}
                              title="Live Project"
                              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-background"
                            >
                              <ArrowUpRight
                                aria-hidden="true"
                                className="h-4 w-4"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.article>
              );
            },
          )}
        </div>
      </Container>
    </Section>
  );
}