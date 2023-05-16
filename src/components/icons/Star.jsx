import React from "react";
import { motion } from "framer-motion";

const Star = () => {
  return (
    <div className="absolute top-0 left-[50%] translate-x-[-50%] transition-all ">
      <motion.svg
        initial={{ viewBox: "0 0 800 200" }}
        animate={{ viewBox: "0 0 800 600" }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        // viewBox="0 0 800 600"
        width="750"
        height="513"
        fill="none"
      >
        <path
          d="M114.5 62L124.5 0.5L161 62L280 43.5L186 94.5L288 174L153.5 126.5L18.5 312.5L114.5 106.5L0 85L114.5 62Z"
          fill="#C9CB6A"
        />
      </motion.svg>
    </div>
  );
};

export default Star;
