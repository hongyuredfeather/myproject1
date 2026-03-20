import React from 'react';

interface TagProps {
  name: string;
  type?: 'core' | 'basic';
}

const Tag: React.FC<TagProps> = ({ name, type = 'basic' }) => {
  const baseClasses = "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1";
  
  const typeClasses = type === 'core'
    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/50 text-white shadow-[0_0_10px_rgba(99,102,241,0.2)]"
    : "bg-[#171717] border border-[#2e303a] text-gray-400 hover:text-white hover:border-gray-500";

  return (
    <span className={`${baseClasses} ${typeClasses}`}>
      {name}
    </span>
  );
};

export default Tag;
