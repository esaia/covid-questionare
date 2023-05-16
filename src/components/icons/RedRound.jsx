import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RedRound = () => {
  const [animateCircle, setAnimateCircle] = useState(true);

  return (
    <div className="absolute top-44 left-20 ">
      <svg
        width="229"
        height="229"
        viewBox="0 0 229 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
          cx="114"
          cy="114"
          r="114"
          fill="#DD3939"
        />
      </svg>
    </div>
  );
};

export default RedRound;
