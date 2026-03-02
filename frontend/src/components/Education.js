import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Lovely Professional University, Jalandhar',
    meta: 'CGPA 7.24/10',
    color: 'blue',
    iconPath: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z' // Hat / University
  },
  {
    title: 'Senior Secondary (12th)',
    org: 'Saint Vivekananda Sr. Sec. Public School, Etawah',
    meta: '88%',
    color: 'green',
    iconPath: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' // School Building
  },
  {
    title: 'Secondary (10th)',
    org: 'Saint Vivekananda Sr. Sec. Public School, Etawah',
    meta: 'CGPA 10/10',
    color: 'yellow',
    iconPath: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' // School Building
  },
];

const badgeStyles = {
  blue: 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-white/10',
  green: 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-white/10',
  yellow: 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-white/10',
};

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-gray-100 dark:via-gray-300 dark:to-gray-500">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">Academic milestones and performance</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 hover:-translate-y-1 relative group"
            >
              <div className="flex items-start gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm
                  ${ed.color === 'blue' ? 'bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400' :
                    ed.color === 'green' ? 'bg-green-50/50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400' :
                      'bg-yellow-50/50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20 text-yellow-600 dark:text-yellow-400'}`}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d={ed.iconPath} />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ed.title}</h3>
                  <div className="text-base text-gray-600 dark:text-gray-400 mt-2">{ed.org}</div>
                  <div className={`inline-block mt-4 text-xs font-medium px-3 py-1 rounded-full ${badgeStyles[ed.color]}`}>
                    {ed.meta}
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

export default Education;