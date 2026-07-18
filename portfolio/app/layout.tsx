import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  // TODO: غيّري إلى اسمك + المسمى الوظيفي
  title: "Joory Halabi | Software Engineer",

  // TODO: اكتبي وصفًا يعبر عن خبرتك (حوالي 150-160 حرف)
  description:
    "Software Engineer specializing in backend development, enterprise systems, AI-powered applications, and scalable software solutions.",

  // TODO: أضيفي أو عدلي الكلمات المفتاحية حسب تخصصك
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "FastAPI",
    "React Native",
    "AI",
    "Portfolio",
    "Saudi Arabia",
  ],

  // TODO: اسم صاحب الموقع
  authors: [{ name: "Joory Halabi" }],

  // TODO: اسم صاحب الموقع
  creator: "Joory Halabi",

  // TODO: بعد نشر الموقع استبدلي بالرابط الحقيقي
  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    // TODO: غيّري العنوان إذا غيرتي عنوان الموقع
    title: "Joory Halabi | Software Engineer",

    // TODO: اكتبي وصف مناسب للمشاركة على LinkedIn وX وغيرها
    description:
      "Software Engineer specializing in backend systems, enterprise applications, and AI-powered solutions.",

    // TODO: رابط الموقع الحقيقي
    url: "https://your-domain.com",

    // TODO: اسم الموقع
    siteName: "Joory Halabi Portfolio",

    images: [
      {
        // TODO: ضعي صورة Open Graph احترافية 1200×630 داخل public
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    // TODO: عنوان المشاركة في تويتر/X
    title: "Joory Halabi | Software Engineer",

    // TODO: وصف المشاركة في تويتر/X
    description:
      "Backend Engineer • Full Stack Developer • AI Solutions",

    // TODO: نفس صورة Open Graph أو صورة خاصة بتويتر
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    // TODO: استبدلي بالأيقونة الخاصة بموقعك
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO: إذا أضفتِ نسخة عربية للموقع غيّري lang حسب اللغة */}
      <body className={`${cormorant.variable} ${geist.variable}`}>
        {children}
      </body>
    </html>
  );
}