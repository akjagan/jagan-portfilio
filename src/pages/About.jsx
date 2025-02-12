// src/pages/About.jsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSlack,
  FaLaptopCode,
  FaTools,
  FaCode,
  FaCogs,
  FaAws,
  FaGlobe,
  FaGg,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJquery,
  SiGraphql,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiDocker,
} from "react-icons/si";

function About() {
  return (
    <section className="p-8 pt-24 text-center min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-b-4 border-gray-300 dark:border-gray-700">
      <h1 className="text-5xl font-bold mb-6">
        Crafting Modern Web Solutions with Creativity and Expertise
      </h1>
      <p className="mt-4 text-lg max-w-4xl leading-relaxed">
        Hi, I'm a passionate Full Stack Web Developer with over one year of
        experience in building dynamic, user-friendly web applications. With
        expertise in modern technologies like MongoDB, Express.js, Next.js,
        React.js, Node.js, TypeScript, and the MERN Stack, I specialize in
        crafting intuitive user interfaces and delivering seamless, engaging
        experiences. Dedicated to continuous learning, I stay updated with the
        latest web development trends to create innovative, high-quality
        solutions.
      </p>
      <div className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend Skills */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaHtml5 className="text-orange-500 text-2xl" /> HTML
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaCss3Alt className="text-blue-500 text-2xl" /> CSS
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaBootstrap className="text-purple-600 text-2xl" /> Bootstrap
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaJs className="text-yellow-500 text-2xl" /> JavaScript
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiTypescript className="text-blue-500 text-2xl" /> TypeScript
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaReact className="text-blue-400 text-2xl" /> React.js
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiNextdotjs className="text-black text-2xl" /> Next.js
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiJquery className="text-blue-600 text-2xl" /> jQuery
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaGg className="text-indigo-500 text-2xl" /> Redux Toolkit
            </li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Backend</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaNodeJs className="text-green-500 text-2xl" /> Node.js
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiExpress className="text-gray-500 text-2xl" /> Express.js
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiMongodb className="text-green-500 text-2xl" /> MongoDB
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiMysql className="text-blue-600 text-2xl" /> MySQL
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaShieldAlt className="text-red-500 text-2xl" /> JWT
              (Authentication)
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiGraphql className="text-pink-500 text-2xl" /> GraphQL
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaGlobe className="text-blue-500 text-2xl" /> RESTful API
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Tools & Platforms</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaGitAlt className="text-red-500 text-2xl" /> Git
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaGithub className="text-gray-700 dark:text-white text-2xl" />{" "}
              GitHub
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaFigma className="text-pink-500 text-2xl" /> Figma
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <FaSlack className="text-purple-500 text-2xl" /> Slack
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiPostman className="text-orange-500 text-2xl" /> Postman
            </li>
            <li className="flex items-center gap-3 hover:scale-110 transition-transform">
              <SiDocker className="text-blue-500 text-2xl" /> Cloud Deployment
              (Render, Netlify, Docker)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

// // src/pages/About.jsx
// import React from "react";
// import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

// function About() {
//   return (
//     <section className="p-8 pt-24 text-center min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-b-4 border-gray-300 dark:border-gray-700">
//       <h1 className="text-5xl font-bold mb-6">
//         Crafting Modern Web Solutions with Creativity and Expertise
//       </h1>
//       <p className="mt-4 text-lg max-w-4xl leading-relaxed">
//         Hi, I'm a passionate Full Stack Web Developer with over one year of
//         experience in building dynamic, user-friendly web applications. With
//         expertise in modern technologies like MongoDB, Express.js, Next.js,
//         React.js, Node.js, TypeScript, and the MERN Stack, I specialize in
//         crafting intuitive user interfaces and delivering seamless, engaging
//         experiences. Dedicated to continuous learning, I stay updated with the
//         latest web development trends to create innovative, high-quality
//         solutions.
//       </p>
//       <div className="mt-8">
//         <h2 className="text-3xl font-semibold">Skills</h2>
//         <ul className="mt-6 text-lg space-y-4">
//           <li className="flex items-center justify-start gap-3">
//             <FaCode className="text-yellow-500 text-2xl" />
//             <span>
//               Programming Languages: JavaScript, TypeScript, HTML, CSS
//             </span>
//           </li>
//           <li className="flex items-center justify-start gap-3">
//             <FaLaptopCode className="text-blue-500 text-2xl" />
//             <span>
//               Frontend Frameworks: React.js, Next.js, Tailwind CSS, Bootstrap
//               CSS
//             </span>
//           </li>
//           <li className="flex items-center justify-start gap-3">
//             <FaServer className="text-green-500 text-2xl" />
//             <span>Backend Frameworks: Node.js, Express.js, MongoDB, MySQL</span>
//           </li>
//           <li className="flex items-center justify-start gap-3">
//             <FaTools className="text-red-500 text-2xl" />
//             <span>
//               Tools & Platforms: Git, GitHub, REST APIs, Postman, MongoDB Atlas,
//               Cloud Deployment
//             </span>
//           </li>

//           <li className="flex items-center justify-start gap-3">
//             <FaTools className="text-purple-500 text-2xl" />
//             <span>State Management: Redux Toolkit</span>
//           </li>
//           <li className="flex items-center justify-start gap-3">
//             <FaTools className="text-indigo-500 text-2xl" />
//             <span>API Development: GraphQL</span>
//             </li>

//         </ul>
//       </div>
//     </section>
//   );
// }

// export default About;
