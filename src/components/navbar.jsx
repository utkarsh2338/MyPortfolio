import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { CONTACT } from "../constants";

const LINKS = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { icon: <FaLinkedin />, href: CONTACT.linkedin, label: "LinkedIn" },
  { icon: <FaGithub />, href: CONTACT.github, label: "GitHub" },
  { icon: <FaXTwitter />, href: CONTACT.twitter, label: "Twitter" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/utkar_.sh7/", label: "Instagram" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass-strong shadow-lg shadow-black/5" : "border border-transparent"
        }`}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 font-display text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform group-hover:rotate-6">
            US
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight text-zinc-900 dark:text-white sm:block">
            Utkarsh<span className="accent-text">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="link-underline text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-zinc-500 transition-all hover:-translate-y-0.5 hover:text-cyan-500 dark:text-zinc-400 dark:hover:text-cyan-400"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a
            href="/updated_resume_27Jan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/30 sm:block"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl text-zinc-700 dark:text-zinc-200 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl glass-strong p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-cyan-600 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4 border-t border-zinc-200 px-3 pt-3 dark:border-white/10">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-lg text-zinc-500 transition-colors hover:text-cyan-500 dark:text-zinc-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
