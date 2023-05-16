import React from "react";
import { motion } from "framer-motion";

const heart = () => {
  return (
    <div className="absolute top-10  left-[45%] translate-x-[-50%] transition-all">
      <motion.svg
        initial={{ width: "306px", height: "250px" }}
        animate={{ width: "196px", height: "173px" }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        width="196"
        height="173"
        viewBox="0 0 196 173"
        fill="none"
      >
        <path
          d="M48.5005 12C75.7005 9.6 94.5005 28.3333 100.501 38C110.501 1.5 143.5 0.5 161.5 0.5C179.5 0.5 203.5 22 192.5 69C183.7 106.6 144.5 153.667 126 172.5C87.6668 153.5 9.30051 107.3 2.50051 74.5C-5.99949 33.5 14.5005 15 48.5005 12Z"
          fill="#F39494"
        />
      </motion.svg>
    </div>
  );
};

export default heart;
