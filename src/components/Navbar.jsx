import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex justify-center px-6 pt-4">
      <div className="w-full max-w-6xl">
        {/* Main Bar */}
        <div className="flex justify-between items-center bg-gray-900/85 border border-purple-500/30 rounded-full px-8 py-3.5 backdrop-blur-md shadow-[0_0_24px_rgba(139,92,246,0.12)]">
          {/* Logo */}
          <a href="#home">
            <span className="text-2xl cursor-pointer font-medium text-white tracking-widest hover:text-purple-400 transition-colors duration-300">
              MAAZ AFZAL
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-9">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-md font-medium text-gray-400 pb-1 hover:text-purple-400 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <a href="#contact" className="hidden md:block">
            <button className="text-md text-purple-400 border border-purple-700 rounded-full px-5 py-2 hover:bg-purple-700 hover:text-white transition-all duration-300 font-medium cursor-pointer">
              Contact Us
            </button>
          </a>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-6 bg-purple-400 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-purple-400 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-purple-400 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-gray-900/95 border border-purple-500/20 rounded-2xl px-6 py-5 backdrop-blur-md flex flex-col gap-4">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="w-full text-sm text-purple-400 border border-purple-700 rounded-full px-5 py-2 hover:bg-purple-700 hover:text-white transition-all duration-300 font-medium cursor-pointer">
                Contact Us
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
