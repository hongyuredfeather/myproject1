export type SkillType = {
  name: string;
  level: 'core' | 'basic';
};

export const skills: SkillType[] = [
  { name: 'C语言', level: 'core' },
  { name: 'Python', level: 'basic' },
  { name: 'Linux系统', level: 'basic' },
  { name: '汇编语言', level: 'basic' },
  { name: 'Logisim电路设计', level: 'basic' },
  { name: 'AI工具使用', level: 'basic' }
];
