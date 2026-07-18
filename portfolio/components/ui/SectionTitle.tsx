type Props = {
  subtitle?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 max-w-3xl">
      {subtitle && (
        <p className="mb-3 uppercase tracking-[4px] text-[#D6BA74] text-sm">
          {subtitle}
        </p>
      )}

      <h2
        className="text-4xl md:text-5xl font-semibold leading-tight"
        style={{
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-gray-300 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}