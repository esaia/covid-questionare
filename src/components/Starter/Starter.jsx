import React from "react";
import { Logo } from "@/components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Starter = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10 ">
      <motion.div
        initial={{ scale: 30 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
      >
        <Logo className="w-40" />
      </motion.div>
      <div className="w-64 h-30  flex justify-center items-start overflow-hidden">
        <motion.div
          initial={{ translateY: -130 }}
          animate={{ translateY: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1.3,
            delay: 0.4,
          }}
        >
          <Link to="/personal">
            <h1 className="font-bolds text-3xl w-40 text-center cursor-pointer hover:drop-shadow-lg ">
              კითხვარის დაწყება
            </h1>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Starter;
