import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200 dark:bg-transparent dark:border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-500 dark:text-gray-400 text-sm">Crafted by</span>
            <span className="text-gray-900 dark:text-white font-medium text-sm">Aditya</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wider">
            © 2026 Aditya Chaudhary. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 