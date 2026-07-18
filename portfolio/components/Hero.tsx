"use client";

import { motion } from "framer-motion";
import Background from "./ui/Background";
import Container from "./ui/Container";
import Button from "./ui/button";
import HeroDecoration from "./ui/HeroDecoration";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Background />
      <HeroDecoration />

      <Container>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">

          {/* Monogram */}
          <motion.p
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-6xl font-semibold tracking-[14px] text-[#D6BA74]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            JH
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="text-6xl md:text-8xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            JOORY HALABI
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-6 uppercase tracking-[6px] text-[#D6BA74]"
          >
            Software Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
            className="mt-10 max-w-2xl text-lg leading-9 text-[#AAB6C8]"
          >
            Building thoughtful digital experiences with elegant design,
            clean architecture, and meaningful user experiences.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .6 }}
            className="mt-14"
          >
            <Button>
              Selected Work
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute bottom-14 text-sm tracking-[4px] text-[#AAB6C8]"
          >
            SCROLL
          </motion.div>

        </div>
      </Container>
    </section>
  );
}