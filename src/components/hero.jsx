import { HERO_CONTENT, HERO_HIGHLIGHTS } from "../constants";
import profilePic from "../assets/My_Image.jpg"
import { motion } from "framer-motion"
import { FaDownload, FaEnvelope } from "react-icons/fa";

const container = (delay) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
}

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl">
              Utkarsh Shukla
            </motion.h1>
            <motion.h2
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-4xl pb-4">
              Full-Stack Developer & Competitive Programmer
            </motion.h2>
            <motion.p
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tight text-neutral-300">
              {HERO_CONTENT}
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl">
              <ul className="space-y-2 text-sm text-neutral-400">
                {HERO_HIGHLIGHTS.map((highlight, index) => (
                  <li key={index} className="leading-relaxed">{highlight}</li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-6">
              <a
                href="/My_Resume_Updated.pdf"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
                aria-label="Download Resume">
                <FaDownload /> View Resume
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 hover:scale-105 transition-all"
                aria-label="View Projects">
                See Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 border-2 border-neutral-700 text-neutral-300 px-6 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-purple-400 hover:scale-105 transition-all"
                aria-label="Contact Me">
                <FaEnvelope /> Contact
              </button>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="rounded-2xl shadow-2xl"
              src={profilePic}
              alt="Utkarsh Shukla - Software Developer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
