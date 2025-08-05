import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const About = ({ aboutRef, orbitX, orbitY, imgTilt, handleImgMouseMove, handleImgMouseLeave, imgControls }) => {
  return (
    <section ref={aboutRef} className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: About, Education, Experience */}
        <div className="flex flex-col gap-8">
          <div className="mb-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in Computer Science and Engineering. With expertise in modern web technologies and a competitive programming background, I build scalable and efficient solutions.
            </p>
          </div>
          {/* Education Card: simple, clean, modern, with B.Tech, 12th, 10th */}
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-lg mb-4 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(96,165,250,0.18)]"
          >
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 mr-3 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" fill="#60a5fa"/>
              </svg>
              <h3 className="text-xl font-bold text-blue-400">Education</h3>
            </div>
            <div className="space-y-3">
              {/* B.Tech */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" fill="#60a5fa"/></svg>
                <span className="font-semibold text-gray-200">B.Tech CSE</span>
                <span className="text-xs text-blue-400 font-bold">7.24/10 CGPA</span>
              </div>
              <div className="pl-7 text-sm text-gray-400">Lovely Professional University, Jalandhar Punjab</div>
              {/* 12th */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="7" rx="2" fill="#34d399"/><rect x="7" y="7" width="10" height="4" rx="1" fill="#34d399"/><rect x="9" y="3" width="6" height="4" rx="1" fill="#34d399"/></svg>
                <span className="font-semibold text-gray-200">12th</span>
                <span className="text-xs text-green-400 font-bold">88%</span>
              </div>
              <div className="pl-7 text-sm text-gray-400">Saint Vivekananda Sr. Sec. Public School, Etawah Uttar Pradesh</div>
              {/* 10th */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="7" rx="2" fill="#fbbf24"/><rect x="7" y="7" width="10" height="4" rx="1" fill="#fbbf24"/><rect x="9" y="3" width="6" height="4" rx="1" fill="#fbbf24"/></svg>
                <span className="font-semibold text-gray-200">10th</span>
                <span className="text-xs text-yellow-400 font-bold">10/10 CGPA</span>
              </div>
              <div className="pl-7 text-sm text-gray-400">Saint Vivekananda Sr. Sec. Public School, Etawah Uttar Pradesh</div>
            </div>
          </div>
          {/* Experience Card: simple, clean, modern */}
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(52,211,153,0.18)]"
          >
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 mr-3 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="7" width="16" height="13" rx="2" fill="#34d399"/>
                <rect x="9" y="3" width="6" height="4" rx="1" fill="#34d399"/>
              </svg>
              <h3 className="text-xl font-bold text-green-400">Experience</h3>
            </div>
            <div>
              <p className="text-base text-gray-300 font-semibold mb-1">MERN Stack Developer <span className="text-xs text-gray-400 font-normal">June 2024 – June 2025</span></p>
              <p className="text-sm text-green-300 font-bold mb-2">MoneyNotSleep Media Pvt. Ltd. (Jaipur, India)</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Developed and maintained scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                <li>Implemented secure RESTful APIs with JWT-based authentication, and built dynamic frontend components using React.js and Tailwind CSS.</li>
                <li>Led development of an internal admin dashboard with full CRUD operations, role-based access, and real-time data syncing.</li>
                <li>Used Postman for API testing, managed version control with Git & GitHub, and contributed to CI/CD workflows for smooth deployment.</li>
                <li>Collaborated in an Agile environment, participated in weekly sprints, code reviews, and peer programming sessions to ensure high code quality.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Profile Photo + Quick Stats */}
        <div className="flex flex-col items-center gap-8">
          {/* Profile Photo with 3D tilt/hover (true 3D effect) */}
          <motion.div
            className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-lg flex items-center justify-center"
            style={{
              perspective: '800px',
              transform: `translateX(${orbitX}px) translateY(${orbitY}px) rotateY(${imgTilt.x}deg) rotateX(${imgTilt.y}deg)`
            }}
            onMouseMove={handleImgMouseMove}
            onMouseLeave={handleImgMouseLeave}
            whileHover={{ scale: 1.08, boxShadow: '0px 12px 32px 0px rgba(96,165,250,0.4)' }}
            animate={imgControls}
          >
            <img
              src="/profile.jpg"
              alt="Aditya Chaudhary"
              className="w-full h-full rounded-full object-cover"
              style={{ transform: 'translateZ(20px) scale(0.96)', transformStyle: 'preserve-3d' }}
            />
          </motion.div>
          {/* Quick Stats with icons */}
          <div
            className="bg-gray-800 rounded-xl p-8 w-full max-w-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.18)]"
          >
            <div className="flex items-center mb-6">
              <img src="https://www.svgrepo.com/show/143589/chart.svg" alt="Quick Stats" className="w-10 h-10 mr-3" style={{ filter: 'invert(75%) sepia(50%) saturate(1500%) hue-rotate(240deg)' }} />
              <h3 className="text-2xl font-bold text-purple-400">Quick Stats</h3>
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-center justify-between text-base">
                <span className="flex items-center gap-3">
                  <img src="https://www.svgrepo.com/show/474334/coding.svg" alt="Projects" className="w-6 h-6" />
                  <span className="font-medium">Projects Completed</span>
                </span>
                <span className="font-bold text-blue-300 text-lg">15+</span>
              </li>
              <li className="flex items-center justify-between text-base">
                <span className="flex items-center gap-3">
                  <img src="https://www.svgrepo.com/show/4087/web-development.svg" alt="Problems" className="w-6 h-6" />
                  <span className="font-medium">Problems Solved</span>
                </span>
                <span className="font-bold text-green-300 text-lg">1500+</span>
              </li>
              <li className="flex items-center justify-between text-base">
                <span className="flex items-center gap-3">
                  {/* LeetCode SVG icon for visibility */}
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M25.5 16.1c0-2.2-1.1-4.2-2.9-5.4l-6.2-4.2c-1.1-.7-2.5-.7-3.6 0l-6.2 4.2C7.6 11.9 6.5 13.9 6.5 16.1v7.8c0 1.2.7 2.3 1.8 2.9l6.2 4.2c1.1.7 2.5.7 3.6 0l6.2-4.2c1.1-.7 1.8-1.8 1.8-2.9v-7.8z" fill="#FFA116"/>
                      <path d="M16 2.5c-1.1 0-2 .9-2 2v7.2c0 1.1.9 2 2 2s2-.9 2-2V4.5c0-1.1-.9-2-2-2z" fill="#292D3E"/>
                    </g>
                  </svg>
                  <span className="font-medium">Max LeetCode Rating</span>
                </span>
                <span className="font-bold text-purple-300 text-lg">1805</span>
              </li>
              <li className="flex items-center justify-between text-base">
                <span className="flex items-center gap-3">
                  <img src="https://www.svgrepo.com/show/143589/chart.svg" alt="Certifications" className="w-6 h-6" />
                  <span className="font-medium">Certifications</span>
                </span>
                <span className="font-bold text-yellow-300 text-lg">5+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 