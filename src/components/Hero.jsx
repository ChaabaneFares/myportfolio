import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect.jsx";
import { styles } from "../styles";
// import ComputersCanvas from "./canvas/ComputersCanvas.jsx";
import { SectionWrapper } from "../hoc";

const Loader = () => (
  <div className="flex justify-center items-center h-full space-x-4">
    <motion.div
      className="w-6 h-6 bg-[#915EFF] rounded-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
    />
    <motion.div
      className="w-6 h-6 bg-[#915EFF] rounded-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
    />
    <motion.div
      className="w-6 h-6 bg-[#915EFF] rounded-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
    />
  </div>
);

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // simulate a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute z-10 top-[70px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <TypingEffect />
      </div>

      <div className="absolute inset-0 z-20">
        {isLoading ? <Loader /> : <ComputersCanvas />}
      </div>

      <div className="absolute bottom-2 xs:bottom-0 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Learn more about fares chaabane">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "Hero");
