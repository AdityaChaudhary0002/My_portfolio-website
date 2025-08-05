import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ heroRef }) => {
  return (
            <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-black">
      {/* Ultra dark professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-gray-900 opacity-95"></div>
      
      {/* Interactive background pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none interactive-bg"
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 100%",
            "50% 50%",
            "0% 0%"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          e.currentTarget.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Professional Animated Name */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Clean gradient text with professional styling */}
          <motion.span 
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x relative z-10"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            >
              ADITYA CHAUDHARY
            </motion.span>
          </motion.span>

          {/* Clean animated underline */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </motion.h1>

        {/* Enhanced Animated Title */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 relative z-10 flex flex-wrap items-center justify-center gap-2"
          >
            <motion.span 
              className="text-blue-400 font-semibold"
              initial={{ width: 0, overflow: "hidden" }}
              animate={{ width: "auto" }}
              transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
            >
              <motion.span
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
              >
                Full Stack Developer
              </motion.span>
            </motion.span>
            <span className="text-gray-500">|</span>
            <motion.span 
              className="text-blue-400 font-semibold"
              initial={{ width: 0, overflow: "hidden" }}
              animate={{ width: "auto" }}
              transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
            >
              <motion.span
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
              >
                Problem Solver
              </motion.span>
            </motion.span>
            <span className="text-gray-500">|</span>
            <motion.span 
              className="text-cyan-400 font-semibold"
              initial={{ width: 0, overflow: "hidden" }}
              animate={{ width: "auto" }}
              transition={{ duration: 1.5, delay: 4.5, ease: "easeOut" }}
            >
              <motion.span
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, delay: 4.5, ease: "easeOut" }}
              >
                Tech Enthusiast
              </motion.span>
            </motion.span>
          </motion.p>
          
          {/* Quote */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="text-lg text-gray-400 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Cory House</p>
          </motion.div>
          
          {/* Problems Solved */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <p className="text-xl text-blue-400 font-semibold">
              🎯 <span className="text-white">1500+</span> Problems Solved
            </p>
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white flex items-center gap-3 font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Bangalore, Karnataka
            </span>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white flex items-center gap-3 font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/>
              </svg>
              B.Tech CSE
            </span>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white flex items-center gap-3 font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
              Open to Work
            </span>
          </motion.div>
        </div>
        
        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-8"
        >
                      <motion.a
              href="/Cv_Aditya_Chaudhary_2025.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>

        <div className="flex justify-center space-x-6">
          <motion.a
            href="mailto:aditya0002adi@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full flex items-center gap-3 magnetic-hover glass-effect shadow-lg cursor-pointer"
            whileHover={{ y: -2, scale: 1.05, boxShadow: '0px 8px 25px rgba(59, 130, 246, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.setProperty('--mouse-x', `${x * 0.1}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y * 0.1}px`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '0px');
              e.currentTarget.style.setProperty('--mouse-y', '0px');
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact Me
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/adityachaudhary0/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full flex items-center gap-3 magnetic-hover glass-effect shadow-lg cursor-pointer"
            whileHover={{ y: -2, scale: 1.05, boxShadow: '0px 8px 25px rgba(29, 78, 216, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.setProperty('--mouse-x', `${x * 0.1}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y * 0.1}px`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '0px');
              e.currentTarget.style.setProperty('--mouse-y', '0px');
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/AdityaChaudhary0002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-3 rounded-full flex items-center gap-3 magnetic-hover glass-effect shadow-lg cursor-pointer"
            whileHover={{ y: -2, scale: 1.05, boxShadow: '0px 8px 25px rgba(31, 41, 55, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.setProperty('--mouse-x', `${x * 0.1}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y * 0.1}px`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '0px');
              e.currentTarget.style.setProperty('--mouse-y', '0px');
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 