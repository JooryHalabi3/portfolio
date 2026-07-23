import { CAPABILITIES } from "@/constants";
import {
    Container,
    GlassCard,
    Reveal,
    Section,
    SectionTitle,
} from "@/components/ui";

export default function Capabilities() {
    return (
        <Section id="skills">
            <Container>
                <Reveal>
                    <div className="mb-16 text-center">
                        <SectionTitle
                            subtitle="Capabilities"
                            title="What I Build"
                            description="My primary areas of expertise across backend engineering, databases, full-stack development, and AI-powered systems."
                        />
                    </div>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2">
                    {CAPABILITIES.map((capability, index) => (
                        <Reveal
                            key={capability.title}
                            delay={index * 0.1}
                        >
                            <GlassCard className="h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold">
                                <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-gold-light">
                                    {capability.title}
                                </h3>

                                <p className="mt-5 leading-8 text-text-secondary">
                                    {capability.description}
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {capability.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-brand-border px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-gold hover:text-gold-light"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}