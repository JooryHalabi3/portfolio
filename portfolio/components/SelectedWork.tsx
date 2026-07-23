import Image from "next/image";

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
                    {PROJECTS.map((project, index) => (
                        <Reveal key={project.title} delay={index * 0.12}>
                            <GlassCard className="overflow-hidden">
                                <div className="grid lg:grid-cols-2">
                                    {/* Project Image */}
                                    <div className="relative min-h-72 overflow-hidden border-b border-brand-border bg-surface lg:min-h-96 lg:border-r lg:border-b-0">
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} project preview`}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />

                                        <div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                                        />
                                    </div>

                                    {/* Project Content */}
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
                                    </div>
                                </div>
                            </GlassCard>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}