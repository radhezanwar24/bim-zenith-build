import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

const offsets = {
  up: { y: 28 },
  left: { x: -34 },
  right: { x: 34 },
  scale: { scale: 0.96 },
} as const;

export function MotionReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? { opacity: 1 } : { opacity: 0, ...offsets[direction] };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
