import React, { useState } from "react";
import { FaCode, FaExternalLinkAlt, FaGithub, FaChevronDown } from "react-icons/fa";

const projects = [
  {
    title: "Health & Wellness App",
    description:
      "A full-stack web application for health and wellness tracking.",
    category: "MERN Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://heath-wellness.netlify.app/",
    repoLink: "https://github.com/akjagan/Health-Wellness-Frontend.git",
    backendRepoLink:
      "https://github.com/akjagan/Health-Wellness-Backendend.git",
  },
  {
    title: "Garage Management System",
    description:
      "An AI-powered garage management system that streamlines vehicle diagnostics and service tracking.",
    category: "Full Stack Internship Project",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "AI"],
    liveLink: "https://app.crankcase.ai",
    repoLink: "https://github.com/robox-corp/garage-client",
    backendRepoLink: "https://github.com/roboxcorp/crankcase-server.git",
  },

  {
    title: "Flight Booking & Reservation System ",
    description:
      "A full-stack flight reservation system with authentication, real-time booking, and payment integration.",
    category: "Cap Stone MERN Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://flight-booking-final-2.netlify.app/",
    repoLink:
      "https://github.com/akjagan/flight-booking-and-reservation-fe.git",
    backendRepoLink:
      "https://github.com/akjagan/flight-booking-and-reservation-be.git",
  },
  {
    title: "Password Reset Flow ",
    description: "A full-stack password reset flow system using MERN stack.",
    category: "MERN Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink:
      "https://passwordresetflow-fullfsd-mernstack.netlify.app/user/forgot-password",
    repoLink:
      "https://github.com/akjagan/Password-Resetflow---Frontend.git",
  },
  {
    title: "Recipe API Backend",
    description:
      "A Node.js and Express-based API for managing and retrieving recipes.",
    category: "Backend",
    techStack: ["Node.js", "Express.js", "MongoDB"],
    liveLink: "https://recipe-lgwe.onrender.com/",
    backendRepoLink: "https://github.com/akjagan/recipe.git",
  },
  {
    title: "Bearer Token Authentication API",
    description:
      "A backend authentication service using bearer token authorization.",
    category: "Backend",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://task11-bearer-token-1.onrender.com/",
    backendRepoLink: "https://github.com/akjagan/guvi-task-11-bearer-token.git",
  },
  {
    title: "Movie Searching App",
    description: "A movie search application built using React Router.",
    category: "Frontend",
    techStack: ["React", "React Router"],
    liveLink: "https://moviesearchingtaskwithreact.netlify.app/",
    repoLink: "https://github.com/akjagan/movie-searching-with-react-task.git",
  },
  {
    title: "E-Cart App",
    description:
      "A fully responsive e-commerce cart application built with React and React Router.",
    category: "Frontend React",
    techStack: ["React", "TailwindCSS"],
    liveLink: "https://superb-manatee-be0d22.netlify.app/",
    repoLink:
      "https://github.com/akjagan/react-router-project.git",
  },
  {
    title: "Income-Expense Calculator (JS DOM)",
    description:
      "A web-based income and expense tracker built using JavaScript DOM manipulation.",
    category: "JavaScript Project",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://jaganincomeexp.netlify.app/",
    repoLink:
      "https://github.com/akjagan/guvi-income-expen-to-do-task-4.git",
  },
  {
    title: "Landing Page using HTML & TailwindCSS",
    description: "A responsive landing page built with HTML and TailwindCSS.",
    category: "Frontend",
    techStack: ["HTML", "TailwindCSS"],
    liveLink: "https://app.netlify.com/sites/jagantask2/overview",
    repoLink: "https://github.com/akjagan/guvi-task2-23.8.24.git",
  },
];

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="p-8 pt-24 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>
      <div className="max-w-5xl mx-auto space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 p-4 transition-transform duration-300 hover:scale-105"
          >
            <div
              className="text-xl font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              onClick={() => toggleProject(index)}
            >
              <FaCode className="text-blue-500 transition-transform duration-300 transform hover:scale-125" />{" "}
              {project.title}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  expandedProject === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {expandedProject === index && (
              <div className="mt-2">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="relative inline-block">
                  <button className="px-4 py-2 bg-blue-200 dark:bg-blue-600 text-sm rounded-md">
                    {project.category}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 py-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-200 dark:bg-green-600 text-sm rounded-md relative group cursor-pointer"
                    >
                      {tech}
                      <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded-md">
                        {tech}
                      </span>
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
                  <div className="flex gap-4">
                    {project.repoLink ? (
                      // For full-stack projects
                      <>
                        <a
                          href={project.repoLink}
                          className="text-blue-500 hover:underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> Frontend Repo
                        </a>
                        {project.backendRepoLink && (
                          <a
                            href={project.backendRepoLink}
                            className="text-blue-500 hover:underline flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub /> Backend Repo
                          </a>
                        )}
                      </>
                    ) : (
                      // For backend-only projects
                      <a
                        href={project.backendRepoLink}
                        className="text-blue-500 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
