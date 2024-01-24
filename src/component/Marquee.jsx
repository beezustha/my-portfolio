// Marquee.js

import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  const Skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "TailwindCSS" },
    { name: "ReactJS" },
  ];
  return (
    <div className="bg-green-700 overflow-hidden">
      <motion.div
        className="marquee-container w-full" // Set the width to full width
        animate={{ x: "100%" }}
        transition={{
          repeatType: "loop",
          ease: "linear",
          duration: "10",
        }}
      >
        <p>
          {Skills.map((skill, key) => {
            return (
              <>
                <span className="text-xl "> {skill.key} </span>
                <span className="text-xl text-red-400"> {skill.name} </span>
              </>
            );
          })}
        </p>

        {/* Add more items as needed */}
      </motion.div>
    </div>
  );
};

export default Marquee;
