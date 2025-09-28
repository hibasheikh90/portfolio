
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link: string;
  tech: string[];
};

const projectsData: Project[] = [
  {
    title: "Furniture E-Commerce Website",
    description:
      "A modern furniture e-commerce platform focused on selling chairs, built with Next.js, TypeScript and Sanity CMS.",
    link: "https://hackathon3-amber.vercel.app/",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Sanity"],
  },
  {
    title: "Blog Website",
    description:
      "A dynamic blog platform built with Next.js and TailwindCSS.",
    link: "https://blogbox-pearl.vercel.app/",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern e-commerce platform built with Next.js, TypeScript, TailwindCSS.",
    link: "https://e-commerceweb3.vercel.app",
    tech: ["Next.js", "TypeScript", "Sanity", "TailwindCSS"],
  },
  {
    title: "Resume Builder",
    description:
      "A simple online resume builder using HTML, CSS and JavaScript. Generate and download your professional CV easily.",
    link: "",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 bg-[#0a1a2a] text-white">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block text-gray-400 uppercase tracking-widest text-sm">
          My Works
        </span>
        <span className="block text-cyan-400">
          Featured Projects
        </span>
        <motion.div
          className="mt-2 h-1 w-20 mx-auto bg-cyan-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black/30 border border-gray-800 rounded-xl shadow-md p-5 hover:shadow-cyan-400/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-cyan-400/10 text-cyan-300 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="inline-block text-cyan-400 text-sm font-medium hover:underline"
              >
                🔗 View Project
              </Link>
            ) : (
              <span className="inline-block text-gray-400 text-sm font-medium">
                Coming Soon
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

