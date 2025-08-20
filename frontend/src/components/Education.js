import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Lovely Professional University, Jalandhar',
    meta: 'CGPA 7.24/10',
    color: 'blue',
  },
  {
    title: 'Senior Secondary (12th)',
    org: 'Saint Vivekananda Sr. Sec. Public School, Etawah',
    meta: '88%',
    color: 'blue',
  },
  {
    title: 'Secondary (10th)',
    org: 'Saint Vivekananda Sr. Sec. Public School, Etawah',
    meta: 'CGPA 10/10',
    color: 'blue',
  },
];

const badgeStyles = {
  blue: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300',
  green: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:shadow-lg transition-all duration-300',
  yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md hover:shadow-lg transition-all duration-300',
};

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-blue-700 dark:text-blue-400">Education</h2>
          <p className="text-gray-700 dark:text-gray-300">Academic milestones and performance</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Colorful hover effect overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                ed.color === 'blue' ? 'bg-gradient-to-r from-blue-50/30 to-indigo-50/30 dark:from-blue-900/20 dark:to-indigo-900/20' :
                ed.color === 'green' ? 'bg-gradient-to-r from-green-50/30 to-emerald-50/30 dark:from-green-900/20 dark:to-emerald-900/20' :
                'bg-gradient-to-r from-yellow-50/30 to-amber-50/30 dark:from-yellow-900/20 dark:to-amber-900/20'
              }`}></div>
              <div className={`absolute inset-0 border-2 border-transparent group-hover:rounded-xl transition-all duration-300 pointer-events-none ${
                ed.color === 'blue' ? 'group-hover:border-blue-300 dark:group-hover:border-blue-600' :
                ed.color === 'green' ? 'group-hover:border-green-300 dark:group-hover:border-green-600' :
                'group-hover:border-yellow-300 dark:group-hover:border-yellow-600'
              }`}></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  ed.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 group-hover:from-blue-200 group-hover:to-blue-300 dark:group-hover:from-blue-800/50 dark:group-hover:to-blue-700/50' :
                  ed.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 group-hover:from-green-200 group-hover:to-green-300 dark:group-hover:from-green-800/50 dark:group-hover:to-green-700/50' :
                  'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 group-hover:from-yellow-200 group-hover:to-yellow-300 dark:group-hover:from-yellow-800/50 dark:group-hover:to-yellow-700/50'
                }`}>
                  <svg className={`w-6 h-6 transition-colors ${
                    ed.color === 'blue' ? 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300' :
                    ed.color === 'green' ? 'text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300' :
                    'text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300'
                  }`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L2 9l10 6 10-6-10-6z"/>
                    <path d="M4 15h16v2H4z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold transition-colors ${
                    ed.color === 'blue' ? 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400' :
                    ed.color === 'green' ? 'text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400' :
                    'text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400'
                  }`}>{ed.title}</h3>
                  <div className="text-base text-gray-600 dark:text-gray-400 mt-2">{ed.org}</div>
                  <div className={`inline-block mt-4 text-sm font-bold px-4 py-2 rounded-full ${badgeStyles[ed.color]} transform hover:scale-105 transition-transform duration-300`}>
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