import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Joory Halabi | Software Engineer",
    template: "%s | Joory Halabi",
  },

  description:
    "Portfolio of Joory Halabi, a Software Engineer specializing in backend development, full-stack applications, enterprise healthcare systems, and AI-powered solutions.",

  keywords: [
    "Joory Halabi",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js",
    "FastAPI",
    "Python",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "API Development",
    "Database Design",
    "AI Applications",
    "Saudi Arabia",
    "Software Engineering Portfolio",
  ],

  authors: [{ name: "Joory Halabi" }],
  creator: "Joory Halabi",
  publisher: "Joory Halabi",

  openGraph: {
    title: "Joory Halabi | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, full-stack applications, healthcare platforms, and AI-powered solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Joory Halabi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 2048,
        height: 512,
        alt: "Joory Halabi | Software Engineer and Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Joory Halabi | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, full-stack applications, and AI-powered solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${cormorantGaramond.variable} min-h-screen bg-background font-[var(--font-body)] text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}