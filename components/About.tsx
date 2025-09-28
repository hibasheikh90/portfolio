
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#0a1a2a] text-white px-4 sm:px-8 lg:px-16 py-12">
      
      {/* Stylish Heading */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="block text-gray-400 uppercase tracking-widest text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Who I Am
        </motion.span>
        <motion.span
          className="block text-cyan-400 text-3xl sm:text-4xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          About Me
        </motion.span>
        <motion.div
          className="mt-1 h-1 w-20 mx-auto bg-cyan-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.h2>

      {/* Content */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* Text */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-6">
            Hi, I&apos;m <span className="text-cyan-400 font-semibold">Hiba Sheikh</span>, a passionate Frontend Developer creating intuitive and responsive web experiences.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-6">
            I specialize in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. I enjoy exploring new technologies and applying them to real-world projects.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            Recently, I&apos;ve been diving into <span className="text-cyan-400 font-semibold">Agentic AI</span> to build smarter, autonomous systems. Let’s connect and build something amazing together!
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-full 
                          w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] 
                          md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] ring-4 ring-cyan-400 ring-opacity-25 hover:scale-105 transition-transform duration-300">
            <Image
              src="/11.jpeg"
              alt="Hiba Sheikh"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;



