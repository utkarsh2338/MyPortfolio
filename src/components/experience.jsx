import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { SectionHeading } from "./about";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading eyebrow="// journey" title="Experience & roles" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-cyan-400/60 via-indigo-400/40 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
              }`}
            >
              {/* node */}
              <span
                className={`absolute top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/30 ring-4 ring-white dark:ring-ink-950 left-0 sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-4" : "sm:-left-4"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-600 dark:text-cyan-400">
                  {exp.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{exp.college}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {exp.description}
                </p>
                <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                  {exp.technologies.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
