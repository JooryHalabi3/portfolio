import Container from "./ui/Container";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/button";
import { ABOUT } from "@/constants/about";
import Reveal from "@/components/ui/Reveal";
export default function About() {
  return (
    <Section id="about">
      <Container>

        <div className="mx-auto max-w-5xl">

          {/* Section Label */}

          <p className="mb-4 text-center uppercase tracking-[6px] text-[#D6BA74]">
            About
          </p>

          {/* Heading */}

          <h2
            className="text-center text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Engineering Digital
            <br />
            Experiences With Purpose
          </h2>

          {/* Card */}

          <GlassCard className="mt-16">

            <div className="grid gap-16 lg:grid-cols-[1fr_280px]">

              {/* Left */}

              <div>

                <p className="leading-9 text-[#AAB6C8]">

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed vitae justo nec purus posuere faucibus.
                  Curabitur luctus, erat quis malesuada suscipit,
                  risus elit volutpat nisi, sed ultrices libero
                  ligula sit amet nibh.

                </p>

                <p className="mt-8 leading-9 text-[#AAB6C8]">

                  Integer eget neque ut lorem luctus pellentesque.
                  Nulla facilisi. Praesent tincidunt
                  sem vel orci feugiat,
                  non pellentesque est volutpat.

                </p>

                <Button
                  className="mt-12"
                  variant="outline"
                >
                  Download Resume
                </Button>

              </div>

              {/* Right */}

              <div className="space-y-10">

                <div>

                  <p className="text-sm uppercase tracking-[4px] text-[#D6BA74]">
                    Based In
                  </p>

                  <h3 className="mt-2 text-2xl">
                    Saudi Arabia
                  </h3>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[4px] text-[#D6BA74]">
                    Focus
                  </p>

                  <h3 className="mt-2 text-2xl">
                    Full Stack
                    <br />
                    Development
                  </h3>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[4px] text-[#D6BA74]">
                    Availability
                  </p>

                  <h3 className="mt-2 text-2xl">
                    Open to Opportunities
                  </h3>

                </div>

              </div>

            </div>

          </GlassCard>

        </div>

      </Container>
    </Section>
  );
}