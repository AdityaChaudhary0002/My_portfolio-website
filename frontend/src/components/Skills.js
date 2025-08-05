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
              <img src="https://www.svgrepo.com/show/474334/coding.svg" alt="Programming icon" className="w-16 h-16" style={{ filter: 'invert(1)' }}/>
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
              <img src="https://www.svgrepo.com/show/4087/web-development.svg" alt="Web Dev icon" className="w-16 h-16" style={{ filter: 'invert(1)' }}/>
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
              <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4v10c0 2.21-3.582 4-8 4s-8-1.79-8-4V7zm8-2c-3.314 0-6 1.343-6 3v10c0 1.657 2.686 3 6 3s6-1.343 6-3V8c0-1.657-2.686-3-6-3z"/>
              </svg>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">PostgreSQL</span>
              </div>
            </div>
          </motion.div>
          {/* Tools & Others */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -15, scale: 1.05, rotateY: 5, boxShadow: '0px 20px 40px rgba(251, 191, 36, 0.4)' }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 300 }}
          >
            <motion.div className="flex justify-center items-center mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Tools & Others</h3>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">AWS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 