import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-5
        md:px-16
        py-24
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
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
            x: [0, 70, 0],
            y: [0, -30, 0],
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
            y: [0, 40, 0],
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

        {/* =================================================
            FLOATING PARTICLES
        ================================================= */}

        {[...Array(25)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25, 0],
              opacity: [0.05, 0.3, 0.05],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
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
              top: `${(index * 67) % 100}%`,
            }}
          />
        ))}

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-16
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            flex-1
            text-center
            lg:text-left
          "
        >

          {/* Small Intro */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-3
              mb-5
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
                text-sm
                uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Hello, I'm
            </span>
          </motion.div>

          {/* NAME */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-black
              tracking-tight
              leading-none
            "
          >
            Manish{" "}
            <span className="text-zinc-600">
              Kumar
            </span>
          </motion.h1>

          {/* ROLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="mt-7"
          >
            <h2
              className="
                text-xl
                md:text-2xl
                font-medium
                text-zinc-300
              "
            >
              Software Developer{" "}
              <span className="text-zinc-600">
                &
              </span>{" "}
              AI Enthusiast
            </h2>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
            className="
              mt-6
              max-w-2xl
              mx-auto
              lg:mx-0
              text-base
              md:text-lg
              leading-relaxed
              text-zinc-500
            "
          >
            I build clean, scalable web applications with
            the <span className="text-zinc-300">MERN stack</span>{" "}
            and strong problem-solving skills through DSA.
            Currently exploring{" "}
            <span className="text-zinc-300">
              Generative AI & Agentic AI
            </span>{" "}
            to create smart, practical and impactful digital
            products.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-9
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              lg:justify-start
            "
          >

            {/* Contact */}

            <motion.a
              href="#contact"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                px-7
                py-3.5
                rounded-full
                bg-white
                text-black
                text-sm
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                shadow-[0_10px_40px_rgba(255,255,255,0.12)]
                hover:shadow-[0_15px_50px_rgba(255,255,255,0.2)]
                transition-shadow
                duration-300
              "
            >
              Contact Me
            </motion.a>

            {/* CV */}

            <motion.a
              href="src/assets/Manish_resume_17826.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                px-7
                py-3.5
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                backdrop-blur-xl
                text-zinc-300
                text-sm
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                hover:bg-white/[0.08]
                hover:border-white/30
                hover:text-white
                transition-all
                duration-300
              "
            >
              Download CV
            </motion.a>

          </motion.div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="
              flex
              gap-3
              mt-8
              justify-center
              lg:justify-start
            "
          >

            {/* GitHub */}

            <SocialIcon
              href="https://github.com/Manishkumar9525"
              icon={<FaGithub />}
              label="GitHub"
            />

            {/* LinkedIn */}

            <SocialIcon
              href="https://www.linkedin.com/in/manish-kumar-b7487a376/"
              icon={<FaLinkedinIn />}
              label="LinkedIn"
            />

            {/* Email */}

            <SocialIcon
              href="mailto:manish62073kumar@gmail.com"
              icon={<FaEnvelope />}
              label="Email"
            />

          </motion.div>

        </motion.div>

        {/* =================================================
            RIGHT PROFILE IMAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            relative
            group
            flex
            justify-center
            items-center
            flex-shrink-0
          "
        >

          {/* Outer Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[360px]
              h-[480px]
              md:w-[400px]
              md:h-[500px]
              rounded-[40px]
              border
              border-white/10
              border-dashed
            "
          />

          {/* Inner Ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[340px]
              h-[460px]
              md:w-[380px]
              md:h-[480px]
              rounded-[35px]
              border
              border-white/[0.06]
            "
          />

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[300px]
              h-[400px]
              rounded-full
              bg-white/[0.08]
              blur-[80px]
            "
          />

          {/* Profile Image */}

          <motion.img
            src="public/WhatsApp Image 2026-08-26 at 10.52.58 PM (1).jpeg"
            alt="Manish Kumar"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.06,
              rotate: 1,
              filter: "saturate(1.15) contrast(1.05)",
              boxShadow: "0 35px 110px rgba(255,255,255,0.2)",
            }}
            className="
              relative
              z-10
              w-80
              h-[420px]
              md:w-[340px]
              md:h-[440px]
              rounded-[28px]
              border
              border-white/15
              object-cover
              shadow-[0_30px_100px_rgba(0,0,0,0.7)]
              grayscale-[15%]
              transition-all
              duration-500
              ease-out
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              z-20
              w-80
              h-[420px]
              md:w-[340px]
              md:h-[440px]
              rounded-[28px]
              bg-gradient-to-br
              from-white/20
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* =================================================
              FLOATING BADGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: {
                delay: 1.2,
                duration: 0.6,
              },
              scale: {
                delay: 1.2,
                duration: 0.6,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              z-20
              -bottom-6
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              px-5
              py-3
              rounded-full
              border
              border-white/10
              bg-black/80
              backdrop-blur-xl
              shadow-[0_15px_50px_rgba(0,0,0,0.6)]
            "
          >
            <span
              className="
                text-xs
                md:text-sm
                text-zinc-300
                font-medium
              "
            >
              200+ LeetCode Solutions
            </span>
          </motion.div>

        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-3
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-zinc-600
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            w-5
            h-8
            rounded-full
            border
            border-white/15
            flex
            justify-center
            pt-2
          "
        >
          <div
            className="
              w-1
              h-1
              rounded-full
              bg-white/60
            "
          />
        </motion.div>
      </motion.div>

    </section>
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
        group
        relative
        w-12
        h-12
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        flex
        items-center
        justify-center
        text-zinc-400
        text-lg
        overflow-hidden
        hover:text-white
        hover:border-white/30
        hover:bg-white/[0.08]
        transition-all
        duration-300
      "
    >
      {/* Hover Glow */}

      <span
        className="
          absolute
          inset-0
          bg-white/[0.06]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      <span className="relative z-10">
        {icon}
      </span>
    </motion.a>
  );
}