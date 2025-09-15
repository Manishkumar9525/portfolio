import React from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  // Animation variants for items
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-4 md:px-20"
      id="achievements"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          Achievements
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          Recognition and milestones I've achieved throughout my academic and
          professional journey.
        </motion.p>

        {/* Timeline (zig-zag) */}
        <div className="relative border-l md:border-l-0 md:border-t-0 md:grid md:grid-cols-9">
          {/* Timeline Item 1 (SIH 2024 - Left) */}
          <motion.div
            className="mb-12 ml-6 relative md:col-span-4 md:col-start-1 md:text-right md:pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            variants={fadeInUp}
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1 md:left-auto md:right-[-10px]"></div>
            <h3 className="text-xl font-semibold">Runner-up in SIH 2024</h3>
            <p className="text-gray-400 mt-2">
  Selected as a <span className="font-semibold text-white">Finalist</span> in 
  Smart India Hackathon 2024, one of the most prestigious nationwide hackathons.
</p>

            <span className="bg-blue-800 text-xs px-2 py-1 rounded mt-2 inline-block">
              2024
            </span>
          </motion.div>

          <div className="hidden md:block col-span-1 border-r border-gray-600 mx-auto"></div>

          {/* Timeline Item 2 (Infosys - Right) */}
          <motion.div
            className="mb-12 ml-6 relative md:col-span-4 md:col-start-6 md:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            variants={fadeInUp}
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1 md:left-[-10px] md:right-auto"></div>
            <h3 className="text-xl font-semibold">
              Selected for Infosys Springboard
            </h3>
            <p className="text-gray-400 mt-2">
              Recognized and selected for Infosys Springboard, marking a key
              step in my professional learning journey.
            </p>
            <span className="bg-blue-800 text-xs px-2 py-1 rounded mt-2 inline-block">
              2025
            </span>
          </motion.div>

          {/* Timeline Item 3 (Leetcode - Left) */}
          <motion.div
            className="mb-12 ml-6 relative md:col-span-4 md:col-start-1 md:text-right md:pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            variants={fadeInUp}
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1 md:left-auto md:right-[-10px]"></div>
            <h3 className="text-xl font-semibold">
              100+ Leetcode Problems Solved
            </h3>
            <p className="text-gray-400 mt-2">
              Demonstrated strong problem-solving skills by solving over 100
              algorithmic challenges on Leetcode.
            </p>
            <span className="bg-blue-800 text-xs px-2 py-1 rounded mt-2 inline-block">
              2024
            </span>
          </motion.div>

          {/* Timeline Item 4 (C++ Badge - Right, pulled up) */}
          <motion.div
            className="ml-6 relative md:col-span-4 md:col-start-6 md:pl-10 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1 md:left-[-10px] md:right-auto"></div>
            <h3 className="text-xl font-semibold">🏅 4-Star C++ Badge</h3>
            <p className="text-gray-400 mt-2">
              Demonstrated advanced problem-solving skills by earning a
              prestigious 4-Star C++ badge on HackerRank.
            </p>
            <span className="bg-blue-800 text-xs px-2 py-1 rounded mt-2 inline-block">
              2025
            </span>
          </motion.div>
        </div>

        {/* Additional Accomplishments */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          variants={fadeInUp}
        >
          <div>
            <h4 className="text-3xl font-bold text-blue-500">100+</h4>
            <p className="text-gray-400">Leetcode Problems Solved</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-500">7.0</h4>
            <p className="text-gray-400">CGPA in B.Tech</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-500">5+</h4>
            <p className="text-gray-400">Web Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
