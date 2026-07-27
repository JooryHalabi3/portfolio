import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Building2,
  CalendarDays,
  Cloud,
  Cookie,
  Mail,
  Server,
  UserRound,
} from "lucide-react";
import {
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";
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
    "deployment" in project && project.deployment
      ? project.deployment
      : {
        hospital: "",
        demo: "",
      };

  const contributors =
    "contributors" in project
      ? (project.contributors ?? []).filter(
        (contributor) =>
          contributor.name?.trim() !== "",
      )
      : [];

  return (
    <div
      id="top"
      className="min-h-screen bg-background"
    >
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
            <section>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
                {project.category}
              </p>

              <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-center">
                <h1 className="font-[var(--font-heading)] text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-gold-gradient sm:text-6xl lg:text-[4rem]">
                  {project.title}
                </h1>

                <div className="lg:justify-self-end">
                  <ProjectLinks
                    github={project.github}
                    live={project.live}
                  />
                </div>
              </div>
            </section>

            {/* Gallery */}
            {gallery.length > 0 && (
              <ProjectGallery images={gallery} />
            )}

            {/* Project overview */}
            {(overview ||
              organization ||
              duration ||
              projectType ||
              status) && (
                <section className="mt-16 border-t border-brand-border pt-12">
                  <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
                    Project Overview
                  </h2>

                  {overview && (
                    <p className="mt-6 max-w-4xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
                      {overview}
                    </p>
                  )}

                  {(organization ||
                    duration ||
                    projectType ||
                    status) && (
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {/* Organization */}
                        {organization && (
                          <GlassCard className="w-full p-4 sm:w-[90%] sm:justify-self-end">
                            <div className="flex items-start gap-3">
                              <Building2
                                aria-hidden="true"
                                className="mt-1 h-4 w-4 shrink-0 text-gold"
                              />

                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                                  Organization
                                </p>

                                <p className="mt-1.5 text-sm leading-6 text-foreground">
                                  {organization}
                                </p>
                              </div>
                            </div>
                          </GlassCard>
                        )}

                        {/* Duration */}
                        {duration && (
                          <GlassCard className="w-full p-4 sm:w-[90%] sm:justify-self-start">
                            <div className="flex items-start gap-3">
                              <CalendarDays
                                aria-hidden="true"
                                className="mt-1 h-4 w-4 shrink-0 text-gold"
                              />

                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                                  Duration
                                </p>

                                <p className="mt-1.5 text-sm leading-6 text-foreground">
                                  {duration}
                                </p>
                              </div>
                            </div>
                          </GlassCard>
                        )}

                        {/* Project type */}
                        {projectType && (
                          <GlassCard className="w-full p-4 sm:w-[90%] sm:justify-self-end">
                            <div className="flex items-start gap-3">
                              <UserRound
                                aria-hidden="true"
                                className="mt-1 h-4 w-4 shrink-0 text-gold"
                              />

                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                                  Project Type
                                </p>

                                <p className="mt-1.5 text-sm leading-6 text-foreground">
                                  {projectType}
                                </p>
                              </div>
                            </div>
                          </GlassCard>
                        )}

                        {/* Status */}
                        {status && (
                          <GlassCard className="w-full p-4 sm:w-[90%] sm:justify-self-start">
                            <div className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold"
                              />

                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                                  Status
                                </p>

                                <p className="mt-1.5 text-sm leading-6 text-foreground">
                                  {status}
                                </p>
                              </div>
                            </div>
                          </GlassCard>
                        )}
                      </div>
                    )}
                </section>
              )}

            {/* My role */}
            {(role || roleDescription) && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
                  My Role
                </h2>

                {role && (
                  <p className="mt-5 text-lg font-medium text-gold-light">
                    {role}
                  </p>
                )}

                {roleDescription && (
                  <p className="mt-4 max-w-4xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
                    {roleDescription}
                  </p>
                )}
              </section>
            )}

            {/* Contributions */}
            {contributions.length > 0 && (
              <ProjectListSection
                title="Contributions"
                items={contributions}
              />
            )}

            {/* Features */}
            {features.length > 0 && (
              <ProjectListSection
                title="Key Features"
                items={features}
              />
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <ProjectListSection
                title="Challenges"
                items={challenges}
              />
            )}

            {/* Technologies */}
            <section className="mt-16 border-t border-brand-border pt-12">
              <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
                Technologies
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/[0.02] px-4 py-2 text-sm text-foreground transition-colors hover:border-gold hover:text-gold-light"
                  >
                    <TechnologyIcon name={technology} />

                    {technology}
                  </span>
                ))}
              </div>
            </section>

            {/* Deployment */}
            {(deployment.hospital || deployment.demo) && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
                  Deployment
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {deployment.hospital && (
                    <GlassCard className="w-full p-4 sm:w-[90%] sm:justify-self-end">
                      <div className="flex items-start gap-3">
                        <Server className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                            Hospital Environment
                          </p>

                          <p className="mt-2 leading-7 text-foreground">
                            {deployment.hospital}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}

                  {deployment.demo && (
                    <GlassCard className="w-full p-4 sm:w-[90%] sm:justify-self-start">
                      <div className="flex items-start gap-3">
                        <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                            Demo Environment
                          </p>

                          <p className="mt-2 leading-7 text-foreground">
                            {deployment.demo}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </section>
            )}

            {/* Team */}
            {contributors.length > 0 && (
              <section className="mt-16 border-t border-brand-border pt-12">
                <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
                  Project Team
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contributors.map((contributor, index) => (
                    <GlassCard
                      key={`${contributor.name}-${contributor.role}-${index}`}
                      className={`w-full p-4 sm:w-[90%] ${index % 2 === 0
                        ? "sm:justify-self-end"
                        : "sm:justify-self-start"
                        }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                            {contributor.role}
                          </p>

                          <p
                            dir="auto"
                            className="mt-2 font-[var(--font-body)] text-base font-normal leading-7 text-foreground"
                          >
                            {contributor.name || "Contributor details coming soon"}
                          </p>
                        </div>

                        {contributor.linkedin && (
                          <a
                            href={contributor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${contributor.name || contributor.role} LinkedIn profile`}
                            className="shrink-0 text-gold transition-colors hover:text-gold-light"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </GlassCard>
                  ))}
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

type ProjectLinksProps = {
  github?: string;
  live?: string;
};

function ProjectLinks({
  github,
  live,
}: ProjectLinksProps) {
  const hasGithubLink =
    Boolean(github) && github !== "#";

  const hasLiveLink =
    Boolean(live) && live !== "#";

  if (!hasGithubLink && !hasLiveLink) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-3 sm:w-48">
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

type ProjectListSectionProps = {
  title: string;
  items: string[];
};

function ProjectListSection({
  title,
  items,
}: ProjectListSectionProps) {
  return (
    <section className="mt-16 border-t border-brand-border pt-12">
      <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
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
function TechnologyIcon({
  name,
}: {
  name: string;
}) {
  const iconClassName = "h-4 w-4 shrink-0 text-gold";

  switch (name.toLowerCase()) {
    case "node.js":
      return (
        <SiNodedotjs className={iconClassName} />
      );

    case "express.js":
      return (
        <SiExpress className={iconClassName} />
      );

    case "javascript":
      return (
        <SiJavascript className={iconClassName} />
      );

    case "mysql":
      return (
        <SiMysql className={iconClassName} />
      );

    case "html":
      return (
        <SiHtml5 className={iconClassName} />
      );

    case "css":
      return (
        <SiCss className={iconClassName} />
      );

    case "rest apis":
      return (
        <Braces className={iconClassName} />
      );

    case "express session":
      return (
        <Cookie className={iconClassName} />
      );

    case "nodemailer":
      return (
        <Mail className={iconClassName} />
      );

    default:
      return (
        <Braces className={iconClassName} />
      );
  }
}