"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <div className="mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-8xl sm:text-6xl text-4xl ">Nahian Ashfak</h1>
        <TypeAnimation
        className="font-bold p-2 md:text-2xl font-mono"
          sequence={[
            // Same String at the start will only be typed once, initially
            "CODER 💻",
            1500,
            "GAMER 🎮",
            1500,
            "SYSTEM ENGINEER",
            1500,
            "FULL STACK WEB DEVELOPER 🕸️",
            1500,
            "LIT GROUP MEMBER 🔥",
            1500,
            "BORN 1999",
            1500,
            "WORKS AT GRAMEENPHONE",
            1500,
            "VALORANT => Ni7#lit",
            1500,
          ]}
          speed={50}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </>
  );
}
