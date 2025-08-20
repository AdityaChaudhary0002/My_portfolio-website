import React from 'react';
import { motion } from 'framer-motion';
import StaticStars from "./StaticStars";

const HeroAbout = ({
  frontRef,
  orbitX,
  orbitY,
  imgTilt,
  handleImgMouseMove,
  handleImgMouseLeave,
  imgControls,
}) => {
  return (
    <section id="home" ref={frontRef} className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden">
      {/* content starts */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left column: Name, roles, quick info, resume & socials, about */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                ADITYA CHAUDHARY
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              />
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-200 flex flex-wrap items-center gap-3 mt-4 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="text-blue-400">Full Stack Developer</span>
              <span className="text-gray-400">|</span>
              <span className="text-blue-400">Problem Solver</span>
              <span className="text-gray-400">|</span>
              <span className="text-cyan-400">Tech Enthusiast</span>
            </motion.p>
          </motion.div>
          
          {/* Quick info chips */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>, text: 'Bangalore, Karnataka', color: 'blue-500' },
              { icon: <path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/>, text: 'B.Tech CSE', color: 'purple-500' },
              { icon: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>, text: 'Open to Work', color: 'cyan-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group`}
                whileHover={{ y: -2, scale: 1.03 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}/10 to-${item.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <span className="text-gray-100 flex items-center gap-2 text-sm md:text-base relative z-10">
                  <svg className={`w-4 h-4 md:w-5 md:h-5 text-${item.color}`} viewBox="0 0 24 24" fill="currentColor">
                    {item.icon}
                  </svg>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Resume & Socials */}
          <div className="flex flex-col items-center gap-5">
            <motion.a
              href="/Cv_Aditya_Chaudhary_2025.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -4, scale: 1.04, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Download Resume</span>
            </motion.a>
            
            <div className="flex items-center gap-4">
              {[
                { href: 'mailto:aditya0002adi@gmail.com', icon: <path d="M4 4h16v16H4V4zm8 8L4 6v12h16V6l-8 6z" />, text: 'Contact', color: 'blue-500' },
                { href: 'https://www.linkedin.com/in/adityachaudhary0/', icon: <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0h4.8v2h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8V23h-5v-7.3c0-1.8-.03-4.2-2.6-4.2-2.6 0-3 2-3 4.1V23h-5V8z" />, text: 'LinkedIn', color: 'blue-500' },
                { href: 'https://github.com/AdityaChaudhary0002', icon: <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.4 0 12.07c0 5.33 3.44 9.85 8.2 11.45.6.11.82-.27.82-.6v-2.17c-3.34.73-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.74.08-.74 1.2.09 1.84 1.26 1.84 1.26 1.07 1.85 2.8 1.31 3.48 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.28-.13-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26a11.3 11.3 0 016 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.25 2.94.12 3.25.77.85 1.24 1.94 1.24 3.28 0 4.7-2.81 5.74-5.49 6.04.43.37.81 1.1.81 2.22v3.29c0 .33.22.72.82.6A12.07 12.07 0 0024 12.07C24 5.4 18.63 0 12 0z" />, text: 'GitHub', color: 'gray-500' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.text !== 'Contact' ? '_blank' : undefined}
                  rel={item.text !== 'Contact' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-5 py-2.5 rounded-full text-gray-100 border border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group`}
                  whileHover={{ y: -2, scale: 1.03 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}/10 to-${item.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <svg className={`w-5 h-5 text-${item.color} relative z-10`} fill="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                  <span className="relative z-10">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* About */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-700/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">About Me</h2>
              <p className="text-gray-200 leading-relaxed text-base">
                I'm a dedicated Full Stack Developer with a strong foundation in computer science and a passion for building scalable, high-performance web applications. With a competitive programming background, I thrive on solving complex problems and creating elegant, user-focused solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right column: Profile image with subtle orbit/tilt + quick stats */}
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1.5 shadow-lg flex items-center justify-center"
            style={{
              perspective: '1000px',
              transform: `translateX(${orbitX}px) translateY(${orbitY}px) rotateY(${imgTilt.x}deg) rotateX(${imgTilt.y}deg)`,
            }}
            onMouseMove={handleImgMouseMove}
            onMouseLeave={handleImgMouseLeave}
            whileHover={{ scale: 1.05 }}
            animate={imgControls}
          >
            <img
              src="/profile.jpg"
              alt="Aditya Chaudhary"
              className="w-full h-full rounded-full object-cover"
              style={{ transform: 'translateZ(30px) scale(0.95)', transformStyle: 'preserve-3d' }}
            />
          </motion.div>
          
          {/* Quick Stats Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 w-full max-w-md shadow-md border border-gray-700/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-5">
                <svg className="w-7 h-7 mr-2 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h4v8H3v-8zm7-6h4v14h-4V7zm7-4h4v18h-4V3z" />
                </svg>
                <h3 className="text-xl font-semibold text-purple-400">Quick Stats</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h16v2H4z"/>
                      </svg>
                    ),
                    text: 'Projects',
                    value: '15+',
                    color: 'blue-400'
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                    ),
                    text: 'Problems',
                    value: '1500+',
                    color: 'green-400'
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-purple-400" viewBox="0 0 32 32" fill="none">
                        <path d="M25.5 16.1c0-2.2-1.1-4.2-2.9-5.4l-6.2-4.2c-1.1-.7-2.5-.7-3.6 0l-6.2 4.2C7.6 11.9 6.5 13.9 6.5 16.1v7.8c0 1.2.7 2.3 1.8 2.9l6.2 4.2c1.1.7 2.5.7 3.6 0l6.2-4.2c1.1-.7 1.8-1.8 1.8-2.9v-7.8z" fill="#FFA116"/>
                        <path d="M16 2.5c-1.1 0-2 .9-2 2v7.2c0 1.1.9 2 2 2s2-.9 2-2V4.5c0-1.1-.9-2-2-2z" fill="#292D3E"/>
                      </svg>
                    ),
                    text: 'LeetCode',
                    value: '1805',
                    color: 'purple-400'
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3h3v18H5zM10.5 7h3v14h-3zM16 11h3v10h-3z" />
                      </svg>
                    ),
                    text: 'Codeforces',
                    value: 'Pupil',
                    color: 'blue-400'
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.477 2 12s4.486 10 10 10 10-4.477 10-10S17.514 2 12 2zm-4 8h2a2 2 0 110 4H8v-4zm6 0h2v4h-2a2 2 0 110-4z" />
                      </svg>
                    ),
                    text: 'GfG',
                    value: 'Active',
                    color: 'green-400'
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 4h14v2H5zm2 4h10v12l-5-2-5 2V8z"/>
                      </svg>
                    ),
                    text: 'Certificates',
                    value: '5+',
                    color: 'yellow-400'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-200 text-sm">{item.text}</span>
                    </div>
                    <span className={`font-semibold text-${item.color} text-sm`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;