import { PROJECTS } from "@/constants";
import {
    Container,
    GlassCard,
    Reveal,
    Section,
    SectionTitle,
} from "@/components/ui";

export default function SelectedWork() {
    return (
        <Section id="projects">
            <Container>
                {/* عنوان القسم */}
                <Reveal>
                    <div className="mb-16 text-center md:mb-20">
                        <SectionTitle
                            subtitle="Selected Work"
                            title="Featured Projects"
                            description="A selection of software solutions built across AI, mobile development, backend systems, and enterprise platforms."
                        />
                    </div>
                </Reveal>

                {/* قائمة المشاريع */}
                <div className="space-y-8 md:space-y-10">
                    {PROJECTS.map((project, index) => (
                        <Reveal
                            key={project.title}
                            delay={index * 0.12}
                        >
                            <GlassCard className="overflow-hidden">
                                <div className="grid lg:grid-cols-2">
                                    {/* TODO: استبدلي هذا الجزء بصورة المشروع لاحقًا */}
                                    <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-brand-border bg-white/5 lg:min-h-96 lg:border-r lg:border-b-0">
                                        {/* خلفية زخرفية خفيفة */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-surface-light/30" />

                                        <div className="relative z-10 px-6 text-center">
                                            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
                                                Project Preview
                                            </p>

                                            <p className="mt-4 font-[var(--font-heading)] text-3xl text-gold-light md:text-4xl">
                                                {project.title}
                                            </p>

                                            {/* TODO: ستُحذف هذه العبارة بعد إضافة صورة المشروع */}
                                            <p className="mt-3 text-sm text-text-secondary">
                                                Visual showcase coming soon
                                            </p>
                                        </div>
                                    </div>

                                    {/* محتوى المشروع */}
                                    <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                                                {project.category}
                                            </p>

                                            <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold text-foreground sm:text-4xl">
                                                {project.title}
                                            </h3>

                                            <p className="mt-5 max-w-xl leading-8 text-text-secondary">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div>
                                            {/* التقنيات المستخدمة */}
                                            <div className="mt-8 flex flex-wrap gap-3">
                                                {project.technologies.map((technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-full border border-brand-border bg-white/[0.02] px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-gold hover:text-gold-light"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* TODO: أضيفي روابط GitHub والمشروع المباشر داخل constants/projects.ts */}
                                            <p className="mt-9 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                                                Case study coming soon
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}