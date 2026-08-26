import { motion } from "framer-motion";
import { DURATION, EASE } from "../utils/animations";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
  SiJest,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

/* =========================================================
   SKILLS DATA
========================================================= */

const skills = [
  {
    title: "Languages",
    items: [
      {
        icon: <FaJs />,
        name: "JavaScript",
        color: "text-yellow-400",
      },
      {
        icon: <FaPython />,
        name: "Python",
        color: "text-orange-400",
      },
      {
        icon: <SiCplusplus />,
        name: "C++",
        color: "text-blue-500",
      },
      {
        icon: <SiMysql />,
        name: "SQL",
        color: "text-blue-400",
      },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        icon: <FaReact />,
        name: "React.js",
        color: "text-cyan-400",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        color: "text-sky-400",
      },
      {
        icon: <FaHtml5 />,
        name: "HTML5",
        color: "text-orange-500",
      },
      {
        icon: <FaCss3Alt />,
        name: "CSS3",
        color: "text-blue-500",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
        color: "text-pink-400",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "text-green-400",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: "text-zinc-300",
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "text-green-500",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        icon: <FaGitAlt />,
        name: "Git",
        color: "text-orange-400",
      },
      {
        icon: <FaGithub />,
        name: "GitHub",
        color: "text-white",
      },
      {
        icon: <VscVscode />,
        name: "VS Code",
        color: "text-blue-400",
      },
      {
        icon: <SiPostman />,
        name: "Postman",
        color: "text-orange-500",
      },
      {
        icon: <SiVercel />,
        name: "Vercel",
        color: "text-white",
      },
      {
        icon: <SiNetlify />,
        name: "Netlify",
        color: "text-cyan-400",
      },
      {
        icon: <SiRender />,
        name: "Render",
        color: "text-purple-400",
      },
    ],
  },

  {
    title: "Testing",
    items: [
      {
        icon: <SiJest />,
        name: "Jest",
        color: "text-red-400",
      },
      {
        icon: <SiPostman />,
        name: "API Testing",
        color: "text-orange-500",
      },
    ],
  },
];

/* =========================================================
   CORE CONCEPTS
========================================================= */

const coreConcepts = [
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
  "REST APIs",
   "computer Network"
];

/* =========================================================
   FLOATING SKILL
========================================================= */

const FloatingSkill = ({ skill, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.4,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: false }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: EASE,
      }}
      whileHover={{
        scale: 1.15,
        y: -8,
      }}
      className="relative group cursor-pointer"
    >
      {/* Skill Glow */}

      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-white/10
          blur-2xl
        "
      />

      {/* Skill Pill */}

      <div
        className="
          relative
          flex
          items-center
          gap-3
          px-5
          py-3
          rounded-full
          border
          border-white/10
          bg-black/60
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
          transition-all
          duration-500
          group-hover:border-white/30
          group-hover:bg-white/[0.08]
        "
      >
        {/* Icon */}

        <motion.span
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.15,
          }}
          className={`text-2xl ${skill.color}`}
        >
          {skill.icon}
        </motion.span>

        {/* Name */}

        <span
          className="
            text-sm
            font-medium
            text-zinc-400
            group-hover:text-white
            transition-colors
            duration-300
            whitespace-nowrap
          "
        >
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

/* =========================================================
   TECHNOLOGY COUNT BADGE
========================================================= */

const TechnologyBadge = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
        y: -20,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
      }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: EASE,
      }}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      className="
        absolute
        top-0
        right-2
        md:right-10
        lg:right-20
        z-30
        px-5
        md:px-6
        py-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        group
        overflow-hidden
      "
    >
      {/* Moving Shine */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
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
          via-white/50
          to-transparent
        "
      />

      <div className="relative flex items-center gap-4">

        {/* Number */}

        <motion.span
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          "
        >
          20+
        </motion.span>

        {/* Text */}

        <div>
          <p
            className="
              text-[10px]
              md:text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-500
            "
          >
            Technologies
          </p>

          <p className="text-sm text-zinc-300 mt-1">
            & Tools
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const SkillSection = () => {
  const allSkills = skills.flatMap(
    (category) => category.items
  );

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        py-28
        px-4
        sm:px-6
        lg:px-12
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
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[450px]
            h-[450px]
            md:w-[700px]
            md:h-[700px]
            rounded-full
            bg-white/[0.04]
            blur-[120px]
          "
        />

        {/* Floating Dots */}

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.3,
            }}
            className="
              absolute
              w-1
              h-1
              bg-white
              rounded-full
            "
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: DURATION,
            ease: EASE,
          }}
          className="text-center"
        >
          <span
            className="
              text-xs
              md:text-sm
              uppercase
              tracking-[0.4em]
              text-zinc-500
            "
          >
            My Stack
          </span>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
            "
          >
            Technical{" "}
            <span className="text-zinc-600">
              Arsenal
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-zinc-500
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Technologies and tools I use to turn ideas
            into scalable, real-world applications.
          </p>
        </motion.div>

        {/* =================================================
            ORBIT AREA
        ================================================= */}

        <div
          className="
            relative
            mt-20
            min-h-[600px]
            flex
            items-center
            justify-center
          "
        >

          {/* =================================================
              TECHNOLOGY BADGE
          ================================================= */}

          <TechnologyBadge />

          {/* =================================================
              OUTER ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[280px]
              h-[280px]
              md:w-[470px]
              md:h-[470px]
              rounded-full
              border
              border-white/[0.06]
            "
          />

          {/* =================================================
              MIDDLE ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[190px]
              h-[190px]
              md:w-[340px]
              md:h-[340px]
              rounded-full
              border
              border-white/[0.08]
              border-dashed
            "
          />

          {/* =================================================
              INNER ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[110px]
              h-[110px]
              md:w-[210px]
              md:h-[210px]
              rounded-full
              border
              border-white/[0.1]
            "
          />

          {/* =================================================
              CENTER DOT
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-4
              h-4
              md:w-5
              md:h-5
              rounded-full
              bg-white
              shadow-[0_0_40px_rgba(255,255,255,0.5)]
              z-10
            "
          />

          {/* =================================================
              FLOATING SKILLS
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              flex
              flex-wrap
              justify-center
              items-center
              gap-3
              md:gap-5
              content-center
              px-2
              md:px-8
              pt-12
            "
          >
            {allSkills.map((skill, index) => (
              <FloatingSkill
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            CORE CONCEPTS
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
          }}
          className="mt-10"
        >

          <div className="flex items-center gap-5 mb-7">

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-600
                whitespace-nowrap
              "
            >
              Core Concepts
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <div className="flex flex-wrap gap-3">

            {coreConcepts.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.025]
                  text-sm
                  text-zinc-400
                  hover:text-white
                  hover:border-white/25
                  hover:bg-white/[0.06]
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {item}
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM LINE
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
};

export default SkillSection;