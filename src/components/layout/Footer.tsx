import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[#2e303a] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} 红羽. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
