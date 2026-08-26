import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* =====================================================
     SCROLL NAVIGATION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at top
      if (currentScrollY <= 20) {
        setShowNav(true);
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNav(false);
        setIsOpen(false);
      }
      // Scrolling up
      else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: showNav ? 0 : -120,
        opacity: showNav ? 1 : 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-3
        sm:px-5
        md:px-8
        pt-3
      "
    >
      <nav
        className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-7
          py-3
          rounded-2xl
          border
          border-white/10
          bg-black/70
          backdrop-blur-2xl
          shadow-[0_15px_60px_rgba(0,0,0,0.45)]
        "
      >

        {/* =================================================
            TOP LIGHT
        ================================================= */}

        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            left-0
            w-1/3
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            pointer-events-none
          "
        />

        <div className="flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================= */}

          <motion.a
            href="#home"
            onClick={handleNavClick}
            whileHover={{
              scale: 1.03,
            }}
            className="
              text-2xl
              sm:text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            Manish
            <span className="text-zinc-600">
              .dev
            </span>
          </motion.a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="hidden md:flex items-center gap-1">

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="
                  group
                  relative
                  px-4
                  py-2.5
                  rounded-full
                  text-sm
                  text-zinc-500
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                {link.name}

                {/* Hover Background */}

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-white/[0.05]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    -z-10
                  "
                />

                {/* Bottom Dot */}

                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-0
                    h-[2px]
                    rounded-full
                    bg-white
                    group-hover:w-3
                    transition-all
                    duration-300
                  "
                />
              </motion.a>
            ))}

          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              hidden
              md:flex
              items-center
              gap-2
              px-5
              py-2.5
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
            Let's Talk

            <FaArrowUpRightFromSquare className="text-xs" />
          </motion.a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="
              md:hidden
              relative
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              flex
              items-center
              justify-center
              text-zinc-300
              hover:text-white
              hover:border-white/25
              transition-all
              duration-300
            "
          >

            <span
              className={`
                absolute
                w-5
                h-px
                bg-current
                transition-transform
                duration-300
                ${
                  isOpen
                    ? "rotate-45"
                    : "-translate-y-1.5"
                }
              `}
            />

            <span
              className={`
                absolute
                w-5
                h-px
                bg-current
                transition-opacity
                duration-300
                ${
                  isOpen
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />

            <span
              className={`
                absolute
                w-5
                h-px
                bg-current
                transition-transform
                duration-300
                ${
                  isOpen
                    ? "-rotate-45"
                    : "translate-y-1.5"
                }
              `}
            />

          </motion.button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="
                md:hidden
                overflow-hidden
              "
            >

              <div
                className="
                  mt-4
                  pt-4
                  border-t
                  border-white/10
                  space-y-1
                "
              >

                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-xl
                      text-sm
                      text-zinc-500
                      hover:text-white
                      hover:bg-white/[0.05]
                      transition-all
                      duration-300
                    "
                  >
                    {link.name}

                    <span className="text-zinc-700">
                      →
                    </span>
                  </motion.a>
                ))}

                {/* Mobile CTA */}

                <motion.a
                  href="#contact"
                  onClick={handleNavClick}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    mt-3
                    px-4
                    py-3
                    rounded-xl
                    bg-white
                    text-black
                    text-sm
                    font-semibold
                  "
                >
                  Let's Talk

                  <FaArrowUpRightFromSquare className="text-xs" />
                </motion.a>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}