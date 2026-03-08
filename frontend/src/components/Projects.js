import React from "react";
import { motion } from "framer-motion";

// Helper for Simpleicons
const getTechIconUrl = (techName) => {
  const iconMap = {
    "React.js": { url: "https://cdn.simpleicons.org/react/61DAFB", invert: false },
    React: { url: "https://cdn.simpleicons.org/react/61DAFB", invert: false },
    "React Native": { url: "https://cdn.simpleicons.org/react/61DAFB", invert: false },
    Vite: { url: "https://cdn.simpleicons.org/vite/646CFF", invert: false },
    "Tailwind CSS": { url: "https://cdn.simpleicons.org/tailwindcss/06B6D4", invert: false },
    Tailwind: { url: "https://cdn.simpleicons.org/tailwindcss/06B6D4", invert: false },
    "Node.js": { url: "https://cdn.simpleicons.org/nodedotjs/339933", invert: false },
    Firebase: { url: "https://cdn.simpleicons.org/firebase/FFCA28", invert: false },
    "Socket.io": { url: "https://cdn.simpleicons.org/socketdotio/000000", invert: true },
    TypeScript: { url: "https://cdn.simpleicons.org/typescript/3178C6", invert: false },
    "AI Engine": { url: "https://cdn.simpleicons.org/openai/000000", invert: true },
    WebRTC: { url: "https://cdn.simpleicons.org/webrtc/333333", invert: true },
    "Framer Motion": { url: "https://cdn.simpleicons.org/framer/000000", invert: true },
    CSS: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", invert: false },
  };
  return iconMap[techName] || null;
};

// Raw data for projects
const projectsData = [
  {
    title: "HireMind AI",
    description: "An intelligent AI-powered interview platform featuring conversational memory, live voice interactions, and adaptive follow-up questions.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop",
    techs: ["React", "Node.js", "AI Engine", "WebRTC"],
    liveUrl: "https://hiremind-ai.vercel.app/",
    githubUrl: "https://github.com/AdityaChaudhary0002/Hiremind-Ai"
  },
  {
    title: "Vibe",
    description: "A modern, AI-integrated social network and real-time chat platform leveraging powerful language models to enhance human connection intuitively.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2064&auto=format&fit=crop",
    techs: ["React.js", "Tailwind", "Socket.io", "Framer Motion"],
    liveUrl: "https://vibe-frontend-ad.vercel.app/",
    githubUrl: "https://github.com/AdityaChaudhary0002/Vibe"
  },
  {
    title: "E-commerce Website",
    description: "A sleek and responsive e-commerce site with modern design, built with React and Vite for a fast, seamless user shopping experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    techs: ["React.js", "Vite", "Tailwind CSS"],
    liveUrl: "https://e-commercccceee.netlify.app/",
    githubUrl: "https://github.com/AdityaChaudhary0002/ecommerce-website"
  },
  {
    title: "Byte Builder",
    description: "A real-time coding platform with live code execution, Firebase auth, and community features for collaborative and interactive learning.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    techs: ["React.js", "Node.js", "Firebase", "Socket.io"],
    liveUrl: "https://code-editor-6rqa.onrender.com/",
    githubUrl: "https://github.com/AdityaChaudhary0002/Byte_Builder"
  },
  {
    title: "Coffee House",
    description: "A mobile-first coffee ordering application built with React Native and TypeScript, focusing on a clean UI and intuitive user workflow.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop",
    techs: ["React Native", "TypeScript", "CSS"],
    liveUrl: "https://drive.google.com/drive/folders/1JZ0EL0VH1ZSPS8PKMU23dUBty4GjWzK9",
    githubUrl: "https://github.com/AdityaChaudhary0002/Coffee_Shop"
  }
];

const Projects = ({ projectsRef }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-left text-center mb-16 max-w-2xl"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer uppercase leading-[0.9]">
            FEATURED<br />WORKS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 font-medium">
            A collection of robust scalable applications blending deep technical complexity with minimal, sleek interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]"
            >
              {/* Image Container */}
              <div className="relative h-[220px] md:h-[240px] w-full overflow-hidden bg-gray-100 dark:bg-[#111]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/20 dark:to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-40" />

                {/* External Icon overlay */}
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                </a>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-50 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bottom Wrapper for Badges and Buttons aligns them horizontally */}
                <div className="mt-auto flex flex-col">
                  {/* Custom Shadcn-style Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => {
                      const iconData = getTechIconUrl(tech);
                      return (
                        <span key={tech} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-gray-800 dark:text-gray-200 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
                          {iconData && (
                            <img
                              src={iconData.url}
                              alt={tech}
                              className={`w-3.5 h-3.5 object-contain ${iconData.invert ? 'dark:invert opacity-80' : ''}`}
                            />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Custom Shadcn-style Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white shadow-sm hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 h-10 px-4 py-2"
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-gray-200 dark:border-white/10 bg-transparent shadow-sm hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-gray-100 h-10 w-12"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
