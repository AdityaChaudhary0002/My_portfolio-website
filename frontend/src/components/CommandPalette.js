import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);

    // Toggle paleete with Cmd+K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setSearch('');
        }
    }, [isOpen]);

    const actions = [
        {
            id: 'projects',
            title: 'Go to Projects',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            id: 'skills',
            title: 'View Skills',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            id: 'contact',
            title: 'Send an Email',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            action: () => window.location.href = 'mailto:aditya0002adi@gmail.com'
        },
        {
            id: 'resume',
            title: 'Download Resume',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            ),
            action: () => {
                const link = document.createElement('a');
                link.href = '/Cv_Aditya_Chaudhary_2025.pdf';
                link.download = 'Cv_Aditya_Chaudhary_2025.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        },
        {
            id: 'theme',
            title: 'Toggle Theme',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            action: () => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }
        }
    ];

    const filteredActions = actions.filter(action =>
        action.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh] sm:pt-[25vh]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="relative w-full max-w-lg bg-white dark:bg-[#0f0f11] rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-white/10 mx-4"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 border-b border-gray-100 dark:border-white/5">
                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Type a command or search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full flex-1 bg-transparent border-0 px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-0 outline-none text-base sm:text-lg"
                            />
                            <span className="text-xs font-mono bg-gray-100 dark:bg-white/10 text-gray-500 rounded px-2 py-1">ESC</span>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredActions.length > 0 ? (
                                <ul className="space-y-1">
                                    {filteredActions.map((action, index) => (
                                        <li key={action.id}>
                                            <button
                                                onClick={() => {
                                                    action.action();
                                                    setIsOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-left bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group"
                                            >
                                                <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                                    {action.icon}
                                                </span>
                                                <span className="font-medium text-sm sm:text-base">{action.title}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="px-4 py-8 text-center text-sm text-gray-500">No results found.</p>
                            )}
                        </div>

                        <div className="bg-gray-50 dark:bg-[#0a0a0c] px-4 py-3 text-xs text-gray-400 flex justify-between border-t border-gray-100 dark:border-white/5">
                            <span>Navigate using <kbd className="bg-gray-200 dark:bg-white/10 px-1 rounded">Tab</kbd></span>
                            <span>Press <kbd className="bg-gray-200 dark:bg-white/10 px-1 rounded">↵</kbd> to select</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
