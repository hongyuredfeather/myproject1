import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import SectionTitle from './common/SectionTitle';
import Tag from './common/Tag';

const About: React.FC = () => {
  const coreSkills = skills.filter(skill => skill.level === 'core');
  const basicSkills = skills.filter(skill => skill.level === 'basic');

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={profile.about.title} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左侧个人简介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#171717] p-6 md:p-8 rounded-2xl border border-[#2e303a]">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-indigo-400 mr-2">👨‍💻</span> 简介
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {profile.about.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="w-24 text-gray-500">学历</span>
                  <span className="font-medium text-white">{profile.about.education}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-24 text-gray-500">座右铭</span>
                  <span className="font-medium italic text-indigo-300">"{profile.about.motto}"</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧技能展示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8 md:mt-12"
          >
            {/* 核心技能 */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <span className="text-purple-400 mr-2">⭐</span> 核心技能
              </h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <Tag key={index} name={skill.name} type={skill.level} />
                ))}
              </div>
            </div>

            {/* 了解技能 */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <span className="text-indigo-400 mr-2">📚</span> 了解技能
              </h3>
              <div className="flex flex-wrap gap-3">
                {basicSkills.map((skill, index) => (
                  <Tag key={index} name={skill.name} type={skill.level} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
