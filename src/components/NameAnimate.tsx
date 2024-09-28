"use client";
import { motion } from "framer-motion";

const variants = {
  from: {
    y: 0,
  },
  to: {
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "afterChildren",
    },
  },
};
const item = {
  from: {
    y: -200,
  },
  to: {
    y: 0,
  },
};

const draw = {
  from: { pathLength: 0, opacity: 0 },
  to: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

const NameAnimate = () => {

    

  return (
    <div className="flex justify-center">
        <motion.div initial={"from"} animate={"to"} variants={variants} className="flex flex-col items-center">
      <motion.h1 className="mt-5 font-bungee-reg min-[312px]:text-4xl min-[412px]:text-5xl min-[500px]:text-6xl sm:text-7xl md:text-8xl text-center flex justify-center text-shadow">
        <motion.div variants={item}>V</motion.div>
        <motion.div variants={item}>i</motion.div>
        <motion.div variants={item}>v</motion.div>
        <motion.div variants={item}>e</motion.div>
        <motion.div variants={item}>k</motion.div>
        <motion.div className="ml-5" variants={item}>G</motion.div>
        <motion.div variants={item}>u</motion.div>
        <motion.div variants={item}>p</motion.div>
        <motion.div variants={item}>t</motion.div>
        <motion.div variants={item}>a</motion.div>
      </motion.h1>
      <motion.svg width={"100%"} height={20}>
        <motion.line
          x1="0"
          y1="0"
          x2={"100%"}
          y2="0"
          stroke="#E91E63"
          strokeLinecap={"round"}
          strokeWidth={20}
          variants={draw}
          fill={"transparent"}
        />
      </motion.svg>
    </motion.div>
    </div>
  );
};

export default NameAnimate;
