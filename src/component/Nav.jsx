import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-[#0f172a]/70 backdrop-blur-md shadow-md`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          <span className="text-white">Manish</span>
          <span className="text-blue-500">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-[1.2rem] font-medium">
          <li><a href="#home" className="hover:text-blue-500 transition text-white">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition text-white">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition text-white">Projects</a></li>
          <li><a href="#achievements" className="hover:text-blue-500 transition text-white">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition text-white">Contact</a></li>
        </ul>

        {/* Toggle Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/80 backdrop-blur-md text-white px-5 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#achievements" className="hover:text-blue-500 transition">Achievements</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
