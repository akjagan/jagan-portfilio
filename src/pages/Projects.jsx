// src/pages/Projects.jsx
import React, { useState } from "react";
import {
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const projects = [
  {
    category: "Landing Page Projects",
    items: [
      {
        title: "Landing Page using HTML & TailwindCSS",
        description:
          "A responsive landing page built with HTML and TailwindCSS.",
        techStack: ["HTML", "TailwindCSS"],
        liveLink: "https://ganishwartailwindtask-2.netlify.app/",
        repoLink: "https://github.com/GanishwarArun/task-2-tailwind",
      },
    ],
  },
  {
    category: "Frontend Projects",
    items: [
      {
        title: "Income-Expense Calculator (JS DOM)",
        description:
          "A web-based income and expense tracker built using JavaScript DOM manipulation.",
        techStack: ["JavaScript", "HTML", "CSS"],
        liveLink: "https://ganishwarinc-expcalculator-task-4.netlify.app/",
        repoLink:
          "https://github.com/GanishwarArun/income-expenditure-tracker-task-4.git",
      },
      {
        title: "E-Cart App (React)",
        description:
          "A fully responsive e-commerce cart application built with React and React Router.",
        techStack: ["React", "TailwindCSS"],
        liveLink: "https://ganish-router-task6.netlify.app/",
        repoLink:
          "https://github.com/GanishwarArun/CART_APP-React-Router-Task-6.git",
      },
      {
        title: "Movie Searching App",
        description: "A movie search application built using React Router.",
        techStack: ["React", "React Router"],
        liveLink: "https://ganish-moviesearchingapp-reactrouter7.netlify.app/",
        repoLink:
          "https://github.com/GanishwarArun/Movie-Searching-app-task-7.git",
      },
    ],
  },
  {
    category: "Backend Projects",
    items: [
      {
        title: "Recipe API Backend",
        description:
          "A Node.js and Express-based API for managing and retrieving recipes.",
        techStack: ["Node.js", "Express.js", "MongoDB"],
        liveLink: "https://dashboard.render.com/web/srv-csbo3gi3esus73ftuotg",
        repoLink: "https://github.com/GanishwarArun/recipie.git",
      },
      {
        title: "Bearer Token Authentication API",
        description:
          "A backend authentication service using bearer token authorization.",
        techStack: ["Node.js", "Express.js", "MongoDB", "JWT"],
        liveLink: "https://dashboard.render.com/web/srv-csfkiq5svqrc73fggue0",
        repoLink: "https://github.com/GanishwarArun/Task11-Bearer-token.git",
      },
    ],
  },
  {
    category: "Full-Stack Development (FSD) Projects",
    items: [
      {
        title: "Password Reset Flow (Full Stack MERN)",
        description:
          "A full-stack password reset flow system using MERN stack.",
        techStack: ["React", "Node.js", "MongoDB", "Express.js"],
        liveLink:
          "https://passwordresetflow-fullfsd-mernstack.netlify.app/user/login",
        repoLink:
          "https://github.com/GanishwarArun/Reset-flow-project-13-Full-MERN-stack.git",
      },
      {
        title: "Flight Booking & Reservation System (Capstone Project)",
        description:
          "A full-stack flight reservation system with authentication, real-time booking, and payment integration.",
        techStack: ["React", "Node.js", "MongoDB", "Express.js"],
        liveLink: "https://flight-booking-final-2.netlify.app/",
        repoLink:
          "https://github.com/GanishwarArun/flight-final-booking-and-reservation-frontend",
      },
    ],
  },
];

function Projects() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section className="p-8 pt-24 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>
      <div className="max-w-5xl mx-auto space-y-6">
        {projects.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 p-4"
          >
            <button
              onClick={() => toggleCategory(index)}
              className="w-full flex justify-between items-center text-left text-2xl font-semibold p-4 focus:outline-none"
            >
              {category.category}
              {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openCategory === index && (
              <div className="p-4 border-t border-gray-300 dark:border-gray-700">
                {category.items.map((project, idx) => (
                  <div
                    key={idx}
                    className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <FaCode className="text-blue-500" /> {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a
                        href={project.liveLink}
                        className="text-blue-500 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a
                        href={project.repoLink}
                        className="text-blue-500 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
