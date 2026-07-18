import Container from "./ui/Container";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/button";
import { CONTACT } from "@/constants/contact";
import Reveal from "@/components/ui/Reveal";
export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <GlassCard className="mx-auto max-w-5xl text-center">

          <p className="uppercase tracking-[6px] text-[#D6BA74]">
            Contact
          </p>

          <h2
            className="mt-5 text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Let's Build
            <br />
            Something Meaningful
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#AAB6C8]">
            I'm always interested in discussing new ideas,
            exciting projects, and opportunities to build
            impactful digital products.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Button>
              Send Email
            </Button>

            <Button variant="outline">
              LinkedIn
            </Button>

          </div>

        </GlassCard>
      </Container>
    </Section>
  );
}