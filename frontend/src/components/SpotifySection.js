import React from 'react';
import { motion } from 'framer-motion';

const SpotifySection = () => {
    return (
        <section id="spotify" className="px-4 py-20 bg-gray-50 dark:bg-transparent border-t border-gray-200 dark:border-white/5">
            <div className="max-w-4xl mx-auto w-full">
                {/* Title */}
                <div className="mb-12 text-center relative z-20">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 text-transparent bg-clip-text">
                        My Featured Playlist
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 font-medium">Music that fuels my coding sessions.</p>
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
                        className="w-full relative z-20 rounded-2xl"
                        title="Spotify Premium Embed"
                        style={{ border: "none", minHeight: "352px" }}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
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
