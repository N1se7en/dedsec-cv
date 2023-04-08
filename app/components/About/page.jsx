"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center h-screen">
        <h1 className="absolute top-14 uppercase tracking-[20px] text-2xl">
          About Me
        </h1>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-74 md:h-95 xl:w-[500px] xl:h-[500px]"
          src="/passport.jpg"
        />
        <div
          className="space-y-10 px-2 md:px-10"
        >
          <h2 className="text-4xl">
            Hi, I'm{" "}
            <span className="font-bold text-blue-500">Nahian Ashfak</span>
          </h2>
          <p className="text-xl">
            I'm a Developer with a passion for building websites
            and applications. I'm a passionate individual who loves to code and
            learn new technologies. I am currently working as a   <span className="font-bold text-sky-500">System Engineer</span>  at <span className="font-bold text-violet-800">Wipro Ltd</span>
          </p>
        </div>
      </div>
    </>
  );
}
