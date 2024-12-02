import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const combinedVariants = (delay, duration) => ({
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: delay,
      },
      opacity: {
        delay: delay,
      },
    },
  },
  floating: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techStack = [
    { Icon: RiReactjsLine, color: "text-cyan-400", label: "React", delay: 0.2, duration: 1.2 },
    { Icon: TbBrandNextjs, color: "", label: "Next.js", delay: 0.4, duration: 1.5 },
    { Icon: SiMongodb, color: "text-green-500", label: "MongoDB", delay: 0.6, duration: 1.8 },
    { Icon: DiRedis, color: "text-red-700", label: "Redis", delay: 0.8, duration: 2.0 },
    { Icon: FaNodeJs, color: "text-green-500", label: "Node.js", delay: 1.0, duration: 2.2 },
    { Icon: BiLogoPostgresql, color: "text-sky-700", label: "PostgreSQL", delay: 1.2, duration: 2.5 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {techStack.map(({ Icon, color, label, delay, duration }, index) => (
          <motion.div
            key={label}
            className="rounded-2xl border-4 border-neutral-400 p-4 flex items-center justify-center"
            aria-label={label}
            role="img"
            variants={combinedVariants(delay, duration)}
            initial="hidden"
            animate={["visible", "floating"]}
          >
            <Icon className={`text-7xl ${color}`} title={label} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
