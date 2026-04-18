import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-purple-500/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-medium tracking-widest">
          MAAZ AFZAL
        </span>

        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Maaz Afzal. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/maaz-afzal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-400 transition duration-300 text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/maazafzalkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-400 transition duration-300 text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:maazafzal.khattak007@gmail.com"
            className="text-gray-500 hover:text-purple-400 transition duration-300 text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
