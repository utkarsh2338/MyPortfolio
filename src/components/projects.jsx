import { PROJECTS } from "../constants"
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/50 rounded-xl p-6 hover:bg-neutral-900/70 transition-all hover:shadow-xl border border-neutral-800">
            <div className="flex flex-wrap lg:flex-nowrap gap-6">
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full lg:w-1/3">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="rounded-lg w-full h-full object-cover shadow-lg"
                />
              </motion.div>

              {/* Project Details */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                  {/* Problem Statement */}
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Problem</span>
                    <p className="text-sm text-neutral-400 mt-1">{project.problem}</p>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 mb-3 leading-relaxed">{project.description}</p>

                  {/* Contribution */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">My Contribution</span>
                    <p className="text-sm text-neutral-400 mt-1">{project.contribution}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-xs font-medium border border-purple-900/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all hover:scale-105"
                    aria-label={`View live demo of ${project.title}`}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-105 border border-neutral-700"
                    aria-label={`View ${project.title} on GitHub`}>
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
