import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
    </div>
  );
};

export default App;
