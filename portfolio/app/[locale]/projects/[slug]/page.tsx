import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Server,
  UserRound,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import ProjectGallery from "@/components/ProjectGallery";
import ProjectHeader from "@/components/ProjectHeader";
import TechnologyIcon from "@/components/TechnologyIcon";
import {
  Container,
  GlassCard,
  Reveal,
} from "@/components/ui";

import { PROJECTS } from "@/constants";
import { getDictionary } from "@/dictionaries";
import {
  isLocale,
  locales,
} from "@/lib/i18n";

type ProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PROJECTS.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS.find(
    (projectItem) =>
      projectItem.slug === slug,
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
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = PROJECTS.find(
    (projectItem) =>
      projectItem.slug === slug,
  );

  if (!project) {
    notFound();
  }

  const dictionary = getDictionary(locale);
const isArabic = locale === "ar";
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
    "deployment" in project &&
    project.deployment
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
      <ProjectHeader
        title={project.title}
        locale={locale}
        dictionary={dictionary}
      />

      <main className="pb-12 pt-32 sm:pb-16">
        <Container>
<article
  dir="ltr"
  className="mx-auto max-w-6xl"
>            {/* Project hero and gallery */}
            <Reveal>
<section
  dir="ltr"
  className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14"
>                {/* Project information */}
<div
  dir={isArabic ? "rtl" : "ltr"}
  className={
    isArabic ? "text-right" : "text-left"
  }
>                  <p 
  dir="auto"
className="text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm">
                    {project.category}
                  </p>

                  <h1
                    dir="auto"
                  className="mt-5 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>

                  <p 
                    dir="auto"
                  className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-7">
                    <ProjectLinks
                      github={project.github}
                      live={project.live}
                      viewCodeLabel={
                        dictionary.actions.viewCode
                      }
                      liveProjectLabel={
                        dictionary.actions.liveProject
                      }
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
                <ProjectSection
                  title={
                    dictionary.project.overview
                  }
                >
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
                          label={
                            dictionary.project
                              .organization
                          }
                          value={organization}
                        />
                      )}

                      {duration && (
                        <InformationCard
                          icon={CalendarDays}
                          label={
                            dictionary.project.duration
                          }
                          value={duration}
                        />
                      )}

                      {projectType && (
                        <InformationCard
                          icon={UserRound}
                          label={
                            dictionary.project
                              .projectType
                          }
                          value={projectType}
                        />
                      )}

                      {status && (
                        <InformationCard
                          icon={CheckCircle2}
                          label={
                            dictionary.project.status
                          }
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
                <ProjectSection
                  title={dictionary.project.role}
                >
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
                  title={
                    dictionary.project.contributions
                  }
                  items={contributions}
                />
              </Reveal>
            )}

            {/* Features */}
            {features.length > 0 && (
              <Reveal>
                <ProjectListSection
                  title={
                    dictionary.project.features
                  }
                  items={features}
                />
              </Reveal>
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <Reveal>
                <ProjectListSection
                  title={
                    dictionary.project.challenges
                  }
                  items={challenges}
                />
              </Reveal>
            )}

            {/* Technologies */}
            <Reveal>
              <ProjectSection
                title={
                  dictionary.project.technologies
                }
              >
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
                <ProjectSection
                  title={
                    dictionary.project.deployment
                  }
                >
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
                              {
                                dictionary.project
                                  .hospitalEnvironment
                              }
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
                              {
                                dictionary.project
                                  .demoEnvironment
                              }
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
                <ProjectSection
                  title={dictionary.project.team}
                >
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
  viewCodeLabel: string;
  liveProjectLabel: string;
};

function ProjectLinks({
  github,
  live,
  viewCodeLabel,
  liveProjectLabel,
}: ProjectLinksProps) {
  const githubUrl =
    github && github !== "#"
      ? github
      : null;

  const liveUrl =
    live && live !== "#"
      ? live
      : null;

  const hasBothLinks =
    Boolean(githubUrl) &&
    Boolean(liveUrl);

  if (!githubUrl && !liveUrl) {
    return null;
  }

  return (
    <div
      dir="ltr"
      className={`grid w-full gap-3 ${
        hasBothLinks
          ? "grid-cols-2"
          : "grid-cols-1"
      }`}
    >
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-4 py-2.5 text-sm font-medium text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-background"
        >
          <FaGithub className="h-4 w-4" />

          <span dir="auto">
            {viewCodeLabel}
          </span>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
        >
          <span dir="auto">
            {liveProjectLabel}
          </span>

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
   <h2
  dir="auto"
  className="mb-6 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl"
>
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
  dir="auto"
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
   <p
  dir="auto"
  className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold"
>
  {label}
</p>

<p
  dir="auto"
  className="mt-1.5 text-sm leading-6 text-foreground"
>
  {value}
</p>
      </div>
    </GlassCard>
  );
}