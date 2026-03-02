import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen flex items-center px-4 py-20">      <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-gray-100 dark:via-gray-300 dark:to-gray-500">Achievements</h2>
        <p className="text-gray-600 dark:text-gray-400">Competitive Programming Excellence</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { platform: 'LeetCode', rating: '1805', rank: 'Top 7%', color: 'orange', iconUrl: 'https://cdn.simpleicons.org/leetcode/FFA116', url: 'https://leetcode.com/u/aditya0002adi/' },
          { platform: 'CodeChef', rating: '1650', rank: '3-Star', color: 'amber', iconUrl: 'https://cdn.simpleicons.org/codechef/FFFFFF', url: 'https://www.codechef.com/users/openair_30' },
          { platform: 'Codeforces', rating: '1278', rank: 'Pupil', color: 'blue', iconUrl: 'https://cdn.simpleicons.org/codeforces/1F8ACB', url: 'https://codeforces.com/profile/openair' },
          { platform: 'GeeksforGeeks', rating: '1363', rank: 'Active', color: 'green', iconUrl: 'https://cdn.simpleicons.org/geeksforgeeks/2F8D46', url: 'https://www.geeksforgeeks.org/user/openair/' },
        ].map((achievement) => (
          <motion.div
            key={achievement.platform}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-transparent rounded-xl p-6 text-center cursor-pointer border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 group flex flex-col items-center justify-between h-full"
            onClick={() => window.open(achievement.url, '_blank')}
          >
            <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center border border-gray-200 dark:border-white/10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <img src={achievement.iconUrl} alt={`${achievement.platform} logo`} className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
                {achievement.rating}
              </div>
              <div className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-300 uppercase tracking-wider">{achievement.platform}</div>
              <div className="text-xs font-medium px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-white/10 inline-flex items-center gap-1.5">
                {achievement.rank.includes('Top') && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                {achievement.rank.includes('Star') && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                {achievement.rank}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Problems Solved Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-transparent rounded-xl p-8 border border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl opacity-80">🎯</span>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">1500+ Problems Solved</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">Consistent problem-solving across multiple platforms</p>

            <div className="grid grid-cols-3 gap-6 text-sm divide-x divide-gray-200 dark:divide-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</div>
                <div className="text-gray-500 dark:text-gray-400 uppercase tracking-wider text-xs font-semibold">LeetCode</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">400+</div>
                <div className="text-gray-500 dark:text-gray-400 uppercase tracking-wider text-xs font-semibold">CodeChef</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">600+</div>
                <div className="text-gray-500 dark:text-gray-400 uppercase tracking-wider text-xs font-semibold">Others</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default Achievements; 