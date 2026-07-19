# AI 产品经理个人作品集

基于 **Astro + Tailwind CSS** 构建的个人作品集网站，复古米白风格，支持暗黑模式。

## ✨ 特性

- 🎨 **复古视觉风格** - 米白底色 + 暖赭石强调色 + 噪点纹理
- 🌓 **暗黑模式** - 平滑切换，自动跟随系统
- 📱 **响应式布局** - 桌面端为主，移动端同等精致
- ⚡ **Astro 静态生成** - 兼容 GitHub Pages / Cloudflare Pages 部署
- 🎭 **组件化架构** - 清晰的目录结构，易于维护和扩展
- ✨ **丰富动效** - 入场动画、悬停效果、3D 悬浮终端

## 📁 页面结构

共 7 个页面：

1. **首页** (`/`) - Hero区、精选项目、能力标签墙、底部CTA
2. **项目列表** (`/projects`) - 3个项目大卡片纵向排列
3. **项目详情** (`/projects/[slug]`) - 统一模板，包含背景、功能、架构、成果、产品三问
4. **AI评测体系** (`/evaluation`) - 方法论、指标体系、闲鱼实战案例
5. **思考列表** (`/thinking`) - 行业观察、产品方法论、产品拆解
6. **文章详情** (`/thinking/[slug]`) - 极简阅读排版
7. **关于我** (`/about`) - 个人简介、技能栈、工作履历
8. **联系** (`/contact`) - 联系方式、简历下载

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:4321`

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📂 项目结构

```
portfolio-astro/
├── public/                 # 静态资源
│   └── favicon.svg
├── src/
│   ├── components/         # 组件
│   │   ├── Navbar.astro    # 导航栏
│   │   ├── Footer.astro    # 页脚
│   │   ├── ProjectCard.astro    # 项目卡片
│   │   ├── ArticleCard.astro    # 文章卡片
│   │   └── Terminal3D.astro     # 3D终端视觉
│   ├── data/               # 数据文件
│   │   ├── projects.ts     # 项目数据
│   │   └── articles.ts     # 文章数据
│   ├── layouts/            # 布局
│   │   └── BaseLayout.astro
│   ├── pages/              # 页面
│   │   ├── index.astro     # 首页
│   │   ├── evaluation.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── thinking/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css      # 全局样式
├── astro.config.mjs        # Astro 配置
├── tailwind.config.mjs     # Tailwind 配置
├── tsconfig.json
└── package.json
```

## 🎨 自定义内容

### 替换项目内容

编辑 `src/data/projects.ts`，修改对应项目的标题、描述、标签等。

### 替换文章内容

编辑 `src/data/articles.ts`，修改文章标题、摘要和正文。

### 替换个人信息

- 姓名、简介：`src/pages/about.astro`
- 联系方式：`src/pages/contact.astro`
- 导航栏简历链接：`src/components/Navbar.astro`

### 替换图片

所有图片目前使用灰色占位符，替换方式：
1. 将图片放入 `public/` 目录
2. 在对应组件/页面中引用 `/图片路径`

### 自定义配色

编辑 `tailwind.config.mjs` 中的 `colors` 配置。

## 🚀 部署

### Cloudflare Pages

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 中连接仓库
3. 构建命令：`npm run build`
4. 输出目录：`dist`

### GitHub Pages

1. 将代码推送到 GitHub
2. 配置 GitHub Actions 自动部署
3. 或手动构建后推送 `dist` 目录

## 📝 说明

当前版本为框架和视觉版本，所有内容为占位符。
标注 `【此处替换为XXX】` 的位置为需要填充真实内容的地方。

## 🛠 技术栈

- [Astro 4](https://astro.build/) - 静态站点生成器
- [Tailwind CSS 3](https://tailwindcss.com/) - 原子化 CSS
- TypeScript - 类型支持
