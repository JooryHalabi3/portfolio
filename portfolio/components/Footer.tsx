import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="tracking-[6px] text-[#D6BA74]">
            JH
          </p>

          <p className="text-sm text-[#AAB6C8]">
            © 2026 Joory Halabi. All rights reserved.
          </p>

        </div>

      </Container>
    </footer>
  );
}