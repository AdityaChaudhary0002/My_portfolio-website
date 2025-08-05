import React from 'react';
import { motion } from 'framer-motion';

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Featured Projects</h2>
          <p className="text-lg text-gray-300">Here are some of my recent works</p>
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
                className="text-2xl font-bold mb-4 text-blue-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                E-commerce Website
              </motion.h3>
              <p className="text-gray-200 mb-4">A sleek and responsive e-commerce site with modern design, built with React and Vite for a fast, seamless user shopping experience.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React.js', 'Vite', 'Tailwind CSS'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="bg-blue-800 bg-opacity-80 px-2 py-1 rounded text-xs"
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
                  className="bg-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Live Demo
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
                className="text-2xl font-bold mb-4 text-green-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Byte Builder
              </motion.h3>
              <p className="text-gray-200 mb-4">A real-time coding platform with live code execution, Firebase auth, and community features for collaborative and interactive learning.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React.js', 'Node.js', 'Firebase', 'Socket.io'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="bg-green-800 bg-opacity-80 px-2 py-1 rounded text-xs"
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
                  className="bg-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Live Demo
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
                className="text-2xl font-bold mb-4 text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Coffee House
              </motion.h3>
              <p className="text-gray-200 mb-4">A mobile-first coffee ordering application built with React Native and TypeScript, focusing on a clean UI and intuitive user workflow.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React Native', 'TypeScript', 'CSS'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="bg-purple-800 bg-opacity-80 px-2 py-1 rounded text-xs"
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
                  className="bg-gray-600 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📁 View Files
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