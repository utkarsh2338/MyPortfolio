import React from 'react'
import Navbar from './components/navbar';
import About from './components/about';
import Technologies from './components/technologies';
import Experience from './components/experience';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import DarkModeToggle from './components/DarkModeToggle';
import { FaHeart, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full ">
        <div aria-hidden="true" className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="py-12 text-center border-t border-neutral-800">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-400 mb-4">Built with</h3>
            <div className="flex justify-center gap-4 text-3xl">
              <FaReact className="text-cyan-400 hover:scale-110 transition-transform" title="React" />
              <SiTailwindcss className="text-cyan-500 hover:scale-110 transition-transform" title="TailwindCSS" />
              <FaNodeJs className="text-green-500 hover:scale-110 transition-transform" title="Node.js" />
              <SiMongodb className="text-green-500 hover:scale-110 transition-transform" title="MongoDB" />
            </div>
          </div>
          <p className="text-neutral-500 text-sm flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Utkarsh Shukla © {new Date().getFullYear()}
          </p>
          <p className="text-xs text-neutral-600 mt-2">
            All rights reserved. View the{" "}
            <a href="https://github.com/utkarsh2338" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
              source code
            </a>
          </p>
        </footer>
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  )
}

export default App
