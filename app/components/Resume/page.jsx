"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Resume() {
  return (
    <>
      <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center h-screen">
        <h1 className="absolute top-14 uppercase tracking-[20px] text-2xl">
          Resume
        </h1>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-full xl:rounded-full md:w-74 md:h-95 xl:w-[500px] xl:h-[500px]"
          src="/CV.png"
        />
        <div className="space-y-10 px-2 md:px-10">
          <h2 className="text-4xl">Scan the QR code </h2>
          <h2 className="text-4xl">OR </h2>

          <Link
            href= "https://drive.google.com/file/d/1vyxm13RAAebd1bQp04RMt9D_6BAQb1L6/view?usp=sharing"
            class="bg-sky-700 hover:bg-gray-400 hover:text-black text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </Link>
        </div>
      </div>
    </>
  );
}
