import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import FadeIn from "./FadeIn";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: 95,
      desc: "Semantic structure for modern web pages",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      level: 90,
      desc: "Responsive layouts and clean UI styling",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      level: 85,
      desc: "Interactive and dynamic web functionality",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React",
      level: 93,
      desc: "Building scalable component-based UIs",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      desc: "Utility-first styling for fast development",
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
      name: "Git",
      level: 88,
      desc: "Version control and team collaboration",
      icon: <FaGitAlt className="text-red-500" />,
    },
  ];

  return (
    <section id="skills" className="py-26 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-[3px] uppercase mb-3">
              Skills
            </p>
            <h2 className="text-4xl font-medium text-white mb-3">
              What I Know
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 border border-purple-500/10 hover:border-purple-400/40 transition duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Top */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{skill.icon}</div>
                        <h3 className="text-white font-semibold text-xl">
                          {skill.name}
                        </h3>
                      </div>

                      <span className="text-purple-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="mt-8 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Skills;
