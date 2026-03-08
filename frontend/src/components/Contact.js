import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-left text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer uppercase leading-[0.9]">GET IN<br />TOUCH</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Let's work together on your next project</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-transparent p-8 md:p-10 rounded-xl h-full flex flex-col justify-between border border-gray-200 dark:border-white/10"
          >
            <div>
              <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white tracking-tight">Contact Information</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">aditya0002adi@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-green-50/50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">+91 7453875563</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50/50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Bengaluru, Karnataka</span>
                </div>
              </div>
              {/* Follow Me */}
              <div className="mb-10">
                <h4 className="text-base font-semibold mb-4 text-gray-900 dark:text-white uppercase tracking-wider text-xs">Profiles</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/adityachaudhary0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 dark:bg-[#111] border border-gray-300 dark:border-white/10 rounded flex items-center justify-center hover:bg-white hover:border-[#0077b5]/50 dark:hover:bg-[#0077b5]/10 dark:hover:border-[#0077b5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] transition-all duration-300 cursor-pointer group"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-[#0077b5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/AdityaChaudhary0002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 dark:bg-[#111] border border-gray-300 dark:border-white/10 rounded flex items-center justify-center hover:bg-white hover:border-gray-800/50 dark:hover:bg-white/10 dark:hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer group"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.4 0 12.07c0 5.33 3.44 9.85 8.2 11.45.6.11.82-.27.82-.6v-2.17c-3.34.73-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.74.08-.74 1.2.09 1.84 1.26 1.84 1.26 1.07 1.85 2.8 1.31 3.48 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.28-.13-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26a11.3 11.3 0 016 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.25 2.94.12 3.25.77.85 1.24 1.94 1.24 3.28 0 4.7-2.81 5.74-5.49 6.04.43.37.81 1.1.81 2.22v3.29c0 .33.22.72.82.6A12.07 12.07 0 0024 12.07C24 5.4 18.63 0 12 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Opportunities */}
              <div>
                <h4 className="text-base font-semibold mb-3 text-gray-900 dark:text-white uppercase tracking-wider text-xs">Open for Opportunities</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    Full-Stack Developer
                  </span>
                  <span className="px-3 py-1.5 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Software Development Engineer
                  </span>
                  <span className="px-3 py-1.5 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Open Source
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-transparent p-8 md:p-10 rounded-xl h-full border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight">Send a Message</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">Tell me about your project, collaboration idea, or just drop a hello.</p>
            <form
              className="space-y-4"
              action="https://formspree.io/f/myzpnnab"
              method="POST"
            >
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-white/30 focus:border-gray-400 dark:focus:border-white/30 transition-all text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-white/30 focus:border-gray-400 dark:focus:border-white/30 transition-all text-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your project, ask a question, or just say hello..."
                  className="w-full p-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-white/30 focus:border-gray-400 dark:focus:border-white/30 transition-all text-sm resize-none"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gray-900 text-white dark:bg-white dark:text-black py-3 px-6 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 cursor-pointer text-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;