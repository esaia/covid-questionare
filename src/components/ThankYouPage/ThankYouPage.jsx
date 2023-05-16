import React from "react";
import { ThankYouStar } from "@/components";
import { motion } from "framer-motion";

const ThankYouPage = () => {
  return (
    <div className="bg-brown h-screen flex justify-center items-center">
      <div className="w-fit p-5 relative ">
        <motion.div
          initial={{ translateY: 40, scale: 0.8, display: "none" }}
          animate={{ translateY: -10, scale: 1, display: "block" }}
          exit={{ scale: 2, translateX: 200 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 1.5,
          }}
        >
          <div className="absolute top-[-50px] left-[20px] scale-75">
            <ThankYouStar />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ scale: 2, translateX: 200 }}
          transition={{
            ease: "easeOut",
            duration: 1.4,
          }}
        >
          <h1 className="text-5xl text-white  tracking-[.10em]">მადლობა</h1>
        </motion.div>

        <motion.div
          initial={{ translateY: -40, scale: 0.8, display: "none" }}
          animate={{ translateY: 10, scale: 1, display: "block" }}
          exit={{ scale: 2, translateX: 200 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 1.5,
          }}
        >
          <div className="absolute bottom-[-40px] right-[20px] scale-50 ">
            <ThankYouStar />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
