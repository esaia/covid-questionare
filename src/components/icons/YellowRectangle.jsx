import React from "react";
import { motion } from "framer-motion";

const YellowRectangle = () => {
  return (
    <div className="absolute top-0 left-[50%] translate-x-[-50%] transition-all">
      <svg width="622" height="412" viewBox="0 0 622 75">
        <motion.rect
          initial={{ width: "100px", height: "30px", y: "40px" }}
          animate={{ width: "622px", height: "75px", y: "20px" }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          fill="#D6D16E"
        />
      </svg>
    </div>
  );
};

export default YellowRectangle;
