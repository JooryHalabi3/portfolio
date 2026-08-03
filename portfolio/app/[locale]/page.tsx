import { notFound } from "next/navigation";

import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";

import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <>
      <Navbar
        locale={locale}
        dictionary={dictionary}
      />

      <main className="relative overflow-hidden">
        <Hero
          locale={locale}
          dictionary={dictionary}
        />

        <SelectedWork
          locale={locale}
          dictionary={dictionary}
        />

        <About
          locale={locale}
          dictionary={dictionary}
        />

        {/* Translation will be added later */}
        <Capabilities />

        {/* Translation will be added later */}
        <Journey />

        {/* Translation will be added later */}
        <Contact />
      </main>
    </>
  );
}