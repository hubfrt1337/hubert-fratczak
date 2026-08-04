"use client";

import { motion } from "framer-motion";

/**
 * Subtelne pojawienie się elementu przy scrollu.
 *
 * Uwaga: komponent NIE rozgałęzia się po stanie klienta (np. useReducedMotion),
 * bo serwer i przeglądarka dałyby wtedy różny HTML i hydration by się wysypało.
 * Systemowe "ogranicz animacje" obsługuje reguła [data-reveal] w globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const Component = motion[as];

  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
