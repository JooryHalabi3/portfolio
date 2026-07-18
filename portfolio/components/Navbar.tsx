"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "./ui/Container";
import Button from "./ui/button";

const links = [
  { name: "The Story", href: "#about" },
  { name: "Capabilities", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Selected Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-[#081B38]/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-3xl tracking-[8px] text-[#D6BA74]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            JH
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm tracking-[2px] text-white/70 transition hover:text-[#D6BA74]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>Resume</Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#081B38]"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-white hover:text-[#D6BA74]"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}