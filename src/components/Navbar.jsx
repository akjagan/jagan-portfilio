import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`flex justify-between items-center p-4 shadow fixed w-full top-0 z-50 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white shadow-gray-800"
          : "bg-white text-gray-800 shadow-gray-200"
      }`}
    >
      <h1 className="text-xl font-bold">Ganishwar Portfolio</h1>
      <div className="flex gap-6 items-center">
        <Link
          to="/"
          className={`hover:text-blue-500 transition-colors duration-300 ${
            darkMode
              ? "text-gray-300 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-blue-500 transition-colors duration-300 ${
            darkMode
              ? "text-gray-300 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`hover:text-blue-500 transition-colors duration-300 ${
            darkMode
              ? "text-gray-300 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Projects
        </Link>

        <Link
          to="/experience"
          className={`hover:text-blue-500 transition-colors duration-300 ${
            darkMode
              ? "text-gray-300 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Career
        </Link>

        <Link
          to="/contact"
          className={`hover:text-blue-500 transition-colors duration-300 ${
            darkMode
              ? "text-gray-300 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Contact
        </Link>
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
      </div>
    </nav>
  );
}

export default Navbar;

