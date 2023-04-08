"use client";
import Head from "next/head";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/page";

export default function Home() {
  return (
    <main className="text-white h-screen snap-y snap-mandatory overflow-scroll ">
      <Navbar />

      <section id="#hero" className="snap-start">
        <Hero />
      </section>

      <section id="#about" className="snap-center">
        <About />
      </section>

      <section id="#skills" className="snap-center">
        <Skills />
      </section>

      <section id="#resume" className="snap-center">
        <Resume />
      </section>
    </main>
  );
}
