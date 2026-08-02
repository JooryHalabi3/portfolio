import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Server,
  UserRound,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import ProjectGallery from "@/components/ProjectGallery";
import TechnologyIcon from "@/components/TechnologyIcon";
import {
  Container,
  GlassCard,
  Reveal,
} from "@/components/ui";

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
{/* Project header */}
<header className="project-header inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-xl">
  <Container>
    <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
      {/* Back link */}
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 justify-self-start text-sm text-text-secondary transition-colors duration-300 hover:text-gold-light"
      >
        <ArrowLeft className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-translate-x-1" />

        <span className="hidden sm:inline">
          Back to projects
        </span>

        <span className="sm:hidden">
          Projects
        </span>
      </Link>

      {/* Project name */}
      <Link
        href="#top"
        aria-label="Back to the top of the project"
        className="hidden max-w-md truncate text-center text-sm font-medium uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:text-gold-light md:block"
      >
        {project.title}
      </Link>

      {/* Logo */}
      <Link
        href="/"
        aria-label="Go to home page"
        className="flex h-20 items-center justify-self-end"
      >
        <Image
          src="/brand/just-logo.png"
          alt="Joory Halabi logo"
          width={64}
          height={64}
          priority
          className="h-12 w-auto object-contain"
        />
      </Link>
    </div>
  </Container>
</header>

<main className="pb-12 pt-32 sm:pb-16">
            <Container>
          <article className="mx-auto max-w-6xl">
            {/* Project hero and gallery */}
<Reveal>
  <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
    {/* Project information */}
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm">
        {project.category}
      </p>

      <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
        {project.title}
      </h1>

      <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
        {project.description}
      </p>

      <div className="mt-7">
        <ProjectLinks
          github={project.github}
          live={project.live}
        />
      </div>
    </div>

    {/* Project gallery */}
    {gallery.length > 0 && (
      <div className="min-w-0">
        <ProjectGallery
          images={gallery}
          compact
        />
      </div>
    )}
  </section>
</Reveal>

            {/* Project overview */}
            {(overview ||
              organization ||
              duration ||
              projectType ||
              status) && (
              <Reveal>
                <ProjectSection title="Project Overview">
                  {overview && (
                    <p className="max-w-4xl text-base leading-8 text-text-secondary sm:text-lg">
                      {overview}
                    </p>
                  )}

                  {(organization ||
                    duration ||
                    projectType ||
                    status) && (
                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {organization && (
                        <InformationCard
                          icon={Building2}
                          label="Organization"
                          value={organization}
                        />
                      )}

                      {duration && (
                        <InformationCard
                          icon={CalendarDays}
                          label="Duration"
                          value={duration}
                        />
                      )}

                      {projectType && (
                        <InformationCard
                          icon={UserRound}
                          label="Project Type"
                          value={projectType}
                        />
                      )}

                      {status && (
                        <InformationCard
                          icon={CheckCircle2}
                          label="Status"
                          value={status}
                        />
                      )}
                    </div>
                  )}
                </ProjectSection>
              </Reveal>
            )}

            {/* My role */}
            {(role || roleDescription) && (
              <Reveal>
                <ProjectSection title="My Role">
                  {role && (
                    <p className="text-lg font-semibold text-gold-light">
                      {role}
                    </p>
                  )}

                  {roleDescription && (
                    <p className="mt-3 max-w-4xl text-base leading-8 text-text-secondary sm:text-lg">
                      {roleDescription}
                    </p>
                  )}
                </ProjectSection>
              </Reveal>
            )}

            {/* Contributions */}
            {contributions.length > 0 && (
              <Reveal>
                <ProjectListSection
                  title="Contributions"
                  items={contributions}
                />
              </Reveal>
            )}

            {/* Features */}
            {features.length > 0 && (
              <Reveal>
                <ProjectListSection
                  title="Key Features"
                  items={features}
                />
              </Reveal>
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <Reveal>
                <ProjectListSection
                  title="Challenges"
                  items={challenges}
                />
              </Reveal>
            )}

            {/* Technologies */}
            <Reveal>
              <ProjectSection title="Technologies">
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-surface/20 px-4 py-2.5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
                      >
                        <TechnologyIcon
                          name={technology}
                          className="h-4 w-4 shrink-0 text-gold"
                        />

                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </ProjectSection>
            </Reveal>

            {/* Deployment */}
            {(deployment.hospital ||
              deployment.demo) && (
              <Reveal>
                <ProjectSection title="Deployment">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {deployment.hospital && (
                      <GlassCard
                        className="h-full hover:-translate-y-1"
                        contentClassName="p-5 sm:p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                            <Server className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                              Hospital Environment
                            </p>

                            <p className="mt-2 text-sm leading-7 text-foreground sm:text-base">
                              {deployment.hospital}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    )}

                    {deployment.demo && (
                      <GlassCard
                        className="h-full hover:-translate-y-1"
                        contentClassName="p-5 sm:p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                            <Cloud className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                              Demo Environment
                            </p>

                            <p className="mt-2 text-sm leading-7 text-foreground sm:text-base">
                              {deployment.demo}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    )}
                  </div>
                </ProjectSection>
              </Reveal>
            )}

            {/* Project team */}
            {contributors.length > 0 && (
              <Reveal>
                <ProjectSection title="Project Team">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {contributors.map(
                      (contributor, index) => (
                        <GlassCard
                          key={`${contributor.name}-${contributor.role}-${index}`}
                          className="h-full hover:-translate-y-1"
                          contentClassName="p-5 sm:p-6"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                                {contributor.role}
                              </p>

                              <p
                                dir="auto"
                                className="mt-2 text-base leading-7 text-foreground"
                              >
                                {contributor.name}
                              </p>
                            </div>

                            {contributor.linkedin && (
                              <a
                                href={
                                  contributor.linkedin
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${contributor.name} LinkedIn profile`}
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </GlassCard>
                      ),
                    )}
                  </div>
                </ProjectSection>
              </Reveal>
            )}
          </article>
        </Container>
      </main>
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
  const githubUrl =
    github && github !== "#" ? github : null;

  const liveUrl =
    live && live !== "#" ? live : null;

  if (!githubUrl && !liveUrl) {
    return null;
  }

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-4 py-2.5 text-sm font-medium text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-background"
        >
          <FaGithub className="h-4 w-4" />
          View Code
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
        >
          Live Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
};

function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="mt-12 border-t border-brand-border pt-9 sm:mt-14 sm:pt-10">
      <h2 className="mb-6 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">
        {title}
      </h2>

      {children}
    </section>
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
    <ProjectSection title={title}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-4 rounded-2xl border border-brand-border bg-surface/20 p-5 text-sm leading-7 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 sm:text-base"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}

type InformationCardProps = {
  icon: React.ComponentType<{
    className?: string;
  }>;
  label: string;
  value: string;
};

function InformationCard({
  icon: Icon,
  label,
  value,
}: InformationCardProps) {
  return (
    <GlassCard
      className="h-full hover:-translate-y-1"
      contentClassName="flex h-full items-start gap-3 p-4"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 text-gold">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
          {label}
        </p>

        <p className="mt-1.5 text-sm leading-6 text-foreground">
          {value}
        </p>
      </div>
    </GlassCard>
  );
}