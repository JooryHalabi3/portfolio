type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {subtitle && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
          {subtitle}
        </p>
      )}

      <h2 className="font-[var(--font-heading)] text-4xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}