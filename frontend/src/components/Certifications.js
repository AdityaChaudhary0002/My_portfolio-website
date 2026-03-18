import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-left text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer uppercase leading-[0.9]">VERIFIED<br />CREDENTIALS</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Professional credentials and continuous learning achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* React.js Development */}
          <motion.div
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-6 text-center flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">React.js Development</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Coursera</p>
            <p className="text-gray-500 mb-3">2024</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </motion.div>

          {/* Node.js Backend Development */}
          <motion.div
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-6 text-center flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Node.js Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Udemy</p>
            <p className="text-gray-500 mb-3">2024</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </motion.div>

          {/* MongoDB Database Design */}
          <motion.div
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-6 text-center flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">MongoDB Database Design</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">MongoDB University</p>
            <p className="text-gray-500 mb-3">2024</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </motion.div>

          {/* Python Programming */}
          <motion.div
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-6 text-center flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Python Programming</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Coursera</p>
            <p className="text-gray-500 mb-3">2023</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </motion.div>

          {/* Git & GitHub */}
          <motion.div
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-6 text-center flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Git & GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">GitHub</p>
            <p className="text-gray-500 mb-3">2023</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </motion.div>

          {/* Web Development Fundamentals */}
          <motion.div
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-6 text-center flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Web Development Fundamentals</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">freeCodeCamp</p>
            <p className="text-gray-500 mb-3">2023</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Verified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
