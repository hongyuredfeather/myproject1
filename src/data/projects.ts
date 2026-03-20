export type ProjectType = {
  id: number;
  title: string;
  desc: string;
  cover: string;
  techStack: string[];
  githubUrl: string;
  previewUrl?: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: '个人作品集网站',
    desc: '基于 React 和 Tailwind CSS 开发的响应式个人作品集单页网站，展示个人技能、项目和联系方式。包含平滑滚动与动画效果。',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    previewUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'AI 工具助手导航',
    desc: '一个聚合了常用 AI 工具和提示词的导航网站，帮助用户更高效地利用 AI 提升工作效率。',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Vite', 'Node.js'],
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: '基于 C 语言的系统工具',
    desc: '在 Linux 环境下使用 C 语言开发的轻量级系统监控工具，实时展示 CPU、内存等硬件指标。',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['C', 'Linux', 'Shell'],
    githubUrl: 'https://github.com'
  }
];
