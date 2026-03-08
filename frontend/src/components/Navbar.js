import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
];

const Navbar = ({ currentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Apply theme on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl bg-white/60 dark:bg-[#0B0B0D]/60 backdrop-blur-2xl border border-gray-200/50 dark:border-white/5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.02)] transition-all duration-300">
      <div className="flex items-center justify-between px-3 py-1.5">
        <span className="text-sm font-black text-gray-900 dark:text-white tracking-widest uppercase ml-3 select-none flex items-center gap-1.5 font-outfit">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 9l10 6 10-6-10-6zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
          ADITYA.
        </span>
        <div className="hidden md:flex gap-1 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 select-none ${currentSection === item.id
                ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                }`}
            >
              {item.label}
            </button>
          ))}

          {/* Spotify Button */}
          <button
            onClick={() => handleScroll('spotify')}
            className="ml-2 flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent hover:bg-[#1DB954]/10 dark:hover:bg-[#1DB954]/20 hover:border-[#1DB954]/30 transition-colors text-gray-700 dark:text-gray-300 group select-none"
            aria-label="Scroll to Spotify"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:text-[#1DB954] transition-colors">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-700 dark:text-gray-300 select-none"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M21.75 15.5a9.75 9.75 0 01-12.5-12.5 9.75 9.75 0 1012.5 12.5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zm0 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM5.47 5.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.47 6.53a.75.75 0 010-1.06zM3.75 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.5A.75.75 0 013.75 12zm12 7.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H16.5a.75.75 0 01-.75-.75zm1.22-13.97a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM12 18.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.47 17.47a.75.75 0 011.06 0l1.06-1.06a.75.75 0 11-1.06-1.06L5.47 16.41a.75.75 0 010 1.06z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        < button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#0B0B0D] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden py-2 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-sm font-medium px-6 py-3 text-left transition-colors ${currentSection === item.id
                ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 text-sm font-medium px-6 py-3 text-left border-t border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors mt-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zm0 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM5.47 5.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.47 6.53a.75.75 0 010-1.06zM3.75 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.5A.75.75 0 013.75 12zm12 7.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H16.5a.75.75 0 01-.75-.75zm1.22-13.97a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM12 18.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.47 17.47a.75.75 0 011.06 0l1.06-1.06a.75.75 0 11-1.06-1.06L5.47 16.41a.75.75 0 010 1.06z" />
                </svg>
                Light Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M21.75 15.5a9.75 9.75 0 01-12.5-12.5 9.75 9.75 0 1012.5 12.5z" />
                </svg>
                Dark Mode
              </>
            )}
          </button>

          {/* Mobile Spotify Button */}
          <button
            onClick={() => handleScroll('spotify')}
            className="flex items-center gap-3 text-sm font-medium px-6 py-3 text-left border-t border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:text-[#1DB954] transition-colors">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Spotify</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
