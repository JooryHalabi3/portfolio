import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}