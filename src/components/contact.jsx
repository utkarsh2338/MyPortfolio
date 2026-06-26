import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CONTACT } from "../constants";
import { SectionHeading } from "./about";

const SOCIALS = [
  { icon: <FaLinkedin />, href: CONTACT.linkedin, label: "LinkedIn" },
  { icon: <FaGithub />, href: CONTACT.github, label: "GitHub" },
  { icon: <FaXTwitter />, href: CONTACT.twitter, label: "Twitter" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/utkar_.sh7/", label: "Instagram" },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading eyebrow="// contact" title="Let's build something" />
      </motion.div>

      <div className="relative overflow-hidden rounded-2xl glass-strong p-6 sm:rounded-[2rem] sm:p-8 md:p-12">
        {/* glow accent */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">
              Currently open to <span className="accent-text">internships</span> & exciting projects
            </h3>
            <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
              Have a question, a collaboration idea, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/35"
            >
              Say Hello
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-8 flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl glass text-lg text-zinc-600 transition-all hover:-translate-y-1 hover:text-cyan-500 dark:text-zinc-300 dark:hover:text-cyan-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right info cards */}
          <div className="flex flex-col justify-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-3 overflow-hidden rounded-2xl glass p-4 transition-all hover:border-cyan-400/40 sm:gap-4 sm:p-5"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 text-lg text-cyan-600 dark:text-cyan-400 sm:h-12 sm:w-12 sm:text-xl">
                <FaEnvelope />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 sm:text-xs">Email</p>
                <p className="truncate text-sm font-medium text-zinc-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400 sm:text-base">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-2xl glass p-4 sm:gap-4 sm:p-5">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 text-lg text-cyan-600 dark:text-cyan-400 sm:h-12 sm:w-12 sm:text-xl">
                <FaMapMarkerAlt />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 sm:text-xs">Location</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white sm:text-base">{CONTACT.address}</p>
              </div>
            </div>

            <p className="px-1 text-xs text-zinc-400 dark:text-zinc-500">
              For privacy, my phone number is available on request via email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
