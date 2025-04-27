

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode to the entire page
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark", "bg-gray-900", "text-white");
    } else {
      document.body.classList.remove("dark", "bg-gray-900", "text-white");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-4 shadow-md transition-colors duration-300 flex justify-between items-center ${
        darkMode
          ? "bg-gray-900 text-white shadow-gray-800"
          : "bg-white text-gray-800 shadow-gray-200"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold cursor-pointer hover:text-blue-500 transition-colors duration-300"
        onClick={() => setMenuOpen(false)} 
      >
        Jagan Portfolio
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Career", path: "/experience" },
          { name: "Contact", path: "/contact" },
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`hover:text-blue-500 transition-colors duration-300 ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Dark Mode Toggle & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full hover:bg-opacity-20 transition-colors duration-300 ${
            darkMode
              ? "hover:bg-yellow-500 text-yellow-500"
              : "hover:bg-blue-500 text-blue-500"
          }`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center gap-4 py-6 md:hidden`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Career", path: "/experience" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-lg font-medium hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

