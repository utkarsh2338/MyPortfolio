import logo from "../assets/LOGO.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6" role="navigation" aria-label="Main navigation">
      <div className="flex flex-shrink-0 items-center px-4 relative z-10">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <img className="mx-2 w-10 cursor-pointer" src={logo} alt="Utkarsh Shukla Logo" />
        </motion.button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
        <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">
          About
        </button>
        <button onClick={() => scrollToSection('technologies')} className="hover:text-purple-400 transition-colors">
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
          Contact
        </button>
      </div>

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl relative z-10">
        <motion.a
          href="https://www.linkedin.com/in/utkarshshukla1007/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin className="text-neutral-400 hover:text-blue-500 text-xl transition-colors" />
        </motion.a>
        <motion.a
          href="https://github.com/utkarsh2338"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Visit my GitHub profile"
        >
          <FaGithub className="text-neutral-400 hover:text-white text-xl transition-colors" />
        </motion.a>
        <motion.a
          href="https://x.com/UtkarshShu72261"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Visit my Twitter profile"
        >
          <FaSquareXTwitter className="text-neutral-400 hover:text-sky-400 text-xl transition-colors" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/utkar_.sh7/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Visit my Instagram profile"
        >
          <FaInstagram className="text-neutral-400 hover:text-pink-500 text-xl transition-colors" />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
