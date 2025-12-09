import { CONTACT } from "../constants"
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
        I'm currently looking for new opportunities and exciting projects. Whether you have a question, collaboration idea, or just want to say hi, feel free to reach out!
      </motion.p>

      <div className="max-w-4xl mx-auto">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-purple-500 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <FaMapMarkerAlt className="text-purple-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-neutral-400 text-sm">{CONTACT.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-purple-500 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <FaEnvelope className="text-purple-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-neutral-400 text-sm hover:text-purple-400 transition-colors"
                  aria-label="Send email to Utkarsh Shukla">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-white">Connect with me</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all hover:scale-105 shadow-lg"
              aria-label="Send me an email"
            >
              <FaEnvelope /> Email Me
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-all hover:scale-105 shadow-lg border border-neutral-700"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href={CONTACT.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition-all hover:scale-105 shadow-lg"
              aria-label="Visit my Twitter profile"
            >
              <FaTwitter /> Twitter
            </a>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-neutral-500 mt-8">
            Note: For privacy reasons, full phone number is available upon request via email.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
