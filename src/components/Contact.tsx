import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiCoffee } from 'react-icons/fi';
import SectionTitle from './common/SectionTitle';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: '邮箱',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      color: 'hover:text-indigo-400',
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: 'GitHub',
      value: '查看我的开源代码',
      href: profile.contact.github,
      color: 'hover:text-purple-400',
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      label: '掘金',
      value: '阅读我的技术文章',
      href: profile.contact.juejin,
      color: 'hover:text-blue-400',
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="联系我" 
          subtitle="对我的经历感兴趣？欢迎随时通过以下方式联系我。"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col items-center p-8 bg-[#171717] rounded-2xl border border-[#2e303a] hover:border-gray-500 transition-all duration-300 ${link.color}`}
            >
              <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-[#2e303a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{link.label}</h3>
              <p className="text-sm text-gray-400 text-center">{link.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
