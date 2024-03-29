"use client";
import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/page";
import Contact from "./components/Contact/page";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
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
    <main className="text-white h-screen snap-y snap-mandatory overflow-scroll ">
      <Head />
      <Navbar />

      <section id="#hero">
        <Hero />
      </section>

      <section id="#about">
        <About />
      </section>

      <section id="#skills">
        <Skills />
      </section>

      <section id="#resume">
        <Resume />
      </section>

      <section id="#contact">
        <Contact />
      </section>

      <Link
        href={"#hero"}
        onClick={() => {
          toggleNavList("#hero");
          handleNav;
        }}
      >
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-end px-5">
            <ArrowUpCircleIcon className="h-10 w-10 hover:text-blue-500" />
          </div>
        </footer>
      </Link>
    </main>
  );
}
