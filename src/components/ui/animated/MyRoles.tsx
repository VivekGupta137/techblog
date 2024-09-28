"use client";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const MyRoles = () => {
  const roles = [
    "Sr. Software Engineer",
    "Full Stack Developer",
    "Tech Enthusiast",
  ];
  const [showIdx, setShowIdx] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setShowIdx((cur) => (cur + 1) % roles.length);
    }, 2000);
    
    return () => {
      clearInterval(counter);
    };
  }, [roles]);

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
        <AnimatePresence mode="wait">
          {roles.map(
            (role, idx) =>
              idx == showIdx && (
                <motion.div
                  key={"wrap"}
                  className="flex gap-1.5 justify-center"
                >
                  <motion.div
                    layout={"position"}
                    transition={{ type: "spring" }}
                  >
                    I&apos;m
                  </motion.div>
                  <motion.div
                    key={role}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring" },
                    }}
                    className="font-gt-bold"
                  >
                    {role}
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
};

export default MyRoles;
