import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

import { getDictionary } from "@/dictionaries";
import {
  isLocale,
  type Locale,
} from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale: localeValue } = await params;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const locale: Locale = localeValue;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Navbar
        locale={locale}
        dictionary={dictionary}
      />

   <main
  dir="ltr"
  className="relative overflow-hidden"
>
<Hero
  locale={locale}
  dictionary={dictionary}
/>  <SelectedWork />
  <About />
  <Capabilities />
  <Journey />
  <Contact />
</main>
    </>
  );
}