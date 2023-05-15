import React from "react";
import { motion } from "framer-motion";

const FramerMotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 2, translateX: 200 }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotionWrapper;
