import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

const capabilities = [
  {
    title: "Frontend",
    description:
      "Creating modern, responsive and interactive user interfaces.",
  },
  {
    title: "Backend",
    description:
      "Designing scalable APIs and efficient server-side systems.",
  },
  {
    title: "Mobile",
    description:
      "Developing cross-platform mobile applications.",
  },
  {
    title: "Databases",
    description:
      "Structuring reliable and optimized database solutions.",
  },
  {
    title: "UI / UX",
    description:
      "Designing clean experiences with attention to usability.",
  },
  {
    title: "Cloud",
    description:
      "Deploying and maintaining modern cloud-based applications.",
  },
];

export default function Capabilities() {
  return (
    <Section id="skills">
      <Container>

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[6px] text-[#D6BA74]">
            Capabilities
          </p>

          <h2
            className="mt-4 text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            What I Build
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {capabilities.map((item) => (

            <GlassCard
              key={item.title}
              className="group min-h-[260px]"
            >

              <div className="flex h-full flex-col justify-between">

                <span className="text-6xl text-[#D6BA74]/20 transition group-hover:text-[#D6BA74]/40">
                  ✦
                </span>

                <div>

                  <h3 className="text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#AAB6C8]">
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