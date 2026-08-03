import type { NextConfig } from "next";

const repositoryName = "portfolio";

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true";

const basePath = isGitHubPages
  ? `/${repositoryName}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;