import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLightbulb } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { SectionHeading } from "./about";

const ProjectCard = ({ p, featured, index }) => {
  const hasLive = p.liveDemo && p.liveDemo !== "#";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      {/* image */}
      <div className={`relative overflow-hidden ${featured ? "h-full min-h-[16rem]" : "h-52"}`}>
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
        {featured && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
            ★ Featured
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-col p-6">
        <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">{p.title}</h3>

        <p className="mt-2 flex items-start gap-2 text-xs italic text-zinc-500 dark:text-zinc-400">
          <FaLightbulb className="mt-0.5 flex-shrink-0 text-amber-400" />
          {p.problem}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>

        {p.contribution && (
          <p className="mt-3 rounded-xl border border-zinc-200/70 bg-zinc-50/60 p-3 text-xs leading-relaxed text-zinc-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-400">
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">My contribution: </span>
            {p.contribution}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 pt-1">
          {hasLive && (
            <a
              href={p.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg"
            >
              <FaExternalLinkAlt className="text-[10px]" /> Live Demo
            </a>
          )}
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-zinc-700 transition-all hover:text-cyan-600 dark:text-zinc-200 dark:hover:text-cyan-300"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="// portfolio"
          title="Things I've built"
          sub="A selection of projects spanning real-time systems, collaboration tools, and full-stack applications."
        />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} featured={i === 0} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
