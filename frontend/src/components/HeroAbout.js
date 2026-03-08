import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MagneticButton = ({ children, className, href, download, target, rel }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const attr = href ? { href, download, target, rel } : {};
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      {...attr}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
    >
      {children}
    </Tag>
  );
};

const CodeTerminal = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // 1s
    const timer2 = setTimeout(() => setStep(2), 2500); // 2.5s
    const timer3 = setTimeout(() => setStep(3), 4000); // 4s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full text-left font-mono text-xs md:text-sm">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-white/10 pb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
        </div>
        <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold ml-2">aditya@mbp:~</span>
      </div>

      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <div className="flex">
          <span className="text-emerald-500 mr-2">➜</span>
          <span className="text-cyan-500 mr-2">~</span>
          <span>whoami</span>
        </div>

        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 pl-4">
            Aditya Chaudhary - AI Full Stack Engineer
          </motion.div>
        )}

        {step >= 1 && (
          <div className="flex mt-2 items-center">
            <span className="text-emerald-500 mr-2">➜</span>
            <span className="text-cyan-500 mr-2">~</span>
            <motion.span
              initial={{ width: 0 }} animate={{ width: "auto" }}
              transition={{ duration: 1, ease: "linear" }}
              className="overflow-hidden whitespace-nowrap inline-block"
            >
              npm run stats
            </motion.span>
          </div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="pl-4 pt-2 space-y-1">
            <div className="flex items-center gap-2"><span className="text-gray-400">Projects:</span><span className="text-blue-500 font-semibold">15+ Shipments</span></div>
            <div className="flex items-center gap-2"><span className="text-gray-400">LeetCode:</span><span className="text-yellow-500 font-semibold">1805 Rating</span></div>
            <div className="flex items-center gap-2"><span className="text-gray-400">Problems:</span><span className="text-rose-500 font-bold truncate">1500+ Solved</span></div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex mt-2 items-center">
            <span className="text-emerald-500 mr-2">➜</span>
            <span className="text-cyan-500 mr-2">~</span>
            <span className="w-2 h-4 bg-gray-400 animate-pulse inline-block"></span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const HeroAbout = ({ frontRef }) => {
  return (
    <section id="home" ref={frontRef} className="min-h-screen flex items-center px-4 md:px-8 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6">

        {/* Top Split: Name/Roles & Profile */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main Hero Card (2 cols) */}
          <div className="lg:col-span-2 bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-gray-200/50 dark:border-white/10 shadow-lg dark:shadow-2xl transition-all duration-300 hover:border-gray-300/50 dark:hover:border-white/20 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer">
                  ADITYA<br />CHAUDHARY.
                </span>
              </h1>

              <p className="text-lg md:text-xl flex flex-wrap items-center gap-3 font-medium tracking-tight">
                <span className="text-black dark:text-white">AI Full Stack Engineer</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="text-gray-600 dark:text-gray-400">Problem Solver</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="text-gray-600 dark:text-gray-400">UI/UX Enthusiast</span>
              </p>

              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <MagneticButton
                  href="/CV_Aditya_Chaudhary_2026_.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transition-shadow relative z-10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download CV</span>
                </MagneticButton>

                <MagneticButton
                  href="mailto:aditya0002adi@gmail.com"
                  className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-sm border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors relative z-10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Me</span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Profile Card (1 col) */}
          <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center justify-center border border-gray-200/50 dark:border-white/10 shadow-lg dark:shadow-2xl group hover:border-gray-300/50 dark:hover:border-white/20 transition-colors relative overflow-hidden">

            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border border-gray-200 dark:border-white/10 p-1 bg-gray-50 dark:bg-transparent shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            >
              <img
                src="/profile.jpg"
                alt="Aditya Chaudhary"
                className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Active Status Green Dot */}
              <div className="absolute bottom-4 right-4 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-[3px] border-white dark:border-[#111111]"></span>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />, color: 'text-red-500' },
                { icon: <path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />, color: 'text-blue-500' },
                { icon: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />, color: 'text-emerald-500' },
              ].map((item, index) => (
                <div key={index} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5">
                  <svg className={`w-5 h-5 ${item.color}`} viewBox="0 0 24 24" fill="currentColor">
                    {item.icon}
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center font-medium">Bengaluru • B.Tech CSE • Open to Work</p>
          </div>

        </div>

        {/* Bottom Split: About / IDE / Socials */}
        <div className="grid lg:grid-cols-4 gap-6">

          {/* About Card */}
          <div className="lg:col-span-2 bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-white/10 flex flex-col justify-center shadow-lg dark:shadow-2xl hover:border-gray-300/50 dark:hover:border-white/20 transition-colors">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Context
            </h2>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base font-medium">
              I'm a dedicated AI Full Stack Engineer with a strong foundation in computer science and a severe passion for building scalable, high-performance product applications. With a massive competitive programming background, I thrive on solving complex architectural problems and crafting elegant, user-focused visual solutions.
            </p>
          </div>

          {/* IDE Terminal Card */}
          <div className="bg-gray-50 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl hover:border-gray-300/50 dark:hover:border-white/20 transition-colors overflow-hidden flex flex-col justify-center">
            <CodeTerminal />
          </div>

          {/* Connect / Socials Card */}
          <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-white/10 flex flex-col justify-between shadow-lg dark:shadow-2xl hover:border-gray-300/50 dark:hover:border-white/20 transition-colors">
            <h3 className="text-sm uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 mb-6">Network</h3>

            <div className="space-y-3">
              {[
                { href: 'https://www.linkedin.com/in/adityachaudhary0/', label: 'LinkedIn', icon: <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0h4.8v2h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8V23h-5v-7.3c0-1.8-.03-4.2-2.6-4.2-2.6 0-3 2-3 4.1V23h-5V8z" />, color: 'text-[#0077b5]' },
                { href: 'https://github.com/AdityaChaudhary0002', label: 'GitHub', icon: <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.4 0 12.07c0 5.33 3.44 9.85 8.2 11.45.6.11.82-.27.82-.6v-2.17c-3.34.73-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.74.08-.74 1.2.09 1.84 1.26 1.84 1.26 1.07 1.85 2.8 1.31 3.48 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.28-.13-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26a11.3 11.3 0 016 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.25 2.94.12 3.25.77.85 1.24 1.94 1.24 3.28 0 4.7-2.81 5.74-5.49 6.04.43.37.81 1.1.81 2.22v3.29c0 .33.22.72.82.6A12.07 12.07 0 0024 12.07C24 5.4 18.63 0 12 0z" />, color: 'text-gray-900 dark:text-white' },
                { href: 'https://x.com/aditya0002ad', label: 'X', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />, color: 'text-gray-900 dark:text-white' },
              ].map((social, i) => (
                <MagneticButton
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-[#1a1a1c] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors group"
                >
                  <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{social.label}</span>
                  <svg className={`w-5 h-5 ${social.color} transition-transform group-hover:scale-110`} fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </MagneticButton>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/5">
              <p className="text-xs text-center text-gray-500 font-medium hidden md:block">Press <kbd className="font-mono bg-gray-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300 shadow-sm border border-gray-300 dark:border-white/20">⌘K</kbd> to explore</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroAbout;