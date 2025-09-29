
"use client";

import React from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  percent: number;
  color: string;
};

const skillsData: Skill[] = [
  { name: "HTML", percent: 90, color: "#F97316" },
  { name: "CSS", percent: 85, color: "#1E40AF" },
  { name: "JavaScript", percent: 80, color: "#EAB308" },
  { name: "Python", percent: 75, color: "#10B981" },
  { name: "Next.js", percent: 75, color: "#6B7280" },
  { name: "TypeScript", percent: 85, color: "#3B82F6" },
  { name: "Tailwind CSS", percent: 85, color: "#22D3EE" },
  { name: "Agentic AI", percent: 50, color: "#EC4899" },
];

interface CircleSkillProps {
  skill: Skill;
  index: number;
}

const CircleSkill: React.FC<CircleSkillProps> = ({ skill, index }) => {
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#374151"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke={skill.color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset:
              circumference - (skill.percent / 100) * circumference,
          }}
          transition={{
            delay: index * 0.2 + 0.2,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-lg font-semibold"
          fill={skill.color}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.2 + 0.4,
            duration: 0.6,
          }}
        >
          {skill.percent}%
        </motion.text>
      </svg>
      <motion.p
        className="pt-4 text-lg font-medium text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.2 + 0.6,
          duration: 0.6,
        }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <motion.section
      className="relative overflow-hidden px-4 sm:px-8 lg:px-16 py-12 bg-[#0a1a2a] text-white"
      initial="start"
      animate="end"
      variants={{
        start: { backgroundPosition: "0% 50%" },
        end: { backgroundPosition: "100% 50%" },
      }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      style={{
        backgroundImage: "linear-gradient(270deg, #0a1a2a, #112537, #0a1a2a)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Heading */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium mb-8 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="block text-gray-400 uppercase tracking-widest text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Professional
        </motion.span>
        <motion.span
          className="block text-cyan-400 text-3xl sm:text-4xl font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Skills
        </motion.span>
        <motion.div
          className="mt-1 h-1 w-20 mx-auto bg-cyan-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.h1>

      {/* Skills Circles */}
      <div className="flex flex-wrap justify-center gap-10">
        {skillsData.map((skill, idx) => (
          <CircleSkill key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;


