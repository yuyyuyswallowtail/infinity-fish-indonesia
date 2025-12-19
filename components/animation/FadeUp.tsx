"use client";

import { cn } from "@/lib/tailwind-merge";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeUp({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={cn("w-full", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

