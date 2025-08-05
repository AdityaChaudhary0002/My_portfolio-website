import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Achievements</h2>
          <p className="text-lg text-gray-300">Competitive Programming Excellence</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { platform: 'LeetCode', rating: '1805', rank: 'Top 7%', color: 'orange', iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.12.0/leetcode.svg', url: 'https://leetcode.com/u/openair/' },
            { platform: 'CodeChef', rating: '1650', rank: '3-Star', color: 'amber', iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.12.0/codechef.svg', url: 'https://www.codechef.com/users/openair_30' },
            { platform: 'Codeforces', rating: '1278', rank: 'Pupil', color: 'blue', iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.12.0/codeforces.svg', url: 'https://codeforces.com/profile/openair' },
            { platform: 'GeeksforGeeks', rating: '1363', rank: 'Active', color: 'green', iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.12.0/geeksforgeeks.svg', url: 'https://www.geeksforgeeks.org/user/openair/' },
          ].map((achievement) => (
            <motion.div
              key={achievement.platform}
              whileHover={{
                scale: 1.08,
                y: -12,
                rotate: 2,
                boxShadow: `0 25px 50px -12px ${
                  achievement.color === 'orange' ? 'rgba(251, 146, 60, 0.4)' :
                  achievement.color === 'amber' ? 'rgba(245, 158, 11, 0.4)' :
                  achievement.color === 'blue' ? 'rgba(96, 165, 250, 0.4)' :
                  'rgba(52, 211, 153, 0.4)'
                }`
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 text-center cursor-pointer"
              onClick={() => window.open(achievement.url, '_blank')}
            >
              <div className="flex justify-center items-center h-16 mb-4">
                <img src={achievement.iconUrl} alt={`${achievement.platform} logo`} className="max-h-full max-w-full" />
              </div>
              <div className={`text-4xl font-bold mb-2 ${
                achievement.color === 'orange' ? 'text-orange-400' :
                achievement.color === 'amber' ? 'text-amber-400' :
                achievement.color === 'blue' ? 'text-blue-400' :
                'text-green-400'
              }`}>
                {achievement.rating}
              </div>
              <div className="text-lg font-semibold mb-1">{achievement.platform}</div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                {achievement.rank.includes('Top') && (
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )}
                {achievement.rank.includes('Star') && (
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )}
                {achievement.rank}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 