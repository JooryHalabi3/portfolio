interface BlurGlowProps {
  className?: string;
}

export default function BlurGlow({
  className = "",
}: BlurGlowProps) {
  return (
    <div
      className={`
      absolute
      rounded-full
      bg-[#D6BA74]/20
      blur-[120px]
      ${className}
      `}
    />
  );
}