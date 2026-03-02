import React from "react";
import { motion } from "framer-motion";

// GitHub repository links for each project
const REPO_LINKS = {
  ecommerce: "https://github.com/AdityaChaudhary0002/ecommerce",
  byteBuilder: "https://github.com/AdityaChaudhary0002/byte-builder",
  coffeeHouse: "https://github.com/AdityaChaudhary0002/coffee-house",
};

const getTechIconUrl = (techName) => {
  const iconMap = {
    "React.js": { name: "react/61DAFB", invert: false },
    React: { name: "react/61DAFB", invert: false },
    "React Native": { name: "react/61DAFB", invert: false },
    Vite: { name: "vite/646CFF", invert: false },
    "Tailwind CSS": { name: "tailwindcss/06B6D4", invert: false },
    Tailwind: { name: "tailwindcss/06B6D4", invert: false },
    "Node.js": { name: "nodedotjs/339933", invert: false },
    Firebase: { name: "firebase/FFCA28", invert: false },
    "Socket.io": { name: "socketdotio", invert: true },
    TypeScript: { name: "typescript/3178C6", invert: false },
    CSS: { name: "css3/1572B6", invert: false },
    "AI Engine": { name: "openai", invert: true },
    WebRTC: { name: "webrtc/333333", invert: true },
    "Framer Motion": { name: "framer", invert: true },
  };
  return iconMap[techName] || null;
};

const Projects = ({ projectsRef }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-gray-100 dark:via-gray-300 dark:to-gray-500">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here are some of my recent works
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* HireMind AI Card */}
          <motion.div
            className="flex flex-col bg-gray-50 dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="h-48 w-full bg-cover bg-center transition-all duration-500 border-b border-gray-200 dark:border-white/10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                HireMind AI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-1 leading-relaxed">
                An intelligent AI-powered interview platform featuring
                conversational memory, live voice interactions, and adaptive
                follow-up questions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "AI Engine", "WebRTC"].map((tech) => {
                  const iconData = getTechIconUrl(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200/50 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10 flex items-center gap-1.5"
                    >
                      {iconData && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconData.name}`}
                          alt={tech}
                          className={`w-3 h-3 object-contain ${iconData.invert ? 'dark:invert opacity-80' : ''}`}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://hiremind-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium text-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/AdityaChaudhary0002/Hiremind-Ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-sm font-medium flex items-center justify-center border border-transparent dark:border-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Vibe Card */}
          <motion.div
            className="flex flex-col bg-gray-50 dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="h-48 w-full bg-cover bg-center transition-all duration-500 border-b border-gray-200 dark:border-white/10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Vibe
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-1 leading-relaxed">
                A sleek, modernized real-time chat and social interface
                featuring a premium glassmorphic UI, dynamic theme modes, and
                fluid animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "Tailwind", "Socket.io", "Framer Motion"].map((tech) => {
                  const iconData = getTechIconUrl(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200/50 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10 flex items-center gap-1.5"
                    >
                      {iconData && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconData.name}`}
                          alt={tech}
                          className={`w-3 h-3 object-contain ${iconData.invert ? 'dark:invert opacity-80' : ''}`}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://vibe-frontend-ad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium text-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/AdityaChaudhary0002/Vibe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-sm font-medium flex items-center justify-center border border-transparent dark:border-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* E-commerce Website Card */}
          <motion.div
            className="flex flex-col bg-gray-50 dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div
              className="h-48 w-full bg-cover bg-center transition-all duration-500 border-b border-gray-200 dark:border-white/10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                E-commerce Website
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-1 leading-relaxed">
                A sleek and responsive e-commerce site with modern design, built
                with React and Vite for a fast, seamless user shopping
                experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "Vite", "Tailwind CSS"].map((tech) => {
                  const iconData = getTechIconUrl(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200/50 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10 flex items-center gap-1.5"
                    >
                      {iconData && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconData.name}`}
                          alt={tech}
                          className={`w-3 h-3 object-contain ${iconData.invert ? 'dark:invert opacity-80' : ''}`}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://e-commercccceee.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium text-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/AdityaChaudhary0002/ecommerce-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-sm font-medium flex items-center justify-center border border-transparent dark:border-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Byte Builder Card */}
          <motion.div
            className="flex flex-col bg-gray-50 dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="h-48 w-full bg-cover bg-center transition-all duration-500 border-b border-gray-200 dark:border-white/10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Byte Builder
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-1 leading-relaxed">
                A real-time coding platform with live code execution, Firebase
                auth, and community features for collaborative and interactive
                learning.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "Node.js", "Firebase", "Socket.io"].map((tech) => {
                  const iconData = getTechIconUrl(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200/50 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10 flex items-center gap-1.5"
                    >
                      {iconData && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconData.name}`}
                          alt={tech}
                          className={`w-3 h-3 object-contain ${iconData.invert ? 'dark:invert opacity-80' : ''}`}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://code-editor-6rqa.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium text-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/AdityaChaudhary0002/Byte_Builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-sm font-medium flex items-center justify-center border border-transparent dark:border-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Coffee House Card */}
          <motion.div
            className="flex flex-col bg-gray-50 dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="h-48 w-full bg-cover bg-center transition-all duration-500 border-b border-gray-200 dark:border-white/10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop)",
              }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Coffee House
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-1 leading-relaxed">
                A mobile-first coffee ordering application built with React
                Native and TypeScript, focusing on a clean UI and intuitive user
                workflow.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React Native", "TypeScript", "CSS"].map((tech) => {
                  const iconData = getTechIconUrl(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200/50 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10 flex items-center gap-1.5"
                    >
                      {iconData && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconData.name}`}
                          alt={tech}
                          className={`w-3 h-3 object-contain ${iconData.invert ? 'dark:invert opacity-80' : ''}`}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/drive/folders/1JZ0EL0VH1ZSPS8PKMU23dUBty4GjWzK9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium text-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View Files
                </a>
                <a
                  href="https://github.com/AdityaChaudhary0002/Coffee_Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-sm font-medium flex items-center justify-center border border-transparent dark:border-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
