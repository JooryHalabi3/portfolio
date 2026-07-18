"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;

  // TODO: عدّلي مدة الحركة لاحقًا إذا تبينها أسرع أو أبطأ
  duration?: number;

  // TODO: المسافة التي يبدأ منها العنصر قبل الظهور
  distance?: number;

  // TODO: تأخير ظهور العنصر بالثواني
  delay?: number;

  // TODO: اتجاه دخول العنصر
  direction?: "up" | "down" | "left" | "right";

  // TODO: اجعليها true إذا تبين الحركة تتكرر كل مرة يظهر العنصر
  repeat?: boolean;
};

const getInitialPosition = (
  direction: RevealProps["direction"],
  distance: number,
) => {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance };

    case "left":
      return { x: distance, y: 0 };

    case "right":
      return { x: -distance, y: 0 };

    case "up":
    default:
      return { x: 0, y: distance };
  }
};

export default function Reveal({
  children,
  className,
  duration = 0.7,
  distance = 32,
  delay = 0,
  direction = "up",
  repeat = false,
}: RevealProps) {
  const initialPosition = getInitialPosition(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        // الحركة تعمل مرة واحدة افتراضيًا
        once: !repeat,

        // يبدأ الظهور عندما يدخل جزء من العنصر داخل الشاشة
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}