import { projects } from "../data/projects";
import FadeIn from "./FadeIn";

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs tracking-[3px] uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl font-medium text-white mb-3">Projects</h2>
          <p className="text-gray-500 text-sm">Things I've built so far</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group flex flex-col h-full bg-purple-500/5 border border-purple-500/15 hover:border-purple-500/40 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1">
                {/* Image - flex-shrink-0 add kiya */}
                <div className="overflow-hidden h-44 bg-gray-900 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 p-5 min-h-0">
                  <div className="flex-1">
                    {" "}
                    <h3 className="text-white font-medium text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs text-purple-400 border border-purple-500/25 rounded-full px-3 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {" "}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-400 border border-purple-500/30 rounded-full px-4 py-1.5 hover:bg-purple-500/10 transition duration-300"
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white bg-purple-600 hover:bg-purple-700 rounded-full px-4 py-1.5 transition duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
