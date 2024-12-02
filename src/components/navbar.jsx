import logo from "../assets/LOGO.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center px-4 relative z-10">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl relative z-10">
        <a
          href="https://www.linkedin.com/in/utkarsh-shukla-3613bb28a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-xl" />
        </a>
        <a
          href="https://github.com/utkarsh2338"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-xl" />
        </a>
        <a
          href="https://x.com/kevinrush"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-white text-xl" />
        </a>
        <a
          href="https://www.instagram.com/utkarsh1007_shukla/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
