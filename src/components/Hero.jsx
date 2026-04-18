import React from "react";
import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 "
    >
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-purple-400">Maaz Afzal</span>
        </h1>

        <p className="text-purple-400 text-sm tracking-[0.2em] uppercase mb-4">
          Frontend Developer
        </p>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10">
          Building clean, responsive, and user-friendly web applications with a
          focus on modern design.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#projects">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer">
              Contact Me
            </button>
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
