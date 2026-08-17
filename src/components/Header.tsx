import { useState } from "react";

function Header({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white"
      } shadow-sm fixed w-full top-0 z-50 transition-colors duration-200`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Images/logo.png" alt="Logo" className="h-4 md:h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="font-medium hover:text-blue-600 transition-colors cursor-pointer">Home</a>
          <a href="#projects" className="font-medium hover:text-blue-600 transition-colors cursor-pointer">Projects</a>
          <a href="#experience" className="font-medium hover:text-blue-600 transition-colors cursor-pointer">Experience</a>
          <a href="#skills" className="font-medium hover:text-blue-600 transition-colors cursor-pointer">Skills</a>
          <a href="#contact" className="font-medium hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
            } transition-colors cursor-pointer !rounded-button whitespace-nowrap`}
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>

          {/* Hire Me button (desktop only) */}
          <a
            href="#contact"
            className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
          >
            Hire Me
          </a>

          {/* Hamburger Icon (mobile only) */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} md:hidden border-t`}>
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <a href="#home" className="font-medium hover:text-blue-600 transition-colors">Home</a>
            <a href="#projects" className="font-medium hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="font-medium hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="font-medium hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="font-medium hover:text-blue-600 transition-colors">Contact</a>

            <a
              href="#contact"
              className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-800 transition-colors text-center"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
