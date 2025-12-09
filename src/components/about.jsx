import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT, ABOUT_HIGHLIGHTS } from "../constants"
import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <img className="rounded-2xl shadow-xl" src={aboutImg} alt="Utkarsh Shukla working on projects" />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex flex-col justify-center lg:justify-start px-4 lg:px-0">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight text-neutral-300 leading-relaxed">
                            {ABOUT_TEXT}
                        </p>

                        {/* Highlights Section */}
                        <div className="my-4 max-w-xl">
                            <ul className="space-y-3">
                                {ABOUT_HIGHLIGHTS.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-neutral-400"
                                    >
                                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                                        <span className="text-sm leading-relaxed">{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About