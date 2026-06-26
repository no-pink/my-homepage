# no-pink — 个人主页

基于 React + Vite 构建的个人主页网站，包含个人信息展示和学习研究计划管理功能。

## 页面

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | Hero 大图 + 简短介绍 |
| 关于我 | `/about` | 详细个人简介、教育背景 |
| 技能 | `/skills` | 技能分类展示 |
| 项目 | `/projects` | 项目作品卡片 |
| 学习计划 | `/plan` | 学习研究计划管理（支持增删改） |
| 经历 | `/timeline` | 教育和工作经历时间线 |
| 博客 | `/blog` | 博客文章列表 |
| 联系 | `/contact` | 联系方式 + 社交链接 |

## 技术栈

- **框架**: React 19 + React Router v7
- **构建**: Vite 8
- **样式**: CSS Modules
- **图标**: Lucide React
- **部署**: GitHub Pages（静态站点）

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── main.jsx                 # 入口
├── App.jsx                  # 根组件 + 路由
├── index.css                # 全局样式 + CSS 变量
├── components/
│   ├── Navbar/              # 顶部导航栏
│   ├── Footer/              # 页脚
│   └── shared/              # 通用组件
├── pages/
│   ├── Home/                # 首页
│   ├── About/               # 关于我
│   ├── Skills/              # 技能
│   ├── Projects/            # 项目
│   ├── Plan/                # 学习计划（核心）
│   ├── Timeline/            # 经历时间线
│   ├── Blog/                # 博客
│   └── Contact/             # 联系
├── data/                    # 静态数据文件
└── context/                 # React Context（认证等）
```

## 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages。推送到 `main` 分支即可触发部署。
