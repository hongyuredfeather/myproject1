import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="mb-12 text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-4 text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
