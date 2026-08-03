import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Server,
  UserRound,
} from "lucide-react";

import HeroIntro from "@/components/HeroIntro";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  Container,
  Reveal,
  Section,
} from "@/components/ui";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};
export default function Hero({
  locale,
  dictionary,
}: HeroProps) {
  const isArabic = locale === "ar";
  const hero = dictionary.hero;

  return (
    <>
      <HeroIntro />

      <Section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-28"
      >
        <HeroBackground />

        <Container>
          {/*
            نبقي الـ grid باتجاه LTR حتى نتحكم
            في موضع كل عمود باستخدام order.
          */}
          <div
            dir="ltr"
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* Hero text */}
            <div
              dir={isArabic ? "rtl" : "ltr"}
              className={`max-w-2xl ${
                isArabic
                  ? "text-right lg:order-2"
                  : "text-left lg:order-1"
              }`}
            >
              <Reveal>
                <p className="text-lg font-medium text-gold sm:text-xl">
                  {hero.greeting}
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-3 font-[var(--font-heading)] text-6xl font-semibold leading-[0.92] tracking-[-0.035em] text-foreground sm:text-7xl lg:text-[5.6rem]">
                  {hero.name}
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 text-lg font-medium text-gold-light sm:text-xl lg:text-2xl">
                  {hero.role}
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
                  {hero.description}
                </p>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-9 flex flex-wrap gap-4">
                 <Link
  href="#projects"
  className="group inline-flex items-center gap-3 rounded-xl border border-gold bg-gold px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
>
  {hero.primaryAction}

                    <ArrowRight
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isArabic
                          ? "rotate-180 group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </Link>

                 <Link
  href="#contact"
  className="group inline-flex items-center gap-3 rounded-xl border border-brand-border bg-surface/20 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-gold-light"
>
  {hero.secondaryAction}

                    <UserRound
                      aria-hidden="true"
                      className="h-4 w-4 text-gold transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Code window */}
            <Reveal
              direction={
                isArabic ? "right" : "left"
              }
              delay={0.2}
              distance={36}
              className={`flex h-full items-center justify-center ${
                isArabic
                  ? "lg:order-1"
                  : "lg:order-2"
              }`}
            >
              <div
                dir="ltr"
                className="w-full text-left"
              >
                <CodeWindow />
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Scroll button */}
        <Link
          href="#projects"
          aria-label={
            isArabic
              ? "الانتقال إلى المشاريع"
              : "Scroll to projects"
          }
          className="absolute bottom-7 left-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-brand-border bg-background/50 text-gold backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-surface/50 md:flex"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </Section>
    </>
  );
}

