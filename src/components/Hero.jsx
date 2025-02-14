import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 text-gray-900 px-6 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Enlarged Profile Image */}
      <motion.img
        src="/Ganishwar.png"
        alt="Ganishwar Arun"
        className="w-64 h-64 object-cover rounded-full shadow-2xl border-8 border-blue-500 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl mb-6"
      >
        Full Stack Developer | MERN Stack | Passionate Coder
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex space-x-6"
      >
        <a
          href="/Ganishwar_ppt_resume.pdf"
          download="Ganishwar_Resume.pdf"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105"
        >
          Download Resume
        </a>
        <Link
          to="/contact"
          className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;