import Section from "./ui/Section";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/button";
import { PROJECTS } from "@/constants/projects";
import Reveal from "@/components/ui/Reveal";
const projects = [
  {
    title: "Project One",
    description:
      "Short description about the project goes here.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description:
      "Short description about the project goes here.",
    stack: ["Flutter", "FastAPI", "Supabase"],
  },
  {
    title: "Project Three",
    description:
      "Short description about the project goes here.",
    stack: ["Node.js", "MongoDB", "Docker"],
  },
];

export default function SelectedWork() {
  return (
    <Section id="work">
      <Container>

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[6px] text-[#D6BA74]">
            Selected Work
          </p>

          <h2
            className="mt-4 text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Featured Projects
          </h2>

        </div>

        <div className="space-y-10">

          {projects.map((project) => (

            <GlassCard
              key={project.title}
              className="overflow-hidden"
            >

              <div className="grid lg:grid-cols-2">

                {/* Placeholder Image */}

                <div className="flex min-h-[320px] items-center justify-center bg-white/5">

                  <span className="tracking-[4px] text-[#D6BA74]">
                    PROJECT PREVIEW
                  </span>

                </div>

                {/* Content */}

                <div className="flex flex-col justify-between p-10">

                  <div>

                    <h3 className="text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 leading-8 text-[#AAB6C8]">
                      {project.description}
                    </p>

                  </div>

                  <div>

                    <div className="mt-10 flex flex-wrap gap-3">

                      {project.stack.map((item) => (

                        <span
                          key={item}
                          className="rounded-full border border-[#D6BA74]/20 px-4 py-2 text-sm"
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                    <Button
                      variant="outline"
                      className="mt-10"
                    >
                      View Case Study
                    </Button>

                  </div>

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </Container>
    </Section>
  );
}