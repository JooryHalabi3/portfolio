"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
  direction?: RevealDirection;
  repeat?: boolean;
  blur?: number;
  scale?: number;
  amount?: number;
};

function getInitialPosition(
  direction: RevealDirection,
  distance: number,
) {
  switch (direction) {
    case "down":
      return {
        x: 0,
        y: -distance,
      };

    case "left":
      return {
        x: distance,
        y: 0,
      };

    case "right":
      return {
        x: -distance,
        y: 0,
      };

    case "none":
      return {
        x: 0,
        y: 0,
      };

    case "up":
    default:
      return {
        x: 0,
        y: distance,
      };
  }
}

export default function Reveal({
  children,
  className,
  duration = 0.75,
  distance = 28,
  delay = 0,
  direction = "up",
  repeat = false,
  blur = 8,
  scale = 0.985,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const initialPosition = getInitialPosition(
    direction,
    distance,
  );

  return (
    <motion.div
      className={className}
      style={{
        willChange: "transform, opacity, filter",
      }}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              ...initialPosition,
              scale,
              filter: `blur(${blur}px)`,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: !repeat,
        amount,
        margin: "0px 0px -8% 0px",
      }}
      transition={{
        duration: reduceMotion ? 0.01 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}