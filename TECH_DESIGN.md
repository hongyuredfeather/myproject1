# TECH_DESIGN.md（技术设计文档）



```
# 个人作品集网站 技术设计文档

## 1. 技术栈（版本建议）
- 基础框架：React 18 + TypeScript 5.2 + Vite 5.0
- 样式：Tailwind CSS 3.4 + PostCSS
- 路由：React Router 6.22（单页应用路由管理）
- 动画：Framer Motion 11.0（滚动动画、组件过渡）
- 其他工具：
  - react-icons（图标库，替代手动引入图片）
  - vite-plugin-imagemin（图片压缩，优化加载速度）

## 2. 项目结构（详细版）
```

src/

├── assets/          # 静态资源

│   ├── images/      # 头像、项目截图、二维码等图片

│   └── icons/       # 自定义图标（如有）

├── components/      # 通用 / 业务组件

│   ├── common/      # 通用组件（可复用）

│   │   ├── Button.tsx       # 自定义按钮

│   │   ├── Card.tsx         # 通用卡片容器

│   │   ├── Tag.tsx          # 技能 / 技术栈标签

│   │   └── SectionTitle.tsx # 各区域标题组件

│   ├── layout/      # 布局组件

│   │   ├── Header.tsx       # 导航栏

│   │   ├── Footer.tsx       # 页脚

│   │   └── Container.tsx    # 页面通用容器（控制宽度、居中）

│   ├── Hero.tsx     # 首页 Hero 区域

│   ├── About.tsx    # 关于我区域

│   ├── Projects.tsx # 项目展示区域

│   └── Contact.tsx  # 联系方式区域

├── data/            # 静态数据（便于维护）

│   ├── projects.ts  # 项目列表数据

│   ├── skills.ts    # 技能列表数据

│   └── profile.ts   # 个人基础信息

├── hooks/           # 自定义 Hooks

│   └── useScrollAnimation.ts # 滚动动画 Hook

├── styles/          # 全局样式

│   └── globals.css  # Tailwind 全局样式导入、自定义样式

├── types/           # TypeScript 类型定义

│   ├── project.ts   # 项目数据类型

│   └── skill.ts     # 技能数据类型

├── App.tsx          # 根组件（路由 / 布局整合）

├── main.tsx         # 入口文件

└── vite-env.d.ts    # Vite 类型声明





```
## 3. 数据管理
### 3.1 数据类型定义（示例）
```typescript
// types/skill.ts
export type SkillType = {
  name: string;       // 技能名称
  level: 'core' | 'basic'; // 核心/基础技能
};

// types/project.ts
export type ProjectType = {
  id: number;         // 唯一标识
  title: string;      // 项目名称
  desc: string;       // 项目描述
  cover: string;      // 封面图路径
  techStack: string[];// 技术栈列表
  githubUrl: string;  // GitHub链接
  previewUrl?: string;// 在线预览链接
};
```

### 3.2 数据存储

- 所有静态数据（个人信息、技能、项目）存储在 `src/data/` 下的 TS 文件中，以数组 / 对象形式导出
- 示例：`src/data/projects.ts` 导出 `ProjectType[]` 类型的项目列表，便于后续增删改查
- 图片资源统一放在 `src/assets/images/`，通过相对路径引用

## 4. 性能优化

- 图片懒加载：使用 `loading="lazy"` 属性 + Framer Motion 实现可视区域加载
- 代码分割：React Router 6 按需加载组件（非必要，小项目可简化）
- 样式优化：Tailwind 按需打包（Vite 自动处理），避免无用样式
- 资源压缩：使用 `vite-plugin-imagemin` 压缩图片，减小包体积