function CodeWindow() {
  return (
    <div
      dir="ltr"
      className="relative mx-auto w-full max-w-xl text-left"
    >
      {/* Corner glow */}
      <div
        aria-hidden="true"
        className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-gold/[0.08] blur-3xl"
      />

      {/* Decorative circuit */}
      <div
        aria-hidden="true"
        className="absolute -right-16 top-10 hidden lg:block"
      >
        <div className="h-px w-20 bg-gradient-to-r from-gold/50 to-transparent" />
        <div className="ml-20 h-12 w-px bg-gold/25" />
      </div>

      <div
        dir="ltr"
        className="relative overflow-hidden rounded-3xl border border-brand-border bg-surface/25 text-left backdrop-blur-md"
      >
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
          <div
            dir="ltr"
            className="flex items-center gap-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#D98B68]" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#829C76]" />
          </div>

          <div
            dir="ltr"
            className="flex items-center gap-2 text-xs text-text-secondary"
          >
            <Code2 className="h-4 w-4 text-gold" />
            developer.ts
          </div>
        </div>

        {/* Code */}
        <div
          dir="ltr"
          className="overflow-x-auto px-6 py-5 text-left sm:px-8 sm:py-6"
        >
          <pre
            dir="ltr"
            className="text-left font-mono text-[0.78rem] leading-6 text-text-secondary sm:text-sm sm:leading-7"
          >
            <code>
              <span className="text-[#D98B68]">
                const
              </span>{" "}
              <span className="text-[#8DB6D9]">
                developer
              </span>{" "}
              <span className="text-foreground">
                = {"{"}
              </span>

              {"\n  "}
              <span className="text-text-secondary">
                name:
              </span>{" "}
              <span className="text-gold-light">
                &quot;Joory Halabi&quot;
              </span>
              <span className="text-foreground">
                ,
              </span>

              {"\n  "}
              <span className="text-text-secondary">
                role:
              </span>{" "}
              <span className="text-gold-light">
                &quot;Software Engineer&quot;
              </span>
              <span className="text-foreground">
                ,
              </span>

              {"\n  "}
              <span className="text-text-secondary">
                skills:
              </span>{" "}
              <span className="text-foreground">
                [
              </span>

              {"\n    "}
              <span className="text-gold-light">
                &quot;Node.js&quot;
              </span>
              <span className="text-foreground">
                ,
              </span>

              {"\n    "}
              <span className="text-gold-light">
                &quot;React Native&quot;
              </span>
              <span className="text-foreground">
                ,
              </span>

              {"\n    "}
              <span className="text-gold-light">
                &quot;Python&quot;
              </span>
              <span className="text-foreground">
                ,
              </span>

              {"\n    "}
              <span className="text-gold-light">
                &quot;MySQL&quot;
              </span>

              {"\n  "}
              <span className="text-foreground">
                ],
              </span>

              {"\n  "}
              <span className="text-text-secondary">
                focus:
              </span>{" "}
              <span className="text-gold-light">
                &quot;Building reliable solutions&quot;
              </span>
              <span className="text-foreground">
                ,
              </span>

              {"\n  "}
              <span className="text-text-secondary">
                passion:
              </span>{" "}
              <span className="text-gold-light">
                &quot;Creating meaningful impact&quot;
              </span>

              {"\n"}
              <span className="text-foreground">
                {"};"}
              </span>

              {"\n"}
              <span className="text-gold">
                {"</>"}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      {/* Soft lighting */}
      <div className="absolute left-1/2 top-1/2 h-[60vh] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface/25 blur-[120px]" />

      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/[0.035] blur-[110px]" />

      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/[0.035] blur-[110px]" />

      {/* Left circuits */}
      <svg
        viewBox="0 0 600 900"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-full w-[38%] opacity-55"
      >
        <CircuitDefinitions />

        <CircuitLine path="M0 190 H80 L115 225 H240 L275 190 H470" />
        <CircuitLine path="M0 270 H120 L155 305 H295 L330 270 H520" />
        <CircuitLine path="M0 390 H70 L110 430 H250 L290 390 H480" />
        <CircuitLine path="M0 530 H115 L150 565 H310 L345 530 H535" />
        <CircuitLine path="M0 650 H75 L110 685 H255 L290 650 H490" />
        <CircuitLine path="M0 745 H120 L155 780 H300 L335 745 H520" />

        <CircuitNode x={80} y={190} />
        <CircuitNode x={155} y={305} />
        <CircuitNode x={110} y={430} />
        <CircuitNode x={345} y={530} />
        <CircuitNode x={110} y={685} />
      </svg>

      {/* Right circuits */}
      <svg
        viewBox="0 0 600 900"
        preserveAspectRatio="none"
        className="absolute right-0 top-0 h-full w-[38%] -scale-x-100 opacity-55"
      >
        <CircuitDefinitions />

        <CircuitLine path="M0 160 H95 L130 195 H270 L305 160 H515" />
        <CircuitLine path="M0 285 H115 L150 320 H290 L325 285 H530" />
        <CircuitLine path="M0 410 H75 L110 445 H250 L285 410 H490" />
        <CircuitLine path="M0 550 H120 L155 585 H300 L335 550 H535" />
        <CircuitLine path="M0 675 H80 L115 710 H260 L295 675 H500" />
        <CircuitLine path="M0 770 H125 L160 805 H305 L340 770 H525" />

        <CircuitNode x={95} y={160} />
        <CircuitNode x={150} y={320} />
        <CircuitNode x={110} y={445} />
        <CircuitNode x={335} y={550} />
        <CircuitNode x={115} y={710} />
      </svg>

      {/* Technical icons */}
      <Database className="absolute left-[5%] top-[22%] h-8 w-8 text-gold/18" />
      <Server className="absolute left-[16%] top-[38%] h-7 w-7 text-gold/16" />
      <Cloud className="absolute bottom-[18%] left-[7%] h-8 w-8 text-gold/16" />

      <Cpu className="absolute right-[6%] top-[20%] h-8 w-8 text-gold/18" />
      <Braces className="absolute right-[17%] top-[43%] h-7 w-7 text-gold/16" />
      <Code2 className="absolute bottom-[17%] right-[8%] h-8 w-8 text-gold/16" />
    </div>
  );
}

function CircuitDefinitions() {
  return (
    <defs>
      <linearGradient
        id="hero-circuit"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
      >
        <stop
          offset="0%"
          stopColor="#D6BA74"
          stopOpacity="0.05"
        />

        <stop
          offset="55%"
          stopColor="#D6BA74"
          stopOpacity="0.42"
        />

        <stop
          offset="100%"
          stopColor="#D6BA74"
          stopOpacity="0"
        />
      </linearGradient>

      <filter id="hero-glow">
        <feGaussianBlur
          stdDeviation="5"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

type CircuitLineProps = {
  path: string;
};

function CircuitLine({
  path,
}: CircuitLineProps) {
  return (
    <path
      d={path}
      fill="none"
      stroke="url(#hero-circuit)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

type CircuitNodeProps = {
  x: number;
  y: number;
};

function CircuitNode({
  x,
  y,
}: CircuitNodeProps) {
  return (
    <circle
      cx={x}
      cy={y}
      r="5"
      fill="#D6BA74"
      fillOpacity="0.55"
      filter="url(#hero-glow)"
    />
  );
}