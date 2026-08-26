import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and creative web solutions.",
    img: "public/Screenshot 2026-08-27 002141.png",
   tech: [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "React Icons"
],
    demo: "#",
    code: "https://github.com/Manishkumar9525/potfolio",
  },
    {
    title: "CareerPath AI",
    description:
     " AI-powered personalized career roadmap generator with structured learning paths.",
    img: "public/Screenshot 2026-08-18 234408.png",
    tech: [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Generative AI API",
  "YouTube Data API v3",
  "JWT",
  "bcrypt",
  "Axios"
],
    demo: "https://career-path-ai-seven.vercel.app/",
    code: "https://github.com/Manishkumar9525/CareerPath-AI",
  },
  {
    title: "Civix Voicee",
    description:
      "Civix — A full-stack civic platform for creating petitions, participating in polls, discussing issues, and tracking community engagement.",
    img: "public/Screenshot 2026-08-26 235438.png",
     tech: [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "JWT",
  "bcrypt",
  "Axios"
],
    demo: "https://idyllic-naiad-2a8da8.netlify.app/",
    code: "https://github.com/Manishkumar9525/CivixVoice",
  },
  {
    title: "AquaVeda",
    description:
      "SIH 2024 finalist water conservation platform built using the MERN stack.",
    img: "public/Screenshot 2026-08-27 000912.png",
    tech: [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "Axios"
],
    demo: "https://aquaveda.vercel.app/",
    code: "https://github.com/Manishkumar9525/AquaVeda",
  },

  {
    title: "Flipkart Clone",
    description:
      "E-commerce interface with filtering, search and checkout-focused features.",
    img: "https://thumbs.dreamstime.com/b/flipkart-logo-editorial-illustrative-white-background-flipkart-logo-editorial-illustrative-white-background-eps-download-208329325.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://zesty-stroopwafel-455fa5.netlify.app/",
    code: "https://github.com/Manishkumar9525/flipkartClone",
  },


  {
    title: "Razorpay Clone",
    description:
      "Modern Razorpay landing page clone focused on sleek design and responsive UI.",
    img: "https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    demo: "https://dapper-bonbon-bfe3b1.netlify.app/",
    code: "https://github.com/Manishkumar9525/RazorpayClone",
  },

  {
    title: "Parallax Website",
    description:
      "A sleek parallax website using smooth scrolling effects and interactive visuals.",
    img: "https://i.ytimg.com/vi/4e5poedWGG4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSgUSk-YXqLmHi5BGHpC26ikofTAg",
    tech: ["HTML5", "CSS", "JavaScript"],
    demo: "https://manishkumar9525.github.io/Parallax-site/",
    code: "https://github.com/Manishkumar9525/Parallax-site",
  },
];

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        py-28
        px-4
        sm:px-6
        md:px-16
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-1/3
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-white/[0.04]
            blur-[130px]
          "
        />

        {/* Top Glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-0
            left-0
            w-[300px]
            h-[300px]
            rounded-full
            bg-white/[0.04]
            blur-[100px]
          "
        />

        {/* Bottom Glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-0
            w-[350px]
            h-[350px]
            rounded-full
            bg-white/[0.04]
            blur-[110px]
          "
        />

        {/* Floating Particles */}

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.25, 0.05],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
            }}
            className="
              absolute
              w-[2px]
              h-[2px]
              rounded-full
              bg-white
            "
            style={{
              left: `${(index * 41) % 100}%`,
              top: `${(index * 59) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          variants={fadeInUp}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <p
            className="
              text-xs
              md:text-sm
              uppercase
              tracking-[0.4em]
              text-zinc-500
              mb-4
            "
          >
            Selected Work
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
            "
          >
            Featured{" "}
            <span className="text-zinc-600">
              Projects
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-zinc-500
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            A collection of projects where I turn ideas
            into functional, interactive and meaningful
            digital experiences.
          </p>

          {/* Animated Line */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 90,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              h-px
              bg-white/30
              mx-auto
              mt-6
            "
          />
        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {projectsData.map((project, index) => (
            <motion.article
              key={index}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                hover:border-white/25
                transition-all
                duration-500
              "
            >

              {/* =================================================
                  PROJECT IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-56
                  overflow-hidden
                "
              >

                {/* Image */}

                <motion.img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale-[20%]
                    group-hover:grayscale-0
                    transition-all
                    duration-700
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                    opacity-80
                  "
                />

                {/* Project Number */}

                <span
                  className="
                    absolute
                    top-5
                    left-5
                    text-xs
                    font-mono
                    tracking-[0.2em]
                    text-white/60
                    bg-black/50
                    backdrop-blur-md
                    border
                    border-white/10
                    px-3
                    py-2
                    rounded-full
                  "
                >
                  0{index + 1}
                </span>

                {/* Hover View */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                  "
                >
                  <div
                    className="
                      px-5
                      py-2
                      rounded-full
                      border
                      border-white/20
                      bg-black/60
                      backdrop-blur-xl
                      text-sm
                      text-white
                    "
                  >
                    View Project
                  </div>
                </motion.div>
              </div>

              {/* =================================================
                  PROJECT CONTENT
              ================================================= */}

              <div className="p-6">

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-3
                    group-hover:text-zinc-300
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-zinc-500
                    min-h-[68px]
                  "
                >
                  {project.description}
                </p>

                {/* =================================================
                    TECH STACK
                ================================================= */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-5
                  "
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        delay:
                          index * 0.1 +
                          techIndex * 0.08,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-xs
                        text-zinc-400
                        hover:text-white
                        hover:border-white/25
                        transition-all
                        duration-300
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* =================================================
                    LINKS
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mt-7
                    pt-5
                    border-t
                    border-white/10
                  "
                >

                  {/* Live Demo */}

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      flex-1
                      px-4
                      py-3
                      rounded-full
                      bg-white
                      text-black
                      text-sm
                      font-semibold
                      hover:bg-zinc-200
                      transition-colors
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </motion.a>

                  {/* GitHub */}

                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-zinc-400
                      hover:text-white
                      hover:border-white/30
                      hover:bg-white/[0.08]
                      transition-all
                      duration-300
                    "
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>

                </div>
              </div>

              {/* =================================================
                  CARD LIGHT
              ================================================= */}

              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.7,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-1/2
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  pointer-events-none
                "
              />

            </motion.article>
          ))}
        </div>

        {/* =================================================
            PROJECT COUNT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-16
            flex
            items-center
            justify-center
            gap-5
          "
        >
          <div className="h-px w-16 bg-white/10" />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-600
            "
          >
            More Projects Coming Soon
          </span>

          <div className="h-px w-16 bg-white/10" />
        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM DIVIDER
      ===================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          mt-24
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

    </section>
  );
}