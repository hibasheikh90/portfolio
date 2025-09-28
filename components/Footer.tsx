import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-base font-semibold text-white">
            Hiba Sheikh
          </h2>
          <p className="text-xs mt-1">
            © {new Date().getFullYear()} Hiba Sheikh. All Rights Reserved.
          </p>
        </div>

        {/* Right Section (Social Links) */}
        <ul className="flex space-x-4 mt-2 md:mt-0">
          <li>
            <a
              href="https://github.com/hibasheikh90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hiba-sheikh-a437472b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100073703164367"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyan-400 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
