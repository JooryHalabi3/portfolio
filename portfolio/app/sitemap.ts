import type { MetadataRoute } from "next";

import { PROJECTS } from "@/constants";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://jooryhalabi3.github.io/portfolio"
  ).replace(/\/$/, "");

  const homePages: MetadataRoute.Sitemap =
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,

      alternates: {
        languages: {
          ar: `${baseUrl}/ar`,
          en: `${baseUrl}/en`,
        },
      },
    }));

  const projectPages: MetadataRoute.Sitemap =
    locales.flatMap((locale) =>
      PROJECTS.map((project) => ({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,

        alternates: {
          languages: {
            ar: `${baseUrl}/ar/projects/${project.slug}`,
            en: `${baseUrl}/en/projects/${project.slug}`,
          },
        },
      })),
    );

  return [...homePages, ...projectPages];
}