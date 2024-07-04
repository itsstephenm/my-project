"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}