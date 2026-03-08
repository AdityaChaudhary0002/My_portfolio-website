import React from 'react';
import { motion } from 'framer-motion';

const SpotifySection = () => {
    return (
        <section id="spotify" className="px-4 py-20 bg-gray-50 dark:bg-transparent border-t border-gray-200 dark:border-white/5">
            <div className="max-w-4xl mx-auto w-full">
                {/* Title */}
                <div className="mb-12 md:text-left text-center relative z-20">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 animate-text-shimmer uppercase leading-[0.9]">
                        VIBE<br />CHECK
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 font-medium">Music that fuels my coding sessions.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl border border-gray-200 dark:border-white/10 group bg-white dark:bg-[#121212]"
                >
                    {/* Subtle Background Glow for integration feel */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>

                    {/* Official Spotify Embed */}
                    <iframe
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px", border: "none" }}
                        src="https://open.spotify.com/embed/playlist/14I8CUzbsC6ZiO7hV7ZOb6?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default SpotifySection;
