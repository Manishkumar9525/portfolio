import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-25 flex items-center justify-center px-5 md:px-16 min-h-screen overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white gap-12 py-12 relative z-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-cyan-400 text-2xl font-medium animate-pulse">
            Hello, I'm
          </h3>
          
          {/* Animated Gradient Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            Manish Kumar
          </h1>

          <p className="text-xl text-gray-300">
           MERN Stack Learner  & Frontend Developer
          </p>
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
            Passionate about coding and clean UI design. <br />
            From LeetCode challenges to full-stack projects — I build with
            purpose.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 px-6 py-3 text-white rounded-md text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50"
            >
              Contact Me
            </a>

            <a
              href="src/assets/my resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 px-6 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-gray-500/40"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/Manishkumar9525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-4 rounded-full transition-transform transform hover:scale-110 shadow-md"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-b7487a376/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-500 p-4 rounded-full transition-transform transform hover:scale-110 shadow-md"
            >
              <FaLinkedinIn className="text-2xl text-white" />
            </a>
            <a
              href="mailto:manish62073kumar@gmail.com"
              className="bg-gray-800 hover:bg-cyan-500 p-4 rounded-full transition-transform transform hover:scale-110 shadow-md"
            >
              <FaEnvelope className="text-2xl text-white" />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative group">
          {/* Glowing Gradient Ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 blur-xl opacity-70 animate-pulse"></div>

          <img
            src="/my pic.jpg"
            alt="Profile"
            className="relative w-72 h-96 md:w-80 md:h-[400px] rounded-2xl border-4 border-cyan-400 object-cover shadow-xl transform transition duration-500 hover:-translate-y-3 hover:scale-105 animate-float"
          />

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-1 text-sm rounded-md shadow-md group-hover:scale-105 transition">
            100+ Leetcode Solutions
          </div>
        </div>
      </div>

      {/* Gradient Animation Keyframe */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
