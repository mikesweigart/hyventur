"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Per-navigation page transition for the marketing site.
 * A subtle Apple-like rise + fade on each route change.
 */
export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
