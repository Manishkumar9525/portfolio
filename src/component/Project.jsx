import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and creative web solutions.",
   img: "https://i.postimg.cc/nzbhmmkg/Screenshot-2025-09-15-234142.png",
    tech: ["Tailwind CSS", "React", "JavaScript"],
    demo: "#",
    code: "#",
  },
  {
    title: "Amazon Clone",
    description: "Product listings & user authentication.",
     img: "https://wallpaper.forfun.com/fetch/96/9688ec1ec6ed8ae0e8e8eab958517896.jpeg",
    tech: ["HTML", "CSS"],
    demo: "https://idyllic-naiad-2a8da8.netlify.app/",
    code: "https://github.com/Manishkumar9525/Amazon-homepage",
  },
  {
    title: "Flipkart Clone",
    description: "Filtering, search & checkout features.",
     img: "https://thumbs.dreamstime.com/b/flipkart-logo-editorial-illustrative-white-background-flipkart-logo-editorial-illustrative-white-background-eps-download-208329325.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://zesty-stroopwafel-455fa5.netlify.app/",
    code: "https://github.com/Manishkumar9525/flipkartClone",
  },
  {
    title: "Razorpay Clone",
    description:
      "A modern Razorpay landing page clone built with Tailwind CSS, replicating sleek design and responsive UI.",
     img: "https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    demo: "https://dapper-bonbon-bfe3b1.netlify.app/",
    code: "https://github.com/Manishkumar9525/RazorpayClone",
  },
  {
    title: "Parallax Website",
    description:
      "A sleek parallax website crafted with HTML, CSS, and a touch of JavaScript to enhance scrolling effects.",
     img: "https://i.ytimg.com/vi/4e5poedWGG4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSgUSk-YXqLmHi5BGHpC26ikofTAg",
    tech: ["HTML5", "CSS", "JavaScript"],
    demo: "https://manishkumar9525.github.io/Parallax-site/",
    code: "https://github.com/Manishkumar9525/Parallax-site",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-4 md:px-20"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Some of my best web development projects.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }} // Hover motion effect
            >
              {/* Image with hover zoom & lazy loading */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  loading="lazy" // ✅ Lazy loading
                  className="w-full h-44 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.demo}
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    🔗 Demo
                  </a>
                  <a
                    href={project.code}
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
