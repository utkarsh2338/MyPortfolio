import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaCode, FaProjectDiagram, FaServer } from "react-icons/fa";
import { ABOUT_TEXT, ABOUT_HIGHLIGHTS } from "../constants";
import aboutImg from "../assets/about.jpg";

const ICONS = [FaGraduationCap, FaUsers, FaCode, FaProjectDiagram, FaServer];

const SectionHeading = ({ eyebrow, title, sub }) => (
  <div className="mb-12 text-center">
    <p className="section-eyebrow">{eyebrow}</p>
    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {sub && <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">{sub}</p>}
  </div>
);

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading eyebrow="// about me" title="The story so far" />
      </motion.div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl glass p-2 md:row-span-2"
        >
          <div className="relative h-64 overflow-hidden rounded-[1.3rem] sm:h-72 md:h-full md:min-h-[20rem]">
            <img
              src={aboutImg}
              alt="Utkarsh Shukla working"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-display text-lg font-semibold text-white">Utkarsh Shukla</p>
              <p className="font-mono text-xs text-cyan-300">CSE @ IIIT Trichy · 2023–2027</p>
            </div>
          </div>
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl glass p-6 sm:p-7 md:col-span-2"
        >
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-[15px]">{ABOUT_TEXT}</p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl glass p-6 sm:p-7 md:col-span-2"
        >
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What defines me
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((h, i) => {
              const Icon = ICONS[i % ICONS.length];
              const text = h.replace(/^[^\s]+\s/, ""); // strip leading emoji
              return (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 text-cyan-600 dark:text-cyan-400">
                    <Icon className="text-sm" />
                  </span>
                  <span className="text-sm leading-snug text-zinc-700 dark:text-zinc-300">{text}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
export { SectionHeading };
