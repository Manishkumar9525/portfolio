import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCode,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";

const achievements = [
  {
    year: "2025",
    title: "Infosys Springboard",
    description:
      "Selected for Infosys Springboard, gaining valuable experience through professional learning and real-world project development.",
    icon: <FaBriefcase />,
  },
  {
    year: "2024",
    title: "Smart India Hackathon Finalist",
    description:
      "Selected as a Finalist in Smart India Hackathon 2024, one of India's largest national-level hackathons.",
    icon: <FaTrophy />,
  },
 
  {
    year: "2024",
    title: "100+ LeetCode Problems",
    description:
      "Built consistency in problem solving by solving 100+ algorithmic challenges and strengthening DSA fundamentals.",
    icon: <FaCode />,
  },
  {
    year: "2025",
    title: "4-Star C++ Badge",
    description:
      "Earned a 4-Star C++ badge on HackerRank, demonstrating strong programming and problem-solving skills.",
    icon: <FaStar />,
  },
];

const stats = [
  {
    number: "200+",
    label: "DSA Problems",
  },
  {
    number: "7.28",
    label: "B.Tech CGPA",
  },
  {
    number: "5+",
    label: "Web Projects",
  },
  {
    number: "1",
    label: "SIH Finalist",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            md:w-[700px]
            md:h-[700px]
            rounded-full
            bg-white/[0.04]
            blur-[130px]
          "
        />

        {/* Left Glow */}

        <motion.div
          animate={{
            x: [0, 70, 0],
            opacity: [0.03, 0.1, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-20
            left-0
            w-[300px]
            h-[300px]
            rounded-full
            bg-white/[0.04]
            blur-[100px]
          "
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            opacity: [0.03, 0.1, 0.03],
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

        {[...Array(20)].map((_, index) => (
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
              left: `${(index * 43) % 100}%`,
              top: `${(index * 61) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="max-w-6xl mx-auto relative z-10">

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
            duration: 0.8,
          }}
          className="text-center mb-20"
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
            Milestones
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
            Achieve{" "}
            <span className="text-zinc-600">
              More.
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
            A few milestones that represent my growth,
            consistency and journey as a developer.
          </p>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 80,
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
            TIMELINE
        ================================================= */}

        <div className="relative">

          {/* Central Line */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-white/20
              to-transparent
              origin-top
            "
          />

          {/* Achievement Items */}

          <div className="space-y-14 md:space-y-20">

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`
                  relative
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >

                {/* Timeline Node */}

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className="
                    absolute
                    left-[10px]
                    md:left-1/2
                    md:-translate-x-1/2
                    z-20
                    w-3
                    h-3
                    rounded-full
                    bg-white
                    shadow-[0_0_25px_rgba(255,255,255,0.4)]
                  "
                />

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className={`
                    group
                    relative
                    ml-14
                    md:ml-0
                    w-[calc(100%-3.5rem)]
                    md:w-[43%]
                    p-7
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    shadow-[0_20px_70px_rgba(0,0,0,0.5)]
                    hover:border-white/25
                    transition-all
                    duration-500
                    ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }
                  `}
                >

                  {/* Moving Light */}

                  <motion.div
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.6,
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
                    "
                  />

                  {/* Background Number */}

                  <span
                    className="
                      absolute
                      top-4
                      right-6
                      text-6xl
                      font-black
                      text-white/[0.035]
                      group-hover:text-white/[0.08]
                      transition-colors
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Icon + Year */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                      mb-6
                    "
                  >

                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.05]
                        flex
                        items-center
                        justify-center
                        text-white
                        group-hover:border-white/30
                        transition-all
                        duration-500
                      "
                    >
                      {achievement.icon}
                    </motion.div>

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-zinc-600
                      "
                    >
                      {achievement.year}
                    </span>

                  </div>

                  {/* Title */}

                  <h3
                    className="
                      relative
                      z-10
                      text-xl
                      md:text-2xl
                      font-bold
                      text-white
                      mb-3
                    "
                  >
                    {achievement.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
                      z-10
                      text-sm
                      md:text-base
                      leading-relaxed
                      text-zinc-500
                      group-hover:text-zinc-400
                      transition-colors
                    "
                  >
                    {achievement.description}
                  </p>

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* =================================================
            STATS
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
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-24
            pt-10
            border-t
            border-white/10
          "
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            "
          >

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -6,
                }}
                className="text-center"
              >

                <motion.h3
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    text-white
                  "
                >
                  {stat.number}
                </motion.h3>

                <p
                  className="
                    mt-3
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </div>
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