"use client";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const MyRoles = () => {
  const roles = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast"];
  const [showIdx, setShowIdx] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setShowIdx((cur) => (cur + 1) % roles.length);
    }, 2000);
    return () => {
      clearInterval(counter);
    };
  }, []);

  const variants = {
    enter: {
      opacity: 0,
      y: -20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <LayoutGroup>
      <motion.div className="flex gap-2 text-2xl">
        <motion.div
          layout
          transition={{ type: "spring"}}
        >
          Also I'm
        </motion.div>
        <AnimatePresence mode="wait">
          {roles.map(
            (role, idx) =>
              idx == showIdx && (
                <motion.div
                  key={idx}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring" },
                  }}
                  className="font-bold"
                >
                  {role}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
};

export default MyRoles;
