import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useMotionTemplate, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactLenis, useLenis } from 'lenis/react'
import './App.css';

// Import components
import HeroAbout from './components/HeroAbout';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import SpotifySection from './components/SpotifySection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });
  const { scrollYProgress } = useScroll();

  // Refs for sections
  const [frontRef, frontInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });

  // Mouse position for Spotlight effect
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleGlobalMouseMove = (event) => {
    const { clientX, clientY } = event;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleGlobalMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const spotlightStyleLight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.04), transparent 80%)`;
  const spotlightStyleDark = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 80%)`;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <div
        className="relative min-h-screen bg-[#fafafa] text-gray-900 dark:bg-[#000000] dark:text-white overflow-x-hidden cursor-pointer selection:bg-blue-500/30 dark:selection:bg-white/20"
        onMouseMove={handleGlobalMouseMove}
        onMouseLeave={handleGlobalMouseLeave}
      >
        {/* Subtle premium noise texture for dark theme */}
        {theme === 'dark' && <div className="noise-bg mix-blend-overlay opacity-20 hidden dark:block"></div>}

        {/* Global Command Palette */}
        <CommandPalette theme={theme} setTheme={setTheme} />

        <Navbar currentSection={currentSection} />
        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%", position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: '#3b82f6', zIndex: 100 }}
        />

        {/* Scrollable Content */}
        <div className="relative z-10 bg-white/70 dark:bg-black/50">
          {/* Combined Hero + About Section */}
          <HeroAbout frontRef={frontRef} />

          {/* Experience Section */}
          <Experience />

          {/* Education Section */}
          <Education />

          {/* Skills Section */}
          <Skills skillsRef={skillsRef} />

          {/* Projects Section */}
          <Projects projectsRef={projectsRef} />


          {/* Achievements Section */}
          <Achievements />

          {/* Spotify Section */}
          <SpotifySection />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;