import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import { JOURNEY } from "@/constants/journey";
import Reveal from "@/components/ui/Reveal";
const journey = [
  {
    year: "2026",
    title: "Software Engineer",
    company: "Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2025",
    title: "Software Engineering Intern",
    company: "Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2022",
    title: "Started University",
    company: "Umm Al-Qura University",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Journey() {
  return (
    <Section id="experience">
      <Container>

        <div className="mb-20 text-center">
          <p className="uppercase tracking-[6px] text-[#D6BA74]">
            Journey
          </p>

          <h2
            className="mt-4 text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            My Journey
          </h2>
        </div>

        <div className="space-y-8">

          {journey.map((item) => (

            <GlassCard key={item.year}>

              <div className="grid gap-10 md:grid-cols-[120px_1fr]">

                <div>

                  <span className="text-4xl font-semibold text-[#D6BA74]">
                    {item.year}
                  </span>

                </div>

                <div>

                  <h3 className="text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 uppercase tracking-[3px] text-[#D6BA74]">
                    {item.company}
                  </p>

                  <p className="mt-6 leading-8 text-[#AAB6C8]">
                    {item.description}
                  </p>

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </Container>
    </Section>
  );
}