import { FaUser, FaBook, FaCode, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9] text-white py-20 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          About Me
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Who Am I */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-200 mb-4">
              Hey! I’m <span className="font-semibold">Manish Kumar</span>, a
              4rd-year B.Tech student from Bengal College of Engineering and
              Technology, passionate about building cool stuff with code.
            </p>
            <p className="text-gray-200 mb-4">
              I enjoy solving problems on platforms like LeetCode (100+
              solutions ✅), designing responsive web apps, and learning new
              tech every day. I work mainly with JavaScript, React, Tailwind,
              and I’m exploring the MERN stack and AI-powered apps.
            </p>
            <p className="text-gray-200">
              When I'm not coding, I'm either exploring new technologies,
              contributing to open-source projects, or participating in
              hackathons and coding competitions.
            </p>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            variants={fadeInUp}
          >
            {/* Personal Info */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg leading-7 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaUser className="text-blue-400 text-lg" />
                <h4 className="text-2xl font-semibold">Personal Info</h4>
              </div>
              <p>
                <strong>Name:</strong> Manish Kumar
              </p>
              <p>
                <strong>Age:</strong> 21 years
              </p>
              <p>
                <strong>Location:</strong> Bengal, India
              </p>
              <p>
                <strong>Email:</strong> manish62073kumar@gmail.com
              </p>
            </div>

            {/* Education */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg leading-7 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaBook className="text-blue-400 text-lg" />
                <h4 className="text-2xl font-semibold">Education</h4>
              </div>
              <p>
                <strong>Degree:</strong> B.Tech
              </p>
              <p>
                <strong>Institution:</strong> Bengal College of Engineering and
                Technology
              </p>
              <p>
                <strong>Year:</strong> 4rd Year
              </p>
              <p>
                <strong>CGPA:</strong> 7.0/10
              </p>
            </div>

            {/* Coding */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg leading-7 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaCode className="text-blue-400 text-lg" />
                <h4 className="text-2xl font-semibold">Coding</h4>
              </div>
              <p>
                <strong>Leetcode:</strong> 100+ Solutions
              </p>
              <p>
                <strong>Languages:</strong> C, C++, JavaScript
              </p>
              <p>
                <strong>Focus:</strong> Problem Solving
              </p>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg leading-7 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaAward className="text-blue-400 text-lg" />
                <h4 className="text-2xl font-semibold">Achievements</h4>
              </div>
              <ul className="list-disc list-inside text-gray-200">
                <li>Runner-up in SIH 2024</li>
                <li>
                  Shortlisted for Infosys Springboard Virtual Internship 6.0
                  (Batch 2)
                </li>
                <li>🏅 4-Star C++ Badge on HackerRank</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
