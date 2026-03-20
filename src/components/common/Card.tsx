import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectType } from '../../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface CardProps {
  project: ProjectType;
  index: number;
}

const Card: React.FC<CardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[#171717] rounded-2xl overflow-hidden border border-[#2e303a] hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(99,102,241,0.2)]"
    >
      {/* 项目封面图 */}
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img 
          src={project.cover} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 项目内容 */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2" title={project.desc}>
          {project.desc}
        </p>

        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded bg-[#0a0a0a] text-gray-300 border border-[#2e303a]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 链接按钮 */}
        <div className="flex items-center gap-4">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            title="GitHub 源码"
          >
            <FiGithub className="mr-1.5" size={16} />
            源码
          </a>
          {project.previewUrl && (
            <a 
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              title="在线预览"
            >
              <FiExternalLink className="mr-1.5" size={16} />
              预览
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
