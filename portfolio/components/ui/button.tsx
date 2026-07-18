"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "outline";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#D6BA74] text-[#081B38] hover:scale-[1.03]",

    secondary:
      "bg-white/5 text-white hover:bg-white/10",

    outline:
      "border border-[#D6BA74]/20 bg-transparent text-white hover:border-[#D6BA74]",
  };

  return (
    <button
      {...props}
      className={cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-full
        px-7
        py-3
        font-medium
        transition-all
        duration-300
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}