import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "manish62073kumar@gmail.com",
      href: "mailto:manish62073kumar@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 6207314759",
      href: "tel:+916207314759",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Patna, Bihar, India",
    },
  ];

  const socials = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/manish-kumar-b7487a376/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Manishkumar9525",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_mani.sh__/",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
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
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.15, 0.06],
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
            w-[450px]
            h-[450px]
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
            x: [0, 80, 0],
            opacity: [0.03, 0.1, 0.03],
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

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
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
          MAIN CONTENT
      ===================================================== */}

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
            Get In Touch
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
            Let's{" "}
            <span className="text-zinc-600">
              Connect.
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
            Have an idea, opportunity, or project in mind?
            I'd love to hear from you and explore how we can
            build something meaningful together.
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
            CONTACT GRID
        ================================================= */}

        <div
          className="
            grid
            lg:grid-cols-[0.85fr_1.15fr]
            gap-8
            items-stretch
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.025]
              backdrop-blur-2xl
              p-7
              md:p-9
              overflow-hidden
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            "
          >

            {/* Card Light */}

            <motion.div
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 5,
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
                via-white/40
                to-transparent
              "
            />

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-600
                mb-4
              "
            >
              Contact Details
            </p>

            <h3
              className="
                text-3xl
                md:text-4xl
                font-black
                mb-5
              "
            >
              Let's start a{" "}
              <span className="text-zinc-600">
                conversation.
              </span>
            </h3>

            <p
              className="
                text-zinc-500
                leading-relaxed
                mb-9
              "
            >
              Whether you're looking for a developer,
              have a project idea, or simply want to connect,
              I'm always open to new opportunities and
              interesting conversations.
            </p>

            {/* Contact Information */}

            <div className="space-y-5">

              {contactInfo.map((item, index) => (
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
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    transition-transform
                    duration-300
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      w-12
                      h-12
                      flex-shrink-0
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                      text-zinc-400
                      group-hover:text-white
                      group-hover:border-white/25
                      group-hover:bg-white/[0.08]
                      transition-all
                      duration-300
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Text */}

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-zinc-600
                        mb-1
                      "
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="
                          text-sm
                          md:text-base
                          text-zinc-300
                          hover:text-white
                          transition-colors
                        "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="
                          text-sm
                          md:text-base
                          text-zinc-300
                        "
                      >
                        {item.value}
                      </p>
                    )}
                  </div>

                </motion.div>
              ))}

            </div>

            {/* Socials */}

            <div
              className="
                mt-10
                pt-7
                border-t
                border-white/10
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                  mb-4
                "
              >
                Find Me Online
              </p>

              <div className="flex gap-3">

                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                      text-zinc-400
                      hover:text-white
                      hover:border-white/30
                      hover:bg-white/[0.08]
                      transition-all
                      duration-300
                    "
                  >
                    {social.icon}
                  </motion.a>
                ))}

              </div>
            </div>

          </motion.div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              relative
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.035]
              backdrop-blur-2xl
              p-7
              md:p-9
              overflow-hidden
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            "
          >

            {/* Moving Top Light */}

            <motion.div
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
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

            <div className="mb-8">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-600
                  mb-3
                "
              >
                Drop a message
              </p>

              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                "
              >
                Tell me about{" "}
                <span className="text-zinc-600">
                  your idea.
                </span>
              </h3>

            </div>

            <form className="space-y-6">

              {/* Name */}

              <div>
                <label
                  className="
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    mb-3
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-white
                    placeholder:text-zinc-700
                    outline-none
                    focus:border-white/30
                    focus:bg-white/[0.05]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  className="
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    mb-3
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-white
                    placeholder:text-zinc-700
                    outline-none
                    focus:border-white/30
                    focus:bg-white/[0.05]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  className="
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    mb-3
                  "
                >
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-white
                    placeholder:text-zinc-700
                    outline-none
                    resize-none
                    focus:border-white/30
                    focus:bg-white/[0.05]
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  w-full
                  py-4
                  px-6
                  rounded-full
                  bg-white
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-zinc-200
                  shadow-[0_15px_50px_rgba(255,255,255,0.08)]
                  transition-all
                  duration-300
                "
              >
                Send Message

                <FaPaperPlane className="text-sm" />
              </motion.button>

            </form>

          </motion.div>

        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            text-center
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-700
            "
          >
            Always open to interesting conversations
          </p>
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