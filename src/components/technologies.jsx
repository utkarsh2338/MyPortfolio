import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiGithub, SiPostman, SiNpm, SiVite, SiCplusplus, SiPython,
} from "react-icons/si";
import { FaDatabase, FaServer, FaCode, FaTools, FaLayerGroup } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { TECH_STACK } from "../constants";
import { SectionHeading } from "./about";

const ICON = {
  React: { i: SiReact, c: "#61DAFB" },
  "Next.js": { i: SiNextdotjs, c: "#ffffff" },
  TailwindCSS: { i: SiTailwindcss, c: "#38BDF8" },
  JavaScript: { i: SiJavascript, c: "#F7DF1E" },
  TypeScript: { i: SiTypescript, c: "#3178C6" },
  HTML5: { i: SiHtml5, c: "#E34F26" },
  CSS3: { i: SiCss3, c: "#1572B6" },
  "Node.js": { i: SiNodedotjs, c: "#5FA04E" },
  Express: { i: SiExpress, c: "#888888" },
  "REST APIs": { i: TbApi, c: "#22d3ee" },
  "Socket.io": { i: SiSocketdotio, c: "#888888" },
  MongoDB: { i: SiMongodb, c: "#47A248" },
  PostgreSQL: { i: SiPostgresql, c: "#4169E1" },
  MySQL: { i: SiMysql, c: "#4479A1" },
  Redis: { i: SiRedis, c: "#FF4438" },
  Git: { i: SiGit, c: "#F05032" },
  GitHub: { i: SiGithub, c: "#ffffff" },
  "VS Code": { i: FaCode, c: "#007ACC" },
  Postman: { i: SiPostman, c: "#FF6C37" },
  npm: { i: SiNpm, c: "#CB3837" },
  Vite: { i: SiVite, c: "#646CFF" },
  "C++": { i: SiCplusplus, c: "#00599C" },
  Python: { i: SiPython, c: "#3776AB" },
  SQL: { i: FaDatabase, c: "#22d3ee" },
};

const CAT_ICON = {
  Frontend: FaLayerGroup,
  Backend: FaServer,
  Database: FaDatabase,
  "Tools & DevOps": FaTools,
  Languages: FaCode,
};

const MarqueeRow = () => {
  const all = Object.entries(ICON);
  const items = [...all, ...all];
  return (
    <div className="relative mb-14 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {items.map(([name, { i: Icon, c }], idx) => (
          <div key={idx} className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <Icon style={{ color: c }} className="text-2xl opacity-80" />
            <span className="font-mono text-xs">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <section id="technologies" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="// tech stack"
          title="Tools I build with"
          sub="A modern toolkit spanning the full stack — from pixel-perfect interfaces to scalable backends and databases."
        />
      </motion.div>

      <MarqueeRow />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(TECH_STACK).map(([cat, items], idx) => {
          const Cat = CAT_ICON[cat] || FaCode;
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 text-cyan-600 dark:text-cyan-400">
                  <Cat />
                </span>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {items.map((t) => {
                  const meta = ICON[t];
                  const Icon = meta?.i;
                  return (
                    <span key={t} className="chip">
                      {Icon && <Icon style={{ color: meta.c }} className="text-sm" />}
                      {t}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
