import React from "react";
import { motion } from "framer-motion";
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import Skill3 from "./Skill3";
import Skill4 from "./Skill4";
import Skill5 from "./Skill5";
import Skill6 from "./Skill6";
import Skill7 from "./Skill7";
import Skill8 from "./Skill8";

export default function Skills({ directionLeft }) {
  return (
    <div
  
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-28 uppercase tracking-[3px] text-sm">
        Hover over a skill for current proficiency
      </h3>


    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1,x: 0}}
      className="grid grid-cols-4 gap-5">
      <Skill1 />
      <Skill2 />
      <Skill3 />
      <Skill4 />
      <Skill5 />
      <Skill6 />
      <Skill7 />
      <Skill8 />
    </motion.div>


    </div>
  );
}
