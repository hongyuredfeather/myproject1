import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* 文字内容区 */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-lg md:text-xl text-[#9ca3af] mb-2 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            你好，我是
          </motion.h2>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-[#ffffff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {profile.name}
          </motion.h1>
          
          <motion.div 
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold tracking-wider">
              {profile.role}
            </span>
          </motion.div>
          
          <motion.p 
            className="text-[#9ca3af] text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {profile.bio}
          </motion.p>
        </motion.div>

        {/* 头像区 */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#171717] border-4 border-[#0a0a0a]">
              <img 
                src={profile.avatar} 
                alt={`${profile.name}的头像`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
