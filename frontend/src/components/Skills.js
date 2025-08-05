import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skillsRef }) => {
  return (
    <section ref={skillsRef} className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Technical Skills</h2>
          <p className="text-lg text-gray-300">A look at the technologies I work with.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -15, scale: 1.05, rotateY: 5, boxShadow: '0px 20px 40px rgba(96, 165, 250, 0.4)' }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 300 }}
          >
            <motion.div className="flex justify-center items-center mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Programming</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Python</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">C++</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">JavaScript</span>
              </div>
            </div>
          </motion.div>
          
          {/* Web Development */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -15, scale: 1.05, rotateY: 5, boxShadow: '0px 20px 40px rgba(52, 211, 153, 0.4)' }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 300 }}
          >
            <motion.div className="flex justify-center items-center mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  <path d="M12 15l-2.5-1.5L8 12l1.5-2.5L12 8l2.5 1.5L16 12l-1.5 2.5L12 15z"/>
                </svg>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Web Development</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">React.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Node.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Express.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">React Native</span>
              </div>
            </div>
          </motion.div>
          
          {/* Database */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -15, scale: 1.05, rotateY: 5, boxShadow: '0px 20px 40px rgba(168, 85, 247, 0.4)' }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 300 }}
          >
            <motion.div className="flex justify-center items-center mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4v10c0 2.21-3.582 4-8 4s-8-1.79-8-4V7zm8-2c-3.314 0-6 1.343-6 3v10c0 1.657 2.686 3 6 3s6-1.343 6-3V8c0-1.657-2.686-3-6-3z"/>
                  <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Database</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">MongoDB</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">MySQL</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Firebase</span>
              </div>
            </div>
          </motion.div>
          
          {/* Tools & Tech */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -15, scale: 1.05, rotateY: 5, boxShadow: '0px 20px 40px rgba(251, 191, 36, 0.4)' }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 300 }}
          >
            <motion.div className="flex justify-center items-center mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Tools & Tech</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Git</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Docker</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Figma</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">Linux</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 