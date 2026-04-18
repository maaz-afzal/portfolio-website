import profile from "../assets/image.png";
import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group w-fit mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            <img
              src={profile}
              alt="Maaz Afzal"
              className="relative w-100 h-130 object-cover rounded-2xl border border-purple-500/30 shadow-xl hover:scale-103 transition duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-2">
              About Me
            </p>

            {/* Top Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frontend Web Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 text-justify">
              Hey, I'm Maaz a frontend developer living in Pakistan. I enjoy
              building clean, responsive websites that feel smooth and easy to
              use.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 text-justify">
              I mainly work with React and love turning ideas into real, working
              products. For me, it’s not just about design it’s about creating
              experiences people actually enjoy.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
              Right now, I’m learning backend development with Node.js to become
              a full-stack developer.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-37.5 bg-white/5 border border-purple-500/20 rounded-xl p-6 text-center hover:bg-purple-500/10 transition hover:scale-102">
                <h3 className="text-3xl font-bold text-purple-400">2+</h3>
                <p className="text-gray-400 text-sm uppercase">
                  Years Experience
                </p>
              </div>

              <div className="flex-1 min-w-37.5 bg-white/5 border border-purple-500/20 rounded-xl p-6 text-center hover:bg-purple-500/10 transition hover:s">
                <h3 className="text-3xl font-bold text-purple-400">10+</h3>
                <p className="text-gray-400 text-sm uppercase">
                  Projects Completed
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://github.com/maaz-afzal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm hover:bg-purple-600 transition"
              >
                View GitHub
              </a>

              <a
                href="https://linkedin.com/in/maazafzalkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500/40 text-purple-400 px-6 py-2 rounded-full text-sm hover:bg-purple-500/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default About;
