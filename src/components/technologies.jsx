import { TECH_STACK } from "../constants";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiNpm, SiVite,
  SiCplusplus, SiPython
} from "react-icons/si";

const Technologies = () => {
  const iconMap = {
    "React": <SiReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs />,
    "TailwindCSS": <SiTailwindcss className="text-cyan-500" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "TypeScript": <SiTypescript className="text-blue-500" />,
    "HTML5": <SiHtml5 className="text-orange-500" />,
    "CSS3": <SiCss3 className="text-blue-500" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Express": <SiExpress />,
    "REST APIs": <span className="text-purple-400 font-bold text-xl">REST</span>,
    "Socket.io": <SiSocketdotio />,
    "MongoDB": <SiMongodb className="text-green-500" />,
    "PostgreSQL": <SiPostgresql className="text-sky-600" />,
    "MySQL": <SiMysql className="text-blue-500" />,
    "Redis": <SiRedis className="text-red-600" />,
    "Git": <SiGit className="text-orange-600" />,
    "GitHub": <SiGithub />,
    "VS Code": <SiVisualstudiocode className="text-blue-500" />,
    "Postman": <SiPostman className="text-orange-500" />,
    "npm": <SiNpm className="text-red-500" />,
    "Vite": <SiVite className="text-purple-500" />,
    "C++": <SiCplusplus className="text-blue-600" />,
    "Python": <SiPython className="text-blue-400" />,
    "SQL": <span className="text-blue-400 font-bold text-xl">SQL</span>,
  };

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Technologies & Tools
      </motion.h2>

      <div className="space-y-12">
        {Object.entries(TECH_STACK).map(([category, technologies], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="px-4"
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-purple-400">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 hover:border-purple-500 hover:shadow-lg transition-all"
                  title={tech}
                >
                  <span className="text-2xl">{iconMap[tech]}</span>
                  <span className="text-sm font-medium text-neutral-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
