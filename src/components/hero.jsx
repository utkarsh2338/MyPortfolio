import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaDownload, FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { HERO_CONTENT, CONTACT } from "../constants";
import profilePic from "../assets/my_image.jpeg";

const ROLES = [
  "Full-Stack Developer",
  "Competitive Programmer",
  "MERN Stack Engineer",
  "Problem Solver",
];

const STATS = [
  { value: 1872, label: "LeetCode Rating", suffix: "" },
  { value: 1000, label: "DSA Problems", suffix: "+" },
  { value: 8.5, label: "CGPA", suffix: "+", decimals: 1 },
  { value: 4, label: "Major Projects", suffix: "+" },
];

const Counter = ({ value, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const RotatingRole = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.2em]">
      <motion.span
        key={i}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -18, opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="accent-text font-display font-semibold"
      >
        {ROLES[i]}
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-zinc-600 dark:text-zinc-400">Open to internships & opportunities</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-eyebrow mb-3 flex items-center gap-2"
          >
            <HiSparkles /> Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Utkarsh
            <br />
            Shukla
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-2xl font-medium tracking-tight text-zinc-700 dark:text-zinc-200 sm:text-3xl"
          >
            <RotatingRole />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/35"
            >
              View My Work
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/updated_resume_27Jan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:-translate-y-0.5 hover:text-cyan-600 dark:text-zinc-100 dark:hover:text-cyan-300"
            >
              <FaDownload /> Resume
            </a>
            <div className="ml-1 flex items-center gap-3 text-xl text-zinc-500 dark:text-zinc-400">
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-all hover:-translate-y-0.5 hover:text-cyan-500"><FaGithub /></a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all hover:-translate-y-0.5 hover:text-cyan-500"><FaLinkedin /></a>
              <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-all hover:-translate-y-0.5 hover:text-cyan-500"><FaXTwitter /></a>
            </div>
          </motion.div>
        </div>

        {/* Right — profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-[2rem] bg-gradient-to-tr from-cyan-400/30 to-indigo-500/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 glass-strong p-2 shadow-2xl">
            <img
              src={profilePic}
              alt="Utkarsh Shukla"
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 rounded-2xl glass-strong px-4 py-2 shadow-lg sm:-left-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">LeetCode</p>
            <p className="font-display text-lg font-bold text-zinc-900 dark:text-white">1872</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 bottom-12 rounded-2xl glass-strong px-4 py-2 shadow-lg sm:-right-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Codeforces</p>
            <p className="font-display text-lg font-bold accent-text">Pupil</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl glass-strong px-4 py-2 shadow-lg"
          >
            <p className="font-display text-sm font-semibold text-zinc-900 dark:text-white">IIIT Trichy 🎓</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-x-0 bottom-2 hidden lg:block"
      >
        <div className="grid grid-cols-4 gap-4 rounded-2xl glass px-6 py-5">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-zinc-900 dark:text-white">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
