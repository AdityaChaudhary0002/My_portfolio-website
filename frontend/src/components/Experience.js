import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'MoneyNotSleep Media Pvt. Ltd.',
    location: 'Remote',
    period: 'June 2024 – June 2025',
    type: 'Internship',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'Engineered and scaled robust MERN stack applications, designing a modular architecture that improved system maintainability by 40%',
      'Architected secure, high-performance REST APIs with advanced JWT authentication and role-based access control (RBAC)',
      'Developed a comprehensive admin dashboard featuring real-time data synchronization and complex CRUD operations',
      'Elevated the Developer Experience (DX) by implementing reusable React components and a scalable Tailwind CSS design system',
      'Actively drove Agile sprints, conducted rigorous PR code reviews, and streamlined CI/CD deployment pipelines',
    ],
  },
];
const getTechIconUrl = (techName) => {
  const iconMap = {
    'React': 'react/61DAFB',
    'Node.js': 'nodedotjs/339933',
    'Express': 'express',
    'MongoDB': 'mongodb/47A248',
    'JWT': 'jsonwebtokens',
    'Tailwind CSS': 'tailwindcss/06B6D4',
    'REST APIs': 'postman/FF6C37'
  };
  const path = iconMap[techName];
  if (path) {
    if (techName === 'Express' || techName === 'JWT') {
      return { url: `https://cdn.simpleicons.org/${path}`, invertDark: true };
    }
    return { url: `https://cdn.simpleicons.org/${path}`, invertDark: false };
  }
  return null;
};

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:text-left text-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer uppercase leading-[0.9]">PROFESSIONAL<br />JOURNEY</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Work that demonstrates impact and ownership</p>
        </motion.div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] p-8 hover:-translate-y-1 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center p-2">
                      <img src="https://cdn.simpleicons.org/react/61DAFB" alt="MERN" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(97,218,251,0.5)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400 mt-1 sm:ml-[3.25rem]">
                    {exp.company}
                  </div>
                </div>

                {exp.type && (
                  <div className="inline-flex items-center justify-center">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-white/10">
                      {exp.type}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2 relative z-10 sm:ml-[3.25rem]">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 11h10v2H7z" />
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 15H5V9h14v10z" />
                  </svg>
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {exp.location}
                </span>
              </div>

              <ul className="mt-6 space-y-3 relative z-10 sm:ml-[3.25rem]">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                    <span className="text-sm md:text-base leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="mt-6 flex flex-wrap gap-2 relative z-10 sm:ml-[3.25rem]">
                  {exp.tech.map((t) => {
                    const iconInfo = getTechIconUrl(t);
                    return (
                      <span
                        key={t}
                        className="px-2.5 py-1.5 flex items-center gap-1.5 text-xs font-medium rounded-md bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-200"
                      >
                        {iconInfo && (
                          <img
                            src={iconInfo.url}
                            alt={t}
                            className={`w-3.5 h-3.5 ${iconInfo.invertDark ? 'dark:invert' : ''}`}
                            loading="lazy"
                          />
                        )}
                        {t}
                      </span>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;