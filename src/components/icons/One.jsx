import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const One = () => {
  return (
    <div className="absolute top-44 left-[50%] translate-x-[-50%]">
      <svg
        width="622"
        height="75"
        viewBox="0 0 622 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          initial={{ opacity: 0, width: "20px" }}
          animate={{ opacity: 1, width: "420px" }}
          exit={{ scale: 2 }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
          width="622"
          height="75"
          fill="#D6D16E"
        />
      </svg>
    </div>
  );
};

export default One;
