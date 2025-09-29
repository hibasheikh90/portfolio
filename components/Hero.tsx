
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";  // import icons

const Hero = () => {
  return (
    <section className="hero bg-[#0a1a2a] text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16">
        {/* Text Side */}
        <motion.div
          className="text-area w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hiba Sheikh
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            I&apos;m a <span className="text-cyan-400">Frontend Web Developer</span>
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            with experience in designing user-friendly, responsive interfaces and crafting seamless digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/Hiba CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-cyan-400 text-black rounded hover:bg-cyan-500 transition">
                Download CV
              </button>
            </Link>
          </div>

          <div className="flex gap-6 text-gray-300">
            <Link href="https://www.linkedin.com/in/hiba-sheikh-a437472b4/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-cyan-400 transition-colors" />
            </Link>
            <Link href="https://github.com/hibasheikh90" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-cyan-400 transition-colors" />
            </Link>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="image-area w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ring-4 ring-cyan-400 ring-opacity-25">
            <Image
              src="/11.jpeg"
              alt="Profile of Hiba Sheikh"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
