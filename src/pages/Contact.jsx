import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xbldkpyq", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus(
          "Your message has been received! I’ll get back to you as soon as possible."
        );
        e.target.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="p-8 text-center min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
        <p className="mt-4 text-lg">
          I'd love to hear from you! Whether you have a question or just want to
          say hi, feel free to reach out.
        </p>

        <div className="mt-10 p-6 rounded-lg shadow-lg border dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <a
              href="https://wa.me/919940513552"
              className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg">Chat on WhatsApp</span>
            </a>

            <a
              href="mailto:akjagankumar@gmail.com"
              className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">akjagankumar@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/www.linkedin.com/in/jagan-kumar-209945317/"
              className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-lg">LinkedIn Profile</span>
            </a>
            <a
              href="https://https://github.com/akjagan"
              className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
              <span className="text-lg">GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-lg shadow-lg border dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {status && (
              <div
                className={`mt-6 p-4 rounded-md text-center ${
                  status.toLowerCase().includes("thank you")
                    ? "bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200"
                    : "bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200"
                }`}
              >
                <p className="text-sm font-medium">{status}</p>
                {status.includes("thank you") && (
                  <p className="text-xs mt-2 text-green-600 dark:text-green-300">
                    Check your email for confirmation.
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
