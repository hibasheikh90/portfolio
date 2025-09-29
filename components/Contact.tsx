

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Illustration & Info */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Let’s Work Together 🚀
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0">
            I’m open to new projects, ideas, or collaborations. Let’s connect!
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-300 text-sm relative">
            <p>
              📧{" "}
              <a
                href="mailto:hayasheikh109@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                hayasheikh109@gmail.com
              </a>
            </p>

            {/* Phone with Dropdown */}
            <div className="inline-block relative">
             
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="hover:text-cyan-400 transition flex items-center gap-1"
              >
               📞 +92 3193493465 
              </button>

              {showDropdown && (
                <div className="absolute mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg w-40 z-10">
                  <a
                    href="tel:+923193493465"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition"
                  >
                    📞 Call
                  </a>
                  <a
                    href="https://wa.me/923193493465"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              )}
            </div>

            <p>📍 Karachi, Pakistan</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 justify-center md:justify-start text-xl text-gray-400">
            <a
              href="https://github.com/hibasheikh90"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hiba-sheikh-a437472b4/"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/HibaSheikh90"
              className="hover:text-cyan-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Compact Contact Form */}
        <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 text-center">
            Contact Me
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
              required
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white font-bold py-2 rounded-lg hover:bg-cyan-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
