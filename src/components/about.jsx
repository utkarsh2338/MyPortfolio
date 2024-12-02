import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion"
// Rename component to start with capital letter
const About = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 ">
          <h2 className="my-20 text-center text-4xl ">About
              <span className="text-neutral-500 "> Me</span></h2>
              <div className="flex flex-wrap">
                  <motion.div 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:-100}}
                  transition={{duration:1.5}}
                  className="w-full lg:w-1/2 lga:p-8 ">
                      {/* Remove empty div */}
                      <img className="rounded-2xl" src={aboutImg} alt="aboutImage" />
                  </motion.div>
                  {/* Fix space in className */}
                  <motion.div 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1.5}}
                  className="w-full lg:w-1/2 ">
                      <div className="flex justify-center lg:justify-start">
                          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
                      </div>
                  </motion.div>
              </div> 
      </div>
    )
  }
  
  // Update export to use new component name
  export default About