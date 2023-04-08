import React from "react";
import { motion } from "framer-motion";

export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"
        className="rounded-full border border-gray-200 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">20%</p>
        </div>
      </div>
    </div>
  );
}
