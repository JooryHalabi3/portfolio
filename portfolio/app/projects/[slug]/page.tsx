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
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
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

  const gallery =
    "gallery" in project
      ? project.gallery ?? []
      : [];

  const overview =
    "overview" in project
      ? project.overview
      : undefined;

  const organization =
    "organization" in project
      ? project.organization
      : undefined;

  const duration =
    "duration" in project
      ? project.duration
      : undefined;

  const projectType =
    "projectType" in project
      ? project.projectType
      : undefined;

  const status =
    "status" in project
      ? project.status
      : undefined;

  const role =
    "role" in project
      ? project.role
      : undefined;

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
    Boolean(project.github) &&
    project.github !== "#";

  const hasLiveLink =
    Boolean(project.live) &&
    project.live !== "#";

  const hasProjectLinks =
    hasGithubLink || hasLiveLink;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              className="font-[var(--font-heading)] text-2xl font-medium text-gold-gradient"
            >
              {SITE.name}
            </Link>
          </div>
        </Container>
      </header>

      <main className="py-16 sm:py-24">
        <Container>
          <article className="mx-auto max-w-5xl">
         {/* Hero */}
<section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-center">
  <div>
    <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
      {project.category}
    </p>

    <h1 className="mt-5 font-[var(--font-heading)] text-5xl font-medium tracking-[-0.03em] text-gold-gradient sm:text-6xl lg:text-7xl">
      {project.title}
    </h1>

    <p className="mt-7 max-w-3xl text-lg leading-9 text-text-secondary">
      {project.description}
    </p>
  </div>

<div className="lg:translate-y-10 lg:justify-self-end">
        <ProjectLinks
      github={project.github}
      live={project.live}
      stacked
    />
  </div>
</section>

            {/* Project gallery */}
            {gallery.length > 0 && (
              <ProjectGallery images={gallery} />
            )}

            {/* Basic information */}
            {(organization ||
              duration ||
              projectType ||
              status) && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Project Details
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
                  Basic Information
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {organization && (
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-4">
                        <Building2
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0 text-gold"
                        />

                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gold">
                            Organization
                          </p>

                          <p className="mt-2 leading-7 text-foreground">
                            {organization}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}

                  {duration && (
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-4">
                        <CalendarDays
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0 text-gold"
                        />

                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gold">
                            Duration
                          </p>

                          <p className="mt-2 leading-7 text-foreground">
                            {duration}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}

                  {projectType && (
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-4">
                        <UserRound
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0 text-gold"
                        />

                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gold">
                            Project Type
                          </p>

                          <p className="mt-2 leading-7 text-foreground">
                            {projectType}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}

                  {status && (
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-3 w-3 shrink-0 rounded-full bg-gold"
                        />

                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gold">
                            Status
                          </p>

                          <p className="mt-2 leading-7 text-foreground">
                            {status}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </section>
            )}

            {/* Overview */}
            {overview && (
              <ProjectTextSection
                eyebrow="About the Project"
                title="Project Overview"
                description={overview}
              />
            )}

            {/* My role */}
            {(role || roleDescription) && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  My Role
                </p>

                {role && (
                  <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
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

              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
                Technologies Used
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-brand-border bg-white/[0.02] px-4 py-2 text-sm text-foreground transition-colors hover:border-gold hover:text-gold-light"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </section>

            {/* Deployment */}
            {deployment && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Infrastructure
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
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

            {/* Team */}
            {contributors.length > 0 && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Collaboration
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
                  Project Team
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contributors.map(
                    (contributor) => (
                      <GlassCard
                        key={`${contributor.name}-${contributor.role}`}
                        className="p-6"
                      >
                        <p className="font-[var(--font-heading)] text-2xl font-medium text-gold-gradient">
                          {contributor.name}
                        </p>

                        <p className="mt-2 text-sm text-text-secondary">
                          {contributor.role}
                        </p>

                        {contributor.linkedin && (
                          <a
                            href={
                              contributor.linkedin
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-light"
                          >
                            <FaLinkedinIn className="h-4 w-4" />
                            LinkedIn
                          </a>
                        )}
                      </GlassCard>
                    ),
                  )}
                </div>
              </section>
            )}
          </article>
        </Container>
      </main>
            <Footer />

    </div>
  );
}

/* =========================================================
   Project links
   ========================================================= */

type ProjectLinksProps = {
  github?: string;
  live?: string;
  stacked?: boolean;
};

function ProjectLinks({
  github,
  live,
  stacked = false,
}: ProjectLinksProps) {
  const hasGithubLink =
    Boolean(github) && github !== "#";

  const hasLiveLink =
    Boolean(live) && live !== "#";

  if (!hasGithubLink && !hasLiveLink) {
    return null;
  }

  return (
    <div
      className={
        stacked
          ? "flex w-full flex-col gap-3 sm:w-48"
          : "mt-8 flex flex-wrap gap-4"
      }
    >
   {hasGithubLink && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-medium text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-background"
        >
          <FaGithub
            aria-hidden="true"
            className="h-4 w-4"
          />

          View Code
        </a>
      )}

      {hasLiveLink && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
        >
          Live Project

          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4"
          />
        </a>
      )}
    </div>
  );
} 
/* =========================================================
   Text section
   ========================================================= */

type ProjectTextSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function ProjectTextSection({
  eyebrow,
  title,
  description,
}: ProjectTextSectionProps) {
  return (
    <section className="mt-16 border-t border-brand-border pt-12">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
        {title}
      </h2>

      <p className="mt-6 max-w-4xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
        {description}
      </p>
    </section>
  );
}

/* =========================================================
   List section
   ========================================================= */

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

      <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
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