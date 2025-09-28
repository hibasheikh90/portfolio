
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0a1a2a] text-white px-6 sm:px-10 lg:px-20 py-24 
                 min-h-screen flex flex-col justify-center scroll-mt-20"
    >
      {/* Stylish Heading */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-normal mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Small top text */}
        <span className="block text-gray-400 uppercase tracking-widest text-sm mb-3">
          Who I Am
        </span>

        {/* Main Heading with underline */}
        <span className="relative inline-block text-cyan-400">
          About Me
          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-cyan-400 rounded-full"></span>
        </span>
      </motion.h2>

      {/* Content */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center gap-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            Hi, I&apos;m{" "}
            <span className="text-cyan-400 font-medium">Hiba Sheikh</span>, a
            passionate and dedicated Frontend Developer with a love for creating
            intuitive, elegant, and responsive web experiences.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            I specialize in HTML, CSS, JavaScript, TypeScript, Next.js, and
            Tailwind CSS. I enjoy exploring new technologies and applying them
            to real-world projects.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
            I&apos;m always learning, recently diving into{" "}
            <span className="text-cyan-400 font-medium">Agentic AI</span> to
            build smarter, autonomous systems. Let’s connect and build something
            amazing together!
          </p>
        </motion.div>

        {/* Image - Circle */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden rounded-full 
                        w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] 
                        md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] 
                        ring-4 ring-cyan-400 ring-opacity-30"
          >
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
