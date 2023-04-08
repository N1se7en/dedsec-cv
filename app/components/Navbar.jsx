import React, { useState } from "react";
import Link from "next/link";
import Navanime from "./Navanime";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridR, CgEricsson } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    handleNav();
  };

  return (
    <>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="w-full flex text-white justify-between items-center max-w-[1240px] mx-auto pt-10 px-4"
      >
        <h1 className="w-full flex text-3xl text-[#A0A0A0]">
          N1SE7EN. <CgEricsson />
        </h1>

        <ul className=" hidden md:flex">
          <Link
            href={"#about"}
            onClick={() => {
              toggleNavList("#about");
              handleNav;
            }}
          >
            <Navanime>ABOUT</Navanime>
          </Link>
          <Link
            href={"#skills"}
            onClick={() => {
              toggleNavList("#skills");
              handleNav;
            }}
          >
            <Navanime>SKILLS</Navanime>
          </Link>

          <Link
            href={"#resume"}
            onClick={() => {
              toggleNavList("#resume");
              handleNav;
            }}
          >
            <Navanime>RESUME</Navanime>
          </Link>

          <Link
            href={"#contact"}
            onClick={() => {
              toggleNavList("#contact");
              handleNav;
            }}
          >
            <Navanime>CONTACT</Navanime>
          </Link>
        </ul>

        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <CgMenuGridR size={30} />}
        </div>
      </motion.div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 h-full w-[45%] border-r border-r-white bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] "
        }
      >
        <ul className="pt-24">
          <Link href={"/"}>
            <Navanime>HOME</Navanime>
          </Link>
          <Link href={"#about"} onClick={() => toggleNavList("#about")}>
            <Navanime>ABOUT</Navanime>
          </Link>
          <Link href={"#skills"} onClick={() => toggleNavList("#skills")}>
            <Navanime>SKILLS</Navanime>
          </Link>

          <Link href={"#resume"} onClick={() => toggleNavList("#resume")}>
            <Navanime>RESUME</Navanime>
          </Link>

          <Link href={"#contact"} onClick={() => toggleNavList("#contact")}>
            <Navanime>CONTACT</Navanime>
          </Link>
        </ul>
      </div>
    </>
  );
}
