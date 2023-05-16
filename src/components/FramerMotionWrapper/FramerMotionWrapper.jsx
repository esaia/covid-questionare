import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContextVariables } from "@/hooks";

const FramerMotionWrapper = ({ children }) => {
  const { currentPage } = useContextVariables();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerMotionWrapper;
