import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skillsRef }) => {
  return (
    <section id="skills" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-left text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer uppercase leading-[0.9]">TECHNICAL<br />SKILLS</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">A look at the technologies I work with.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming */}
          <motion.div
            className="bg-gray-50 dark:bg-transparent rounded-xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-500/5 rounded-2xl flex items-center justify-center border border-blue-200 dark:border-blue-500/20 shadow-inner">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-gray-100">Programming</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Python</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">C++</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">JavaScript</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">TypeScript</span>
              </div>
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            className="bg-gray-50 dark:bg-transparent rounded-xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-500/20 dark:to-amber-500/5 rounded-2xl flex items-center justify-center border border-amber-200 dark:border-amber-500/20 shadow-inner">
                <svg className="w-7 h-7 text-amber-600 dark:text-amber-400 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-gray-100">Web Development</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">React.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-6 h-6 flex-shrink-0 object-contain dark:invert opacity-80" />
                <span className="text-gray-800 dark:text-gray-300">Next.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Node.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-6 h-6 flex-shrink-0 object-contain dark:invert opacity-80" />
                <span className="text-gray-800 dark:text-gray-300">Express.js</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
                <span className="text-gray-800 dark:text-gray-300">Tailwind CSS</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">React Native</span>
              </div>
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            className="bg-gray-50 dark:bg-transparent rounded-xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-500/20 dark:to-emerald-500/5 rounded-2xl flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20 shadow-inner">
                <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75C20.25 20.396 16.556 22.25 12 22.25s-8.25-1.854-8.25-4.125v-3.75m-16.5-3.75c0 2.278 3.694 4.125 8.25 4.125s8.25-1.847 8.25-4.125" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-gray-100">Database</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">MongoDB</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">PostgreSQL</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">MySQL</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Redis</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Firebase</span>
              </div>
            </div>
          </motion.div>

          {/* Tools & Tech */}
          <motion.div
            className="bg-gray-50 dark:bg-transparent rounded-xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-500/20 dark:to-purple-500/5 rounded-2xl flex items-center justify-center border border-purple-200 dark:border-purple-500/20 shadow-inner">
                <svg className="w-7 h-7 text-purple-600 dark:text-purple-400 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83M11.42 15.17l-.872-.872a.75.75 0 00-1.06 1.06l.872.872m.001-1.061A4.5 4.5 0 1115.17 11.42m-3.75 3.75L5.25 21" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-gray-100">Tools & Tech</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-start justify-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="text-gray-800 dark:text-gray-300">Gen AI / LLMs</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-6 h-6 flex-shrink-0 object-contain dark:invert opacity-80" />
                <span className="text-gray-800 dark:text-gray-300">AWS</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.simpleicons.org/vercel/000000" alt="Vercel" className="w-6 h-6 flex-shrink-0 object-contain dark:invert opacity-80" />
                <span className="text-gray-800 dark:text-gray-300">Vercel</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Docker</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Postman</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Git</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-gray-800 dark:text-gray-300">Figma</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 