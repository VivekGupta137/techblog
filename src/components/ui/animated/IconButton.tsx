"use client";
import { Button } from "../button";
import { motion } from "framer-motion";

const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      variant="default"
      size="icon"
      className="rounded-lg"
      aria-label="React"
    >
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    </Button>
  );
};

export default IconButton;
