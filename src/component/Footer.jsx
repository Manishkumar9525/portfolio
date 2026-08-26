import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <footer
      className="
        relative
        bg-black
        text-white
        px-5
        sm:px-8
        md:px-16
        pt-20
        pb-8
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[500px]
          h-[250px]
          rounded-full
          bg-white/[0.05]
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="max-w-7xl mx-auto relative z-10">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1.5fr_0.7fr_1fr]
            gap-12
            pb-14
          "
        >

          {/* =================================================
              BRANDING
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
              duration: 0.7,
            }}
          >

            {/* Logo */}

            <a
              href="#home"
              className="
                inline-block
                text-2xl
                md:text-3xl
                font-black
                tracking-tight
              "
            >
              Manish
              <span className="text-zinc-600">
                .dev
              </span>
            </a>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-md
                text-sm
                md:text-base
                leading-relaxed
                text-zinc-500
              "
            >
              I believe in showing up every day, learning
              something new, and pushing boundaries —
              because growth lives outside comfort.
            </p>

            {/* Status */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-white
                "
              />

              <span
                className="
                  text-xs
                  text-zinc-500
                  uppercase
                  tracking-[0.15em]
                "
              >
                Available for opportunities
              </span>
            </div>

            {/* Social Icons */}

            <div className="flex gap-3 mt-7">

              <SocialIcon
                href="https://github.com/Manishkumar9525"
                icon={<FaGithub />}
                label="GitHub"
              />

              <SocialIcon
                href="https://www.linkedin.com/in/manish-kumar-b7487a376/"
                icon={<FaLinkedinIn />}
                label="LinkedIn"
              />

              <SocialIcon
                href="mailto:manish62073kumar@gmail.com"
                icon={<FaEnvelope />}
                label="Email"
              />

            </div>

          </motion.div>

          {/* =================================================
              QUICK LINKS
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
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-600
                mb-6
              "
            >
              Navigation
            </p>

            <ul className="space-y-3">

              {quickLinks.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      w-fit
                      text-sm
                      text-zinc-500
                      hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    <span
                      className="
                        w-0
                        h-px
                        bg-white
                        group-hover:w-4
                        transition-all
                        duration-300
                      "
                    />

                    {link}
                  </a>
                </motion.li>
              ))}

            </ul>

          </motion.div>

          {/* =================================================
              CONTACT
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
              duration: 0.7,
              delay: 0.3,
            }}
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-600
                mb-6
              "
            >
              Contact
            </p>

            <div className="space-y-4">

              <div>
                <p className="text-xs text-zinc-700 mb-1">
                  Email
                </p>

                <a
                  href="mailto:manish62073kumar@gmail.com"
                  className="
                    text-sm
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  manish62073kumar@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-zinc-700 mb-1">
                  Phone
                </p>

                <a
                  href="tel:+916207314759"
                  className="
                    text-sm
                    text-zinc-400
                    hover:text-white
                    transition-colors
                  "
                >
                  +91 62073 14759
                </a>
              </div>

              <div>
                <p className="text-xs text-zinc-700 mb-1">
                  Location
                </p>

                <p className="text-sm text-zinc-400">
                  Patna, Bihar, India
                </p>
              </div>

            </div>

            {/* Back To Top */}

            <motion.a
              href="#home"
              whileHover={{
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-sm
                text-zinc-400
                hover:text-white
                hover:border-white/25
                hover:bg-white/[0.07]
                transition-all
                duration-300
              "
            >
              Back to top

              <FaArrowUp className="text-xs" />
            </motion.a>

          </motion.div>

        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* =================================================
            BOTTOM
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            pt-7
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p
            className="
              text-xs
              text-zinc-700
              text-center
              md:text-left
            "
          >
            © {new Date().getFullYear()} Manish Kumar.
            All rights reserved.
          </p>

          <p
            className="
              text-xs
              text-zinc-700
            "
          >
            Designed & built with curiosity.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}


/* =========================================================
   SOCIAL ICON COMPONENT
========================================================= */

function SocialIcon({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={
        href.startsWith("mailto:")
          ? undefined
          : "noopener noreferrer"
      }
      aria-label={label}
      whileHover={{
        y: -5,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        w-11
        h-11
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        flex
        items-center
        justify-center
        text-zinc-500
        hover:text-white
        hover:border-white/30
        hover:bg-white/[0.08]
        transition-all
        duration-300
      "
    >
      {icon}
    </motion.a>
  );
}