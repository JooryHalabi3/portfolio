import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function GlassCard({
  children,
  className,
  contentClassName,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[#D6BA74]/20
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D6BA74]/40
          hover:shadow-[0_0_45px_rgba(214,186,116,.12)]
        `,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D6BA74]/60 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#D6BA74]/30 via-transparent to-transparent"
      />

      <div
        className={cn(
          "relative z-10 p-8",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}