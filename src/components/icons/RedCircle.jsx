import React from "react";
import { motion } from "framer-motion";

const RedCircle = () => {
  return (
    <div className="absolute top-0 left-0 ">
      <svg width="700" height="700" viewBox="0 0 700 700" fill="#803480">
        <motion.ellipse
          initial={{ cx: 350, cy: 200, rx: 300, ry: 40 }}
          animate={{ cx: 210, cy: 300, rx: 100, ry: 100 }}
          exit={{ cx: 350, cy: 200, rx: 300, ry: 40 }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
          }}
          fill="#DD3939"
        />
      </svg>
    </div>
  );
};

export default RedCircle;
