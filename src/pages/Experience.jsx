import React, { useState } from "react";

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      img: "/certifications/GuviCertification-IIT-M.png",
      alt: "IIT-M Pravartak certified Full Stack Development",
      link: "https://v2.zenclass.in/certificateDownload/cAGdFM19ObdDmsXD",
      text: "View IIT-M FSD Certification",
    },
    {
      img: "/certifications/GuviCertification - Advanced Js.png",
      alt: "Advanced JS Certification",
      link: "https://v2.zenclass.in/certificateDownload/iaLy94qtOSO1DssJ",
      text: "View Advanced JS Certification",
    },
    {
      img: "/certifications/GuviCertification - React JS.png",
      alt: "React Certification",
      link: "https://v2.zenclass.in/certificateDownload/68XcUrgp98V1F0Nu",
      text: "View React Certification",
    },
    {
      img: "/certifications/GuviCertification - NodeJS.png",
      alt: "NodeJS Certification",
      link: "https://v2.zenclass.in/certificateDownload/qGZBGYlrzCZfDpXY",
      text: "View NodeJS Certification",
    },
  ];

  return (
    <section className="p-8 pt-24 text-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold mb-6">Education & Experience</h1>

      {/* Education Section */}
      <div className="mb-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <p className="text-xl">
          🎓 Bachelor of Civil Engineering - Anna University
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Institution: Vel Tech High Tech Dr.RR and Dr.SR Engineering College
          <br />
          Year of Graduation: 2016
        </p>
      </div>

      {/* Certifications Section */}
      <div className="mb-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cert.img}
                alt={cert.alt}
                className="w-64 h-auto shadow-lg rounded-md cursor-pointer"
                onClick={() => setSelectedCert(cert.img)}
              />
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 mt-2"
              >
                {cert.text}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <ul className="text-xl space-y-6">
          {[
            {
              title: "Intern Trainee - Robox Corporation, Chennai",
              duration: "Nov 2024 - Present",
              details: [
                "🚀 Gained experience in React.js, Next.js, TypeScript, and Node.js.",
                "🤝 Collaborated with the development team to enhance web application performance.",
              ],
            },
            {
              title: "Operations Manager - ARIVAZHAGI ENTERPRISES",
              duration: "Jan 2020 - 2024",
              details: [
                "📈 Developed and managed business operations, client relationships, strategic planning.",
                "💡 Showcased strong entrepreneurial and business management skills.",
              ],
            },
            {
              title: "Content Developer - Officers IAS Academy, Chennai",
              duration: "June 2018 - March 2020",
              details: [
                "📝 Developed educational content for Pulse Magazine.",
                "📚 Demonstrated excellent writing and research abilities.",
              ],
            },
          ].map((exp, index) => (
            <li
              key={index}
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg"
            >
              <p className="font-semibold text-lg mb-1">{exp.title}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.duration}
              </p>
              <ul className="list-disc list-inside ml-4">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for enlarged image */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-2xl"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img
              src={selectedCert}
              alt="Certification"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

// import React from "react";

// const Experience = () => {
//   return (
//     <section className="p-8 pt-24 text-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
//       <h1 className="text-5xl font-bold mb-6">Education & Experience</h1>

//       {/* Education Section */}
//       <div className="mb-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
//         <h2 className="text-3xl font-semibold mb-4">Education</h2>
//         <p className="text-xl">
//           🎓 Bachelor of Civil Engineering - Anna University
//         </p>
//         <p className="text-lg text-gray-600 dark:text-gray-300">
//           Institution: Vel Tech High Tech Dr.RR and Dr.SR Engineering College
//           <br />
//           Year of Graduation: 2016
//         </p>
//       </div>

//       {/* Certifications Section */}
//       <div className="mb-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
//         <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
//         <ul className="text-xl space-y-4">
//           {/* Certification with Image */}
//           <li className="flex flex-col items-center">
//             <img
//               src="/certifications/GuviCertification-IIT-M.png"
//               alt="IIT-M Pravartak certified Full Stack Development"
//               className="w-64 h-auto shadow-lg rounded-md"
//             />
//             <a
//               href="https://v2.zenclass.in/certificateDownload/cAGdFM19ObdDmsXD"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-600 mt-2"
//             >
//               View IIT-M FSD Certification
//             </a>
//           </li>
//           {/* Another Certification with Image */}
//           <li className="flex flex-col items-center">
//             <img
//               src="/certifications/GuviCertification - Advanced Js.png"
//               alt="Advanced JS Certification"
//               className="w-64 h-auto shadow-lg rounded-md"
//             />
//             <a
//               href="https://v2.zenclass.in/certificateDownload/iaLy94qtOSO1DssJ"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-600 mt-2"
//             >
//               View Advanced JS Certification
//             </a>
//           </li>

//           <li className="flex flex-col items-center">
//             <img
//               src="/certifications\GuviCertification - React JS.png"
//               alt="React Certification"
//               className="w-64 h-auto shadow-lg rounded-md"
//             />
//             <a
//               href="https://v2.zenclass.in/certificateDownload/68XcUrgp98V1F0Nu"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-600 mt-2"
//             >
//               View React Certification
//             </a>
//           </li>

//           <li className="flex flex-col items-center">
//             <img
//               src="/certifications\GuviCertification - NodeJS.png"
//               alt="NodeJS Certification"
//               className="w-64 h-auto shadow-lg rounded-md"
//             />
//             <a
//               href="https://v2.zenclass.in/certificateDownload/qGZBGYlrzCZfDpXY"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-600 mt-2"
//             >
//               View NodeJS Certification
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Work Experience Section */}
//       <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700">
//         <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
//         <div className="text-xl">
//           <p className="font-semibold">Intern - Robox Engineering</p>
//           <p className="text-gray-600 dark:text-gray-300">Dec 2024 - Present</p>
//           <p>
//             🚀 Worked on frontend cloning projects using Next.js & Tailwind CSS.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
