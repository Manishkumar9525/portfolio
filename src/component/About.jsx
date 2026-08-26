import {
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaTrophy,
} from "react-icons/fa";

import { motion } from "framer-motion";

function About() {
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

  const cards = [
    {
      icon: <FaCode />,
      title: "Development",
      text: "MERN Stack, REST APIs, JavaScript, React.js, Node.js, Express.js & MongoDB.",
    },
    {
      icon: <FaBrain />,
      title: "AI & Learning",
      text: "Currently exploring Generative AI, LLMs and Agentic AI to build intelligent applications.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Problem Solving",
      text: "Strong focus on DSA, logical thinking and writing clean, efficient solutions.",
    },
    {
      icon: <FaTrophy />,
      title: "Achievements",
      text: "Smart India Hackathon 2024 Finalist with hands-on experience building real-world projects.",
    },
  ];

  return (
    <section
      id="about"
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
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main center glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
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
            w-[400px]
            h-[400px]
            md:w-[700px]
            md:h-[700px]
            rounded-full
            bg-white/[0.04]
            blur-[120px]
          "
        />

        {/* Top glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-40
            left-1/4
            w-[350px]
            h-[350px]
            rounded-full
            bg-white/[0.04]
            blur-[100px]
          "
        />

        {/* Bottom glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            right-1/4
            w-[350px]
            h-[350px]
            rounded-full
            bg-white/[0.04]
            blur-[100px]
          "
        />

        {/* Floating particles */}

        {[...Array(20)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25, 0],
              opacity: [0.08, 0.35, 0.08],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[3px]
              h-[3px]
              rounded-full
              bg-white
            "
            style={{
              left: `${(index * 47) % 100}%`,
              top: `${(index * 61) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              text-zinc-500
              uppercase
              tracking-[0.4em]
              text-xs
              md:text-sm
              font-medium
            "
          >
            Profile
          </motion.p>

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
            About{" "}
            <span className="text-zinc-600">
              Me
            </span>
          </h2>

          {/* Animated line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              h-[2px]
              bg-white/40
              mx-auto
              mt-5
            "
          />
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
            variants={fadeInUp}
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-600
                mb-5
              "
            >
              Who I am
            </p>

            <h3
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-black
                leading-tight
                mb-8
              "
            >
              Building ideas into{" "}
              <span className="text-zinc-500">
                real products.
              </span>
            </h3>

            <div className="space-y-6">

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="
                  text-zinc-300
                  text-lg
                  md:text-xl
                  leading-relaxed
                "
              >
                I’m{" "}
                <span className="text-white font-semibold">
                  Manish Kumar
                </span>
                , a passionate Software Developer with a
                strong foundation in{" "}
                <span className="text-white">
                  MERN Stack, DSA
                </span>{" "}
                and modern web development.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35 }}
                className="
                  text-zinc-500
                  text-lg
                  md:text-xl
                  leading-relaxed
                "
              >
                I enjoy building full-stack applications,
                solving challenging problems, and turning
                ideas into clean, functional and
                user-friendly products.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="
                  text-zinc-500
                  text-lg
                  md:text-xl
                  leading-relaxed
                "
              >
                Currently, I’m exploring{" "}
                <span className="text-white font-medium">
                  Generative AI & Agentic AI
                </span>{" "}
                to build smarter applications and explore
                new possibilities with AI.
              </motion.p>

            </div>

            {/* Small signature line */}

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{
                opacity: 1,
                width: "100%",
              }}
              viewport={{ once: false }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="
                mt-10
                h-px
                bg-gradient-to-r
                from-white/20
                via-white/5
                to-transparent
              "
            />

          </motion.div>

          {/* =================================================
              RIGHT — FLOATING CARDS
          ================================================= */}

          <div className="relative">

            {/* Center glow */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                bg-white/[0.04]
                blur-[80px]
                rounded-full
              "
            />

            <div className="relative grid sm:grid-cols-2 gap-5">

              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    min-h-[220px]
                    p-7
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.035]
                    backdrop-blur-2xl
                    shadow-[0_20px_70px_rgba(0,0,0,0.45)]
                    hover:border-white/25
                    transition-all
                    duration-500
                  "
                >

                  {/* Moving light */}

                  <motion.div
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-0
                      left-0
                      w-1/2
                      h-[1px]
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                    "
                  />

                  {/* Hover glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-white/[0.03]
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  {/* Icon */}

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      z-10
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      border
                      border-white/10
                      bg-white/[0.05]
                      text-white
                      text-xl
                      mb-7
                      group-hover:border-white/30
                      transition-all
                      duration-500
                    "
                  >
                    {card.icon}
                  </motion.div>

                  {/* Number */}

                  <span
                    className="
                      absolute
                      top-6
                      right-7
                      text-5xl
                      font-black
                      text-white/[0.03]
                      group-hover:text-white/[0.08]
                      transition-colors
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Content */}

                  <div className="relative z-10">

                    <h4
                      className="
                        text-xl
                        font-bold
                        mb-3
                        text-white
                      "
                    >
                      {card.title}
                    </h4>

                    <p
                      className="
                        text-sm
                        text-zinc-500
                        leading-relaxed
                        group-hover:text-zinc-400
                        transition-colors
                      "
                    >
                      {card.text}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>
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
            relative
            mt-20
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

            {[
              {
                number: "10+",
                label: "Projects Built",
              },
              {
                number: "200+",
                label: "DSA Problems",
              },
              {
                number: "MERN",
                label: "Full-Stack",
              },
              {
                number: "AI",
                label: "Exploring & Building",
              },
            ].map((stat, index) => (

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
                  y: -5,
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

export default About;