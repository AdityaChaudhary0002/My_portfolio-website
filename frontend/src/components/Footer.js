import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200 dark:bg-transparent dark:border-white/10 mt-20 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Crafted with</span>
            <svg className="w-4 h-4 text-red-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">by</span>
            <span className="text-gray-900 dark:text-white font-bold text-sm tracking-wide">ADITYA</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
            © 2026 Aditya Chaudhary. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 