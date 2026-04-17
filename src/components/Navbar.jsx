const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex justify-center px-6 pt-4">
      <div className="flex justify-between items-center bg-gray-900/85 border border-purple-500/30 rounded-full px-8 py-3.5 w-full max-w-6xl backdrop-blur-md shadow-[0_0_24px_rgba(139,92,246,0.12)]">
        {/* Logo */}
        <a href="#home">
          <span className="text-2xl cursor-pointer font-medium text-white tracking-widest hover:text-purple-400 transition-colors duration-300  ">
            MAAZ AFZAL
          </span>
        </a>

        {/* Navbar Links */}
        <div className="flex gap-9">
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

        {/* Contact Button */}
        <a href="#contact">
          <button className="text-md text-purple-400 border border-purple-700 rounded-full px-5 py-2 hover:bg-purple-700 hover:text-white transition-all duration-300 font-medium cursor-pointer">
            Contact Us
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
