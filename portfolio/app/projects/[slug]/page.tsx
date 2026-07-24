import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { PROJECTS, SITE } from "@/constants";
import { Container, GlassCard } from "@/components/ui";

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

  const hasGithubLink =
    project.github && project.github !== "#";

  const hasLiveLink =
    project.live && project.live !== "#";

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-brand-border">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-gold-light"
            >
              <ArrowLeft className="h-4 w-4" />
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
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              {project.category}
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-9 text-text-secondary">
              {project.description}
            </p>

            <GlassCard className="relative mt-12 aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project`}
                fill
                priority
                sizes="(min-width: 1280px) 1024px, 100vw"
                className="object-cover"
              />
            </GlassCard>

            <div className="mt-12 grid gap-8 border-t border-brand-border pt-10 md:grid-cols-[0.7fr_2fr]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                Technologies
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-brand-border px-4 py-2 text-sm text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {(hasGithubLink || hasLiveLink) && (
              <div className="mt-12 flex flex-wrap gap-4 border-t border-brand-border pt-10">
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
              </div>
            )}
          </article>
        </Container>
      </main>
    </div>
  );
}