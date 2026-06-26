import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import DarkModeToggle from "./components/DarkModeToggle";
import { FaHeart, FaReact, FaNodeJs, FaArrowUp } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {/* base wash */}
    <div className="absolute inset-0 bg-[#f6f7fb] dark:bg-ink-950" />
    {/* dot grid */}
    <div className="absolute inset-0 bg-grid-light bg-[size:26px_26px] opacity-70 dark:bg-grid-dark dark:opacity-100" />
    {/* aurora blobs */}
    <div className="aurora-blob left-[-10%] top-[-8%] h-[34rem] w-[34rem] animate-aurora bg-cyan-400/40 dark:bg-cyan-500/30" />
    <div className="aurora-blob right-[-12%] top-[18%] h-[30rem] w-[30rem] animate-float-slow bg-indigo-400/40 dark:bg-indigo-600/30" />
    <div className="aurora-blob bottom-[-10%] left-[25%] h-[28rem] w-[28rem] animate-float bg-fuchsia-300/30 dark:bg-fuchsia-600/20" />
    {/* top fade */}
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent dark:from-ink-950 dark:to-transparent" />
  </div>
);

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-zinc-800 antialiased dark:text-zinc-300">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500"
      />

      <Background />

      <Navbar />

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative mt-16 border-t border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3 font-mono text-sm text-zinc-500 dark:text-zinc-500">
              <span className="text-zinc-400 dark:text-zinc-600">built with</span>
              <FaReact className="text-lg text-cyan-500 transition-transform hover:scale-125" title="React" />
              <SiTailwindcss className="text-lg text-sky-500 transition-transform hover:scale-125" title="TailwindCSS" />
              <FaNodeJs className="text-lg text-emerald-500 transition-transform hover:scale-125" title="Node.js" />
              <SiMongodb className="text-lg text-emerald-500 transition-transform hover:scale-125" title="MongoDB" />
            </div>
            <p className="flex items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              Crafted with <FaHeart className="text-rose-500" /> by Utkarsh Shukla
              <span className="text-zinc-400 dark:text-zinc-600">© {new Date().getFullYear()}</span>
            </p>
            <a
              href="https://github.com/utkarsh2338/MyPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 transition-colors hover:text-cyan-500 dark:text-zinc-600 dark:hover:text-cyan-400"
            >
              View source code →
            </a>
          </div>
        </div>
      </footer>

      {/* Floating controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full glass text-zinc-700 shadow-lg transition-all hover:-translate-y-1 hover:text-cyan-500 dark:text-zinc-300"
        >
          <FaArrowUp />
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default App;
