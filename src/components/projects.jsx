import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLightbulb, FaChevronDown } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { SectionHeading } from "./about";

const ProjectCard = ({ p, index }) => {
  const hasLive = p.liveDemo && p.liveDemo !== "#";
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* image */}
      <div className="relative h-48 overflow-hidden sm:h-52">
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white sm:text-xl">{p.title}</h3>

        <p className="mt-2 flex items-start gap-2 text-xs italic text-zinc-500 dark:text-zinc-400">
          <FaLightbulb className="mt-0.5 flex-shrink-0 text-amber-400" />
          <span className={expanded ? "" : "line-clamp-2"}>{p.problem}</span>
        </p>

        <p className={`mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 ${expanded ? "" : "line-clamp-4"}`}>{p.description}</p>

        {p.contribution && (
          <p className="mt-3 rounded-xl border border-zinc-200/70 bg-zinc-50/60 p-3 text-xs leading-relaxed text-zinc-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-400">
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">My contribution: </span>
            <span className={expanded ? "" : "line-clamp-3"}>{p.contribution}</span>
          </p>
        )}

        {/* Read more toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 inline-flex items-center gap-1 self-start rounded-lg px-1 py-1 text-xs font-semibold text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
        >
          {expanded ? "Read less" : "Read more"}
          <FaChevronDown
            className={`text-[10px] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {p.technologies.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {/* Push buttons to bottom */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5 sm:gap-3">
          {hasLive ? (
            <a
              href={p.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              <FaExternalLinkAlt className="text-[10px]" /> Live Demo
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 rounded-full bg-zinc-200/70 px-3 py-2 text-xs font-semibold text-zinc-400 cursor-not-allowed dark:bg-white/10 dark:text-zinc-500 sm:px-4"
              title="Live demo coming soon"
            >
              <FaExternalLinkAlt className="text-[10px]" /> Live Demo
              <span className="rounded-full bg-amber-400/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-500 dark:bg-amber-400/10 dark:text-amber-400">
                Soon
              </span>
            </span>
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

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
