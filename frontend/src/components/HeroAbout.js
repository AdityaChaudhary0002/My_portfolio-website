import React from 'react';
import { motion } from 'framer-motion';

const HeroAbout = ({
  frontRef,
  orbitX,
  orbitY,
  imgTilt,
  handleImgMouseMove,
  handleImgMouseLeave,
  imgControls,
}) => {
  return (
    <section ref={frontRef} className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left column: Name, roles, quick info, resume & socials, plus a concise about */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 relative leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-x relative z-10">
                ADITYA CHAUDHARY
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full"
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-700 dark:text-gray-300 flex flex-wrap items-center gap-3 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span>
              <span className="text-gray-500">|</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Problem Solver</span>
              <span className="text-gray-500">|</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Tech Enthusiast</span>
            </motion.p>
          </motion.div>
          
          {/* Quick info chips */}
          <div className="flex flex-wrap gap-3">
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-800 dark:text-white flex items-center gap-2 text-sm md:text-base relative z-10">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Bangalore, Karnataka
              </span>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-purple-200 dark:border-purple-700/50 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-800 dark:text-white flex items-center gap-2 text-sm md:text-base relative z-10">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/>
                </svg>
                B.Tech CSE
              </span>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-cyan-200 dark:border-cyan-700/50 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-gray-800 dark:text-white flex items-center gap-2 text-sm md:text-base relative z-10">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
                Open to Work
              </span>
            </motion.div>
          </div>
          
          {/* Resume & Socials */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="/Cv_Aditya_Chaudhary__2025.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 backdrop-blur-md px-6 py-3 rounded-full text-gray-900 dark:text-white font-medium border border-purple-300 dark:border-purple-700/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Download Resume</span>
            </motion.a>
            <div className="flex items-center gap-3">
              <motion.a
                href="mailto:aditya0002adi@gmail.com"
                className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 backdrop-blur-md px-5 py-2.5 rounded-full text-gray-900 dark:text-white border border-blue-300 dark:border-blue-700/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adityachaudhary0/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 backdrop-blur-md px-5 py-2.5 rounded-full text-gray-900 dark:text-white border border-blue-300 dark:border-blue-700/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/AdityaChaudhary0002"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30 backdrop-blur-md px-5 py-2.5 rounded-full text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">GitHub</span>
              </motion.a>
            </div>
          </div>
          
          {/* About */}
          <div className="space-y-6 mt-4">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I'm a passionate Full Stack Developer with strong CS fundamentals, modern web expertise, and a competitive programming background. I build scalable, elegant solutions with a focus on performance and developer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column: Profile image with subtle orbit/tilt + quick stats */}
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-xl flex items-center justify-center"
            style={{
              perspective: '800px',
              transform: `translateX(${orbitX}px) translateY(${orbitY}px) rotateY(${imgTilt.x}deg) rotateX(${imgTilt.y}deg)`,
            }}
            onMouseMove={handleImgMouseMove}
            onMouseLeave={handleImgMouseLeave}
            whileHover={{ scale: 1.06 }}
            animate={imgControls}
          >
            <img
              src="/profile.jpg"
              alt="Aditya Chaudhary"
              className="w-full h-full rounded-full object-cover"
              style={{ transform: 'translateZ(20px) scale(0.96)', transformStyle: 'preserve-3d' }}
            />
          </motion.div>
          
          {/* Quick Stats Card */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-7 w-full max-w-md shadow-md border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
            {/* Glassmorphic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h4v8H3v-8zm7-6h4v14h-4V7zm7-4h4v18h-4V3z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 dark:text-purple-400">Quick Stats</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center justify-between text-sm md:text-base group">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h16v2H4z"/></svg>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Projects Completed</span>
                  </span>
                  <span className="font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">15+</span>
                </li>
                <li className="flex items-center justify-between text-sm md:text-base group">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Problems Solved</span>
                  </span>
                  <span className="font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">1500+</span>
                </li>
                <li className="flex items-center justify-between text-sm md:text-base group">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 dark:text-purple-400">
                        <g>
                          <path d="M25.5 16.1c0-2.2-1.1-4.2-2.9-5.4l-6.2-4.2c-1.1-.7-2.5-.7-3.6 0l-6.2 4.2C7.6 11.9 6.5 13.9 6.5 16.1v7.8c0 1.2.7 2.3 1.8 2.9l6.2 4.2c1.1.7 2.5.7 3.6 0l6.2-4.2c1.1-.7 1.8-1.8 1.8-2.9v-7.8z" fill="#FFA116"/>
                          <path d="M16 2.5c-1.1 0-2 .9-2 2v7.2c0 1.1.9 2 2 2s2-.9 2-2V4.5c0-1.1-.9-2-2-2z" fill="#292D3E"/>
                        </g>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Max LeetCode Rating</span>
                  </span>
                  <span className="font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">1805</span>
                </li>
                <li className="flex items-center justify-between text-sm md:text-base group">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-700 dark:group-hover:bg-blue-800/50 transition-colors">
                      <svg className="w-4 h-4 text-white dark:text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3h3v18H5zM10.5 7h3v14h-3zM16 11h3v10h-3z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Codeforces Rank</span>
                  </span>
                  <span className="font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">Pupil</span>
                </li>
                <li className="flex items-center justify-between text-sm md:text-base group">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-700 dark:group-hover:bg-green-800/50 transition-colors">
                      <svg className="w-4 h-4 text-white dark:text-green-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.477 2 12s4.486 10 10 10 10-4.477 10-10S17.514 2 12 2zm-4 8h2a2 2 0 110 4H8v-4zm6 0h2v4h-2a2 2 0 110-4z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">GfG Activity</span>
                  </span>
                  <span className="font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">Active</span>
                </li>
                <li className="flex items-center justify-between text-sm md:text-base group">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 dark:bg-yellow-900/30 flex items-center justify-center group-hover:bg-yellow-600 dark:group-hover:bg-yellow-800/50 transition-colors">
                      <svg className="w-4 h-4 text-white dark:text-yellow-300" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14v2H5zm2 4h10v12l-5-2-5 2V8z"/></svg>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Certifications</span>
                  </span>
                  <span className="font-bold text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">5+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;