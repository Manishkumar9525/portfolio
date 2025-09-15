export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold">
            Manish<span className="text-blue-500">.dev</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            I believe in showing up every day, learning something new, and pushing
            boundaries—because growth lives outside comfort.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="https://github.com/Manishkumar9525"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-690577275/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:manish62073kumar@gmail.com"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a></li>
            <li><a href="#achievements" className="hover:text-white transition-colors duration-300">Achievements</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Bengal, India</li>
            <li>
              <a
                href="mailto:manish62073kumar@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                manish62073kumar@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+916207314759"
                className="hover:text-white transition-colors duration-300"
              >
                +91 62073 14759
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
        © 2025 Manish Kumar. All rights reserved ❤️.
      </div>
    </footer>
  );
}
