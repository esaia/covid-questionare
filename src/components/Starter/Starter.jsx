import React from "react";
import { Logo } from "@/components";
import useStarter from "./useStarter";
import { motion } from "framer-motion";

const Starter = () => {
  const { changePage } = useStarter();
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
          <h1
            className="font-bolds text-3xl w-40 text-center cursor-pointer"
            onClick={changePage}
          >
            კითხვარის დაწყება
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Starter;
