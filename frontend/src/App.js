import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion, useScroll, useTransform, useMotionValue, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';
import './App.css';

// Import components
import HeroAbout from './components/HeroAbout';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// 3D Scene Component
const Scene3D = ({ section }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

// Parallax tilt hook
function useParallaxTilt(shadowColor = 'rgba(96,165,250,0.18)') {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: y / 20, y: -x / 20 });
  };
  
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });
  
  return { tilt, handleMouseMove, handleMouseLeave };
}

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

  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [25, -25]);
  const rotateY = useTransform(x, [-150, 150], [-25, 25]);

  // Removed custom cursor effect - using default cursor

  useEffect(() => {
    if (frontInView) setCurrentSection('hero');
    else if (skillsInView) setCurrentSection('skills');
    else if (projectsInView) setCurrentSection('projects');
  }, [frontInView, skillsInView, projectsInView]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;
    x.set((xPos - 0.5) * 300);
    y.set((yPos - 0.5) * 300);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Profile image floating/orbit animation + pulse
  const [orbit, setOrbit] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setOrbit(o => o + 0.018), 16);
    return () => clearInterval(id);
  }, []);
  const orbitX = Math.sin(orbit) * 14;
  const orbitY = Math.cos(orbit) * 10;
  const [imgTilt, setImgTilt] = useState({ x: 0, y: 0 });
  const handleImgMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setImgTilt({ x: x / 18, y: -y / 18 });
  };
  const handleImgMouseLeave = () => setImgTilt({ x: 0, y: 0 });
  // Pulse animation for border
  const imgControls = useAnimation();
  useEffect(() => {
    imgControls.start({
      boxShadow: [
        '0 0 0 0 rgba(124,58,237,0.5)',
        '0 0 0 12px rgba(59,130,246,0.15)',
        '0 0 0 0 rgba(124,58,237,0.5)'
      ],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
    });
  }, [imgControls]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Smooth scroll effect added here
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const id = anchor.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-x-hidden cursor-default">
      <Navbar currentSection={currentSection} />
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene3D section={currentSection} />
          </Suspense>
        </Canvas>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-60">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow transition text-sm select-none"
          aria-label="Toggle theme"
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? (
            <span className="inline-flex items-center gap-2">
              {/* moon icon */}
              <span className="hidden sm:inline">Dark</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              {/* sun icon */}
              <span className="hidden sm:inline">Light</span>
            </span>
          )}
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 bg-white/70 dark:bg-black/50">
        {/* Combined Hero + About Section */}
        <HeroAbout
          frontRef={frontRef}
          orbitX={orbitX}
          orbitY={orbitY}
          imgTilt={imgTilt}
          handleImgMouseMove={handleImgMouseMove}
          handleImgMouseLeave={handleImgMouseLeave}
          imgControls={imgControls}
        />
         
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
        
        {/* Certifications Section */}
        <Certifications />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Quote Section */}
        <Quote />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;