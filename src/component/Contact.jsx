import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">Let's Connect</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? I'd love to hear from you and
          discuss how we can work together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              Whether you're looking for a developer, have a project in mind, or just
              want to connect, I'm always open to discussing new opportunities and
              ideas.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-700 p-2 rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l-4-4m4 4l-4 4m12-4h.01"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:manish62073kumar@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  manish62073kumar@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-700 p-2 rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m6 10h6M15 13v6m-6 0v-6"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-green-400">+91 6207314759</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-700 p-2 rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3c4.418 0 8 3.582 8 8 0 5.25-8 11-8 11S4 16.25 4 11c0-4.418 3.582-8 8-8z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-300">Patna, Bihar, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="font-semibold mb-2">Follow Me</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/manish-kumar-b7487a376/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a
                  href="https://github.com/Manishkumar9525"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/_mani.sh__/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-4 py-2 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
              >
                <FaPaperPlane className="inline mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
