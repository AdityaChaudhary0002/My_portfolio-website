import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'MoneyNotSleep Media Pvt. Ltd.',
    location: 'Jaipur, Rajasthan, India',
    period: 'June 2024 – June 2025',
    type: 'Internship',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'Built and maintained scalable MERN applications with modular architecture',
      'Implemented JWT auth, secure REST APIs, and robust validation',
      'Developed admin dashboard with CRUD, RBAC, and real-time syncing',
      'Improved DX with reusable React components and Tailwind design system',
      'Collaborated in Agile sprints, PR reviews, and CI/CD pipelines',
    ],
  },
];

const Experience = () => {
  return (
    <section id = "experience"  className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-green-700 dark:text-green-400">Experience</h2>
          <p className="text-gray-700 dark:text-gray-300">Work that demonstrates impact and ownership</p>
        </motion.div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Colorful hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-emerald-50/30 dark:from-green-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-300 dark:group-hover:border-green-600 rounded-xl transition-all duration-300 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-green-600/10 dark:bg-green-500/10 flex items-center justify-center group-hover:bg-green-600/20 dark:group-hover:bg-green-500/20 transition-colors">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 7h16v13H4z"/>
                        <path d="M9 3h6v4H9z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{exp.role}</h3>
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400 mt-1 ml-15">
                    {exp.company}
                  </div>
                </div>
                
                {/* Internship tag - right most */}
                {exp.type && (
                  <div className="inline-flex items-center justify-center">
                    <span className="text-sm font-bold px-4 py-2 rounded-full 
                      bg-gradient-to-r from-green-500 to-emerald-500 text-white
                      shadow-md hover:shadow-lg transition-all duration-300
                      transform hover:scale-105">
                      {exp.type}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 relative z-10">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 11h10v2H7z"/>
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 15H5V9h14v10z"/>
                  </svg>
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  {exp.location}
                </span>
              </div>
              
              <ul className="mt-6 space-y-4 relative z-10">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                    <div className="mt-1 w-3 h-3 rounded-full bg-green-500 group-hover:bg-green-600 transition-colors flex-shrink-0" />
                    <span className="text-lg leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
              
              {exp.tech && (
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-200 dark:border-gray-600 
                      hover:bg-green-100 hover:text-green-800 dark:hover:bg-green-900/50 dark:hover:text-green-200 
                      hover:border-green-300 dark:hover:border-green-600
                      hover:-translate-y-0.5 hover:shadow transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
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