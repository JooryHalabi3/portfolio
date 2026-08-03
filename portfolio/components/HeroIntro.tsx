"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Binary,
  Braces,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Database,
  HardDrive,
  Keyboard,
  Laptop,
  Monitor,
  Network,
  Router,
  Server,
  Terminal,
  Wifi,
} from "lucide-react";
const INTRO_DURATION = 4200;
const INTRO_STORAGE_KEY =
  "portfolio-intro-played";
let introPlayedInCurrentSession = false;

export default function HeroIntro() {
  const [isVisible, setIsVisible] = useState(
    () => !introPlayedInCurrentSession,
  );

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const alreadyPlayed =
      introPlayedInCurrentSession ||
      window.sessionStorage.getItem(
        INTRO_STORAGE_KEY,
      ) === "true";

    if (alreadyPlayed || shouldReduceMotion) {
      introPlayedInCurrentSession = true;

      window.sessionStorage.setItem(
        INTRO_STORAGE_KEY,
        "true",
      );

      setIsVisible(false);
      document.body.style.overflow = "";

      return;
    }

    introPlayedInCurrentSession = true;

    window.sessionStorage.setItem(
      INTRO_STORAGE_KEY,
      "true",
    );

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-[100] overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Main background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background"
          />

          {/* Soft background lighting */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[43%] h-[65vh] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface/55 blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="absolute -left-[15%] bottom-[-25%] h-[55vh] w-[50vw] rounded-full bg-gold/[0.06] blur-[130px]"
          />

          <div
            aria-hidden="true"
            className="absolute -right-[12%] top-[-20%] h-[50vh] w-[45vw] rounded-full bg-gold-light/[0.04] blur-[130px]"
          />

          {/* Subtle moving grid */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(214,186,116,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(214,186,116,0.18) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "56px 56px"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Circuit paths */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id="circuit-gold"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#D6BA74"
                  stopOpacity="0"
                />

                <stop
                  offset="48%"
                  stopColor="#D6BA74"
                  stopOpacity="0.52"
                />

                <stop
                  offset="100%"
                  stopColor="#E8D6A2"
                  stopOpacity="0.04"
                />
              </linearGradient>

              <linearGradient
                id="circuit-muted"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#17345F"
                  stopOpacity="0"
                />

                <stop
                  offset="50%"
                  stopColor="#D6BA74"
                  stopOpacity="0.24"
                />

                <stop
                  offset="100%"
                  stopColor="#17345F"
                  stopOpacity="0"
                />
              </linearGradient>

              <filter id="gold-glow">
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="soft-gold-glow">
                <feGaussianBlur
                  stdDeviation="8"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left paths */}
            <CircuitPath
              path="M0 185 H105 L150 230 H300 L350 180 H515"
              stroke="url(#circuit-muted)"
              delay={0}
            />

            <CircuitPath
              path="M0 310 H85 L130 265 H245 L295 315 H455"
              stroke="url(#circuit-gold)"
              delay={0.15}
            />

            <CircuitPath
              path="M0 460 H120 L165 415 H275 L325 465 H475"
              stroke="url(#circuit-muted)"
              delay={0.3}
            />

            <CircuitPath
              path="M0 600 H145 L195 550 H355 L410 605 H555"
              stroke="url(#circuit-gold)"
              delay={0.45}
            />

            <CircuitPath
              path="M0 730 H115 L160 685 H280 L330 730 H485"
              stroke="url(#circuit-muted)"
              delay={0.65}
            />

            {/* Right paths */}
            <CircuitPath
              path="M1600 165 H1485 L1435 215 H1280 L1235 170 H1080"
              stroke="url(#circuit-gold)"
              delay={0.1}
            />

            <CircuitPath
              path="M1600 300 H1510 L1460 350 H1320 L1270 300 H1115"
              stroke="url(#circuit-muted)"
              delay={0.25}
            />

            <CircuitPath
              path="M1600 450 H1480 L1435 405 H1300 L1250 455 H1090"
              stroke="url(#circuit-muted)"
              delay={0.4}
            />

            <CircuitPath
              path="M1600 595 H1455 L1410 550 H1260 L1215 595 H1080"
              stroke="url(#circuit-gold)"
              delay={0.55}
            />

            <CircuitPath
              path="M1600 735 H1490 L1440 685 H1310 L1260 735 H1110"
              stroke="url(#circuit-muted)"
              delay={0.7}
            />

            {/* Moving circuit lights */}
            <circle
              r="5"
              fill="#E8D6A2"
              filter="url(#gold-glow)"
            >
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                path="M0 310 H85 L130 265 H245 L295 315 H455"
              />
            </circle>

            <circle
              r="5"
              fill="#D6BA74"
              filter="url(#gold-glow)"
            >
              <animateMotion
                dur="3.9s"
                repeatCount="indefinite"
                path="M1600 595 H1455 L1410 550 H1260 L1215 595 H1080"
              />
            </circle>

            <circle
              r="4"
              fill="#D6BA74"
              filter="url(#soft-gold-glow)"
            >
              <animateMotion
                dur="4.1s"
                repeatCount="indefinite"
                path="M0 185 H105 L150 230 H300 L350 180 H515"
              />
            </circle>

            <circle
              r="4"
              fill="#D6BA74"
              filter="url(#soft-gold-glow)"
            >
              <animateMotion
                dur="4.4s"
                repeatCount="indefinite"
                path="M1600 300 H1510 L1460 350 H1320 L1270 300 H1115"
              />
            </circle>

            {/* Glowing nodes */}
            {[
              [85, 310],
              [245, 265],
              [145, 600],
              [355, 550],
              [1485, 165],
              [1435, 215],
              [1455, 595],
              [1260, 550],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill="#D6BA74"
                filter="url(#gold-glow)"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0.18, 0.9, 0.18],
                  scale: [0.7, 1.2, 0.7],
                }}
                transition={{
                  duration: 2.2,
                  delay: index * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Computer and technology icons */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {/* Left side */}
            <FloatingTechIcon
              Icon={Database}
              className="left-[5%] top-[15%]"
              delay={0.15}
            />

            <FloatingTechIcon
              Icon={Server}
              className="left-[16%] top-[29%]"
              delay={0.35}
            />

            <FloatingTechIcon
              Icon={Monitor}
              className="left-[5%] top-[49%]"
              delay={0.55}
            />

            <FloatingTechIcon
              Icon={Code2}
              className="bottom-[27%] left-[15%]"
              delay={0.75}
            />

            <FloatingTechIcon
              Icon={Keyboard}
              className="bottom-[12%] left-[6%] hidden sm:flex"
              delay={0.95}
            />

            <FloatingTechIcon
              Icon={HardDrive}
              className="bottom-[8%] left-[27%] hidden lg:flex"
              delay={1.15}
            />

            <FloatingTechIcon
              Icon={Binary}
              className="left-[28%] top-[12%] hidden lg:flex"
              delay={1.3}
            />

            {/* Right side */}
            <FloatingTechIcon
              Icon={Cloud}
              className="right-[6%] top-[15%]"
              delay={0.25}
            />

            <FloatingTechIcon
              Icon={Cpu}
              className="right-[16%] top-[29%]"
              delay={0.45}
            />

            <FloatingTechIcon
              Icon={Laptop}
              className="right-[5%] top-[49%]"
              delay={0.65}
            />

            <FloatingTechIcon
              Icon={Network}
              className="right-[15%] bottom-[27%]"
              delay={0.85}
            />

            <FloatingTechIcon
              Icon={Terminal}
              className="right-[6%] bottom-[12%] hidden sm:flex"
              delay={1.05}
            />

            <FloatingTechIcon
              Icon={Router}
              className="right-[27%] bottom-[8%] hidden lg:flex"
              delay={1.25}
            />

            <FloatingTechIcon
              Icon={CircuitBoard}
              className="right-[28%] top-[12%] hidden lg:flex"
              delay={1.4}
            />

            <FloatingTechIcon
              Icon={Wifi}
              className="bottom-[5%] left-1/2 hidden -translate-x-1/2 md:flex"
              delay={1.55}
            />

            <FloatingTechIcon
              Icon={Braces}
              className="left-1/2 top-[8%] hidden -translate-x-1/2 md:flex"
              delay={1.7}
            />
          </div>

          {/* Small gold particles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {[
              ["left-[9%] top-[12%]", 0],
              ["left-[20%] top-[75%]", 0.3],
              ["left-[31%] top-[19%]", 0.6],
              ["right-[30%] top-[16%]", 0.9],
              ["right-[19%] top-[72%]", 1.2],
              ["right-[8%] top-[41%]", 1.5],
            ].map(([position, delay], index) => (
              <motion.span
                key={index}
                className={`absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(214,186,116,0.65)] ${position}`}
                animate={{
                  opacity: [0.15, 0.8, 0.15],
                  scale: [0.7, 1.25, 0.7],
                }}
                transition={{
                  duration: 2.3,
                  delay: Number(delay),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Logo image */}
          <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{
                opacity: 0,
                scale: 0.86,
                y: 28,
                filter: "blur(14px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Subtle glow behind logo */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-[20%] rounded-full bg-gold/[0.07] blur-[75px]"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.94, 1.05, 0.94],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative aspect-[4/1] w-full"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/brand/intro-logo.png"
                  alt="Joory Halabi — Software Engineer and Full Stack Developer"
                  fill
                  priority
                  sizes="(min-width: 1024px) 672px, 92vw"
                  className="object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.4)]"
                />
              </motion.div>

              {/* Metallic shine */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-[16%] w-14 -skew-x-12 bg-gradient-to-r from-transparent via-gold-light/20 to-transparent blur-md"
                initial={{
                  left: "-15%",
                  opacity: 0,
                }}
                animate={{
                  left: ["-15%", "108%"],
                  opacity: [0, 0.65, 0],
                }}
                transition={{
                  delay: 1,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2.8,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Bottom progress line */}
          <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-brand-border">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_14px_rgba(214,186,116,0.55)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type CircuitPathProps = {
  path: string;
  stroke: string;
  delay: number;
};

function CircuitPath({
  path,
  stroke,
  delay,
}: CircuitPathProps) {
  return (
    <motion.path
      d={path}
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{
        pathLength: 0,
        opacity: 0,
      }}
      animate={{
        pathLength: 1,
        opacity: 1,
      }}
      transition={{
        pathLength: {
          delay,
          duration: 1.9,
          ease: "easeInOut",
        },
        opacity: {
          delay,
          duration: 0.5,
        },
      }}
    />
  );
}

type FloatingTechIconProps = {
  Icon: LucideIcon;
  className: string;
  delay: number;
};

function FloatingTechIcon({
  Icon,
  className,
  delay,
}: FloatingTechIconProps) {
  return (
    <motion.div
      className={`absolute flex items-center justify-center text-gold/30 ${className}`}
      initial={{
        opacity: 0,
        scale: 0.7,
        filter: "blur(7px)",
      }}
      animate={{
        opacity: [0, 0.55, 0.25, 0.45],
        scale: [0.7, 1, 0.94, 1],
        y: [0, -7, 3, 0],
        filter: "blur(0px)",
      }}
      transition={{
        opacity: {
          duration: 2.8,
          delay,
          repeat: Infinity,
          repeatDelay: 0.5,
        },
        scale: {
          duration: 3,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: 3.4,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        filter: {
          duration: 0.7,
          delay,
        },
      }}
    >
      <Icon
        className="h-7 w-7 drop-shadow-[0_0_8px_rgba(214,186,116,0.28)] sm:h-9 sm:w-9"
        strokeWidth={1.1}
      />

      <motion.span
        className="absolute -right-2 -bottom-2 h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_9px_rgba(214,186,116,0.6)]"
        animate={{
          opacity: [0.15, 0.8, 0.15],
          scale: [0.75, 1.15, 0.75],
        }}
        transition={{
          duration: 1.9,
          delay,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}