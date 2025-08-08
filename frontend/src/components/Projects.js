import React from 'react';
import { motion } from 'framer-motion';

// GitHub repository links for each project
const REPO_LINKS = {
  ecommerce: 'https://github.com/AdityaChaudhary0002/ecommerce',
  byteBuilder: 'https://github.com/AdityaChaudhary0002/byte-builder',
  coffeeHouse: 'https://github.com/AdityaChaudhary0002/coffee-house',
};

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700 dark:text-blue-400">Featured Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Here are some of my recent works</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* E-commerce Website Card */}
          <motion.div 
            className="project-card-container border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-400"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop)' }}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ 
              rotateY: 5, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-card-content">
              <motion.h3 
                className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                E-commerce Website
              </motion.h3>
              <p className="text-gray-900 dark:text-gray-200 mb-4">A sleek and responsive e-commerce site with modern design, built with React and Vite for a fast, seamless user shopping experience.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React.js', 'Vite', 'Tailwind CSS'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:bg-opacity-80 dark:text-white px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-2 mb-2">
                <motion.a 
                  href="https://e-commercccceee.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Live Demo
                </motion.a>
                <motion.a
                  href="https://github.com/AdityaChaudhary0002/ecommerce-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white px-3 py-1 rounded text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer inline-flex items-center gap-1"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"/></svg>
                  Code
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Byte Builder Card */}
          <motion.div 
            className="project-card-container border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-green-400"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)' }}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              rotateY: 5, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-card-content">
              <motion.h3 
                className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Byte Builder
              </motion.h3>
              <p className="text-gray-900 dark:text-gray-200 mb-4">A real-time coding platform with live code execution, Firebase auth, and community features for collaborative and interactive learning.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React.js', 'Node.js', 'Firebase', 'Socket.io'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="bg-green-100 text-green-800 dark:bg-green-800 dark:bg-opacity-80 dark:text-white px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-2 mb-2">
                <motion.a 
                  href="https://code-editor-6rqa.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Live Demo
                </motion.a>
                <motion.a
                  href="https://github.com/AdityaChaudhary0002/Byte_Builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white px-3 py-1 rounded text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer inline-flex items-center gap-1"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"/></svg>
                  Code
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Coffee House Card */}
          <motion.div 
            className="project-card-container border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-purple-400"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop)' }}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ 
              rotateY: 5, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-card-content">
              <motion.h3 
                className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Coffee House
              </motion.h3>
              <p className="text-gray-900 dark:text-gray-200 mb-4">A mobile-first coffee ordering application built with React Native and TypeScript, focusing on a clean UI and intuitive user workflow.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React Native', 'TypeScript', 'CSS'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:bg-opacity-80 dark:text-white px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-2 mb-2">
                <motion.a 
                  href="https://drive.google.com/drive/folders/1JZ0EL0VH1ZSPS8PKMU23dUBty4GjWzK9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📁 View Files
                </motion.a>
                <motion.a
                  href="https://github.com/AdityaChaudhary0002/Coffee_Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white px-3 py-1 rounded text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer inline-flex items-center gap-1"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"/></svg>
                  Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 