import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CalendarDays,
  UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Container, GlassCard } from "@/components/ui";
import { PROJECTS, SITE } from "@/constants";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS.find(
    (projectItem) => projectItem.slug === slug,
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECTS.find(
    (projectItem) => projectItem.slug === slug,
  );

  if (!project) {
    notFound();
  }

  /*
   * بعض هذه الخصائص لا توجد في كل المشاريع.
   * لذلك نتحقق منها قبل عرضها.
   */
  const overview =
    "overview" in project ? project.overview : undefined;

  const organization =
    "organization" in project
      ? project.organization
      : undefined;

  const duration =
    "duration" in project ? project.duration : undefined;

  const projectType =
    "projectType" in project
      ? project.projectType
      : undefined;

  const status =
    "status" in project ? project.status : undefined;

  const role =
    "role" in project ? project.role : undefined;

  const roleDescription =
    "roleDescription" in project
      ? project.roleDescription
      : undefined;

      const contributions =
  "contributions" in project
    ? project.contributions ?? []
    : [];


  const features =
  "features" in project
    ? project.features ?? []
    : [];

const challenges =
  "challenges" in project
    ? project.challenges ?? []
    : [];

  const deployment =
    "deployment" in project
      ? project.deployment
      : undefined;

const contributors =
  "contributors" in project
    ? (project.contributors ?? []).filter(
        (contributor) =>
          contributor.name?.trim() !== "",
      )
    : [];

  const hasGithubLink =
    Boolean(project.github) && project.github !== "#";

  const hasLiveLink =
    Boolean(project.live) && project.live !== "#";

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-brand-border">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-gold-light"
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />

              Back to projects
            </Link>

            <Link
              href="/"
              className="font-[var(--font-heading)] text-2xl font-semibold text-gold-light"
            >
              {SITE.name}
            </Link>
          </div>
        </Container>
      </header>

      <main className="py-16 sm:py-24">
        <Container>
          <article className="mx-auto max-w-5xl">
            {/* Project heading */}
            <section>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
                {project.category}
              </p>

              <h1 className="mt-5 font-[var(--font-heading)] text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-9 text-text-secondary">
                {project.description}
              </p>
            </section>

            {/* Project placeholder */}
            <GlassCard className="relative mt-12 flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-surface-light via-surface to-background">
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-2xl border border-gold/10"
              />

              <div
                aria-hidden="true"
                className="absolute -top-32 -right-24 h-96 w-96 rounded-full border border-gold/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full border border-gold/10"
              />

              <div className="relative z-10 px-8 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
                  Project Overview
                </p>

                <p className="mt-6 font-[var(--font-heading)] text-4xl font-semibold text-gold-light sm:text-6xl">
                  {project.title}
                </p>
              </div>
            </GlassCard>

            {/* Basic project information */}
            {(organization ||
              duration ||
              projectType ||
              status) && (
              <section className="mt-12 grid gap-4 sm:grid-cols-2">
                {organization && (
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <Building2 className="mt-1 h-5 w-5 shrink-0 text-gold" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gold">
                          Organization
                        </p>

                        <p className="mt-2 text-foreground">
                          {organization}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                )}

                {duration && (
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-gold" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gold">
                          Duration
                        </p>

                        <p className="mt-2 text-foreground">
                          {duration}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                )}

                {projectType && (
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <UserRound className="mt-1 h-5 w-5 shrink-0 text-gold" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gold">
                          Project Type
                        </p>

                        <p className="mt-2 text-foreground">
                          {projectType}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                )}

                {status && (
                  <GlassCard className="p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">
                        Status
                      </p>

                      <p className="mt-2 text-foreground">
                        {status}
                      </p>
                    </div>
                  </GlassCard>
                )}
              </section>
            )}

            {/* Overview */}
            {overview && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  About the Project
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
                  Project Overview
                </h2>

                <p className="mt-6 max-w-4xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
                  {overview}
                </p>
              </section>
            )}

            {/* My role */}
            {(role || roleDescription) && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  My Contribution
                </p>

                {role && (
                  <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
                    {role}
                  </h2>
                )}

                {roleDescription && (
                  <p className="mt-6 max-w-4xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
                    {roleDescription}
                  </p>
                )}
              </section>
            )}

            {/* Contributions */}
            {contributions.length > 0 && (
              <ProjectListSection
                eyebrow="Responsibilities"
                title="What I Worked On"
                items={contributions}
              />
            )}

            {/* Features */}
            {features.length > 0 && (
              <ProjectListSection
                eyebrow="System Capabilities"
                title="Key Features"
                items={features}
              />
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <ProjectListSection
                eyebrow="Learning Experience"
                title="Challenges"
                items={challenges}
              />
            )}

            {/* Technologies */}
            <section className="mt-16 border-t border-brand-border pt-12">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                Technology
              </p>

              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
                Technologies Used
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-brand-border bg-white/[0.02] px-4 py-2 text-sm text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            {/* Deployment */}
            {deployment && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Infrastructure
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
                  Deployment Environments
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <GlassCard className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      Hospital Environment
                    </p>

                    <p className="mt-3 leading-7 text-text-secondary">
                      {deployment.hospital}
                    </p>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      Demo Environment
                    </p>

                    <p className="mt-3 leading-7 text-text-secondary">
                      {deployment.demo}
                    </p>
                  </GlassCard>
                </div>
              </section>
            )}

            {/* Contributors */}
            {contributors.length > 0 && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Collaboration
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
                  Project Team
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contributors.map((contributor) => (
                    <GlassCard
                      key={`${contributor.name}-${contributor.role}`}
                      className="p-6"
                    >
                      <p className="text-lg font-medium text-foreground">
                        {contributor.name}
                      </p>

                      <p className="mt-2 text-sm text-text-secondary">
                        {contributor.role}
                      </p>

                      {contributor.linkedin && (
                        <a
                          href={contributor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-light"
                        >
                          <FaLinkedinIn className="h-4 w-4" />
                          LinkedIn
                        </a>
                      )}
                    </GlassCard>
                  ))}
                </div>
              </section>
            )}

            {/* Project links */}
            {(hasGithubLink || hasLiveLink) && (
              <section className="mt-16 flex flex-wrap gap-4 border-t border-brand-border pt-12">
                {hasGithubLink && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm text-gold transition-colors hover:bg-gold hover:text-background"
                  >
                    <FaGithub className="h-4 w-4" />
                    View Code
                  </a>
                )}

                {hasLiveLink && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm text-background transition-colors hover:bg-gold-light"
                  >
                    Live Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </section>
            )}
          </article>
        </Container>
      </main>
    </div>
  );
}

type ProjectListSectionProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

function ProjectListSection({
  eyebrow,
  title,
  items,
}: ProjectListSectionProps) {
  return (
    <section className="mt-16 border-t border-brand-border pt-12">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
        {title}
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-4 rounded-2xl border border-brand-border bg-white/[0.02] p-5 leading-7 text-text-secondary"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}