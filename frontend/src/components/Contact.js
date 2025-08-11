import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700 dark:text-blue-400">Get in Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Let's work together on your next project</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl h-full flex flex-col justify-between shadow-md border border-gray-200 dark:border-transparent"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-300">aditya0002adi@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-300">+91 7453875563</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-purple-700 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-300">Bengaluru, Karnataka</span>
                </div>
              </div>
              {/* Follow Me */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/adityachaudhary0/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/AdityaChaudhary0002" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Opportunities */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Open for Opportunities</h4>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <span>Full-Stack Developer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <span>Software Development Engineer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <span>Open Source</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl h-full shadow-md border border-gray-200 dark:border-transparent"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Send a Message</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Tell me about your project, collaboration idea, or just drop a hello.</p>
            <form
              className="space-y-4"
              action="https://formspree.io/f/myzpnnab"
              method="POST"
            >
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your project, ask a question, or just say hello..."
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;