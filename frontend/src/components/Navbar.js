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
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-95 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-xl font-bold text-blue-400 tracking-wide">
          My Portfolio
        </span>
        <div className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-gray-200 hover:text-blue-400 transition-colors font-medium px-2 py-1 focus:outline-none ${
                currentSection === item.id
                  ? 'text-blue-400 font-bold underline'
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow transition text-sm select-none"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M21.75 15.5a9.75 9.75 0 01-12.5-12.5 9.75 9.75 0 1012.5 12.5z" />
                </svg>
                <span className="hidden sm:inline">Dark</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zm0 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM5.47 5.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.47 6.53a.75.75 0 010-1.06zM3.75 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.5A.75.75 0 013.75 12zm12 7.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H16.5a.75.75 0 01-.75-.75zm1.22-13.97a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM12 18.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.47 17.47a.75.75 0 011.06 0l1.06-1.06a.75.75 0 11-1.06-1.06L5.47 16.41a.75.75 0 010 1.06z" />
                </svg>
                <span className="hidden sm:inline">Light</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
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
        <div className="md:hidden bg-gray-900 bg-opacity-95 px-6 pb-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-gray-200 hover:text-blue-400 transition-colors font-medium text-lg text-left ${
                currentSection === item.id
                  ? 'text-blue-400 font-bold underline'
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow transition text-sm select-none"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
