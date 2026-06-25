const defaultPlan = [
  {
    id: "plan-1",
    title: "深入 Rust 编程语言",
    description: "系统学习 Rust，掌握所有权、生命周期、异步编程等核心概念，最终能独立完成中等规模项目。",
    deadline: "2026-09-01",
    color: "#E07A5F",
    createdAt: "2026-06-01",
    steps: [
      {
        id: "step-1-1",
        title: "基础语法与核心概念",
        completed: false,
        dailyTasks: [
          { id: "task-1-1-1", date: "2026-06-20", title: "阅读 Rust Book 第1-3章：基础语法", done: true },
          { id: "task-1-1-2", date: "2026-06-21", title: "完成 Rustlings 练习 1-30", done: true },
          { id: "task-1-1-3", date: "2026-06-22", title: "阅读 Rust Book 第4章：所有权", done: true },
          { id: "task-1-1-4", date: "2026-06-23", title: "写一篇所有权理解的博客笔记", done: false },
          { id: "task-1-1-5", date: "2026-06-24", title: "完成 Rustlings 练习 31-55", done: false },
          { id: "task-1-1-6", date: "2026-06-25", title: "阅读 Rust Book 第5-6章：结构体与枚举", done: false },
        ],
      },
      {
        id: "step-1-2",
        title: "进阶特性：生命周期与泛型",
        completed: false,
        dailyTasks: [
          { id: "task-1-2-1", date: "2026-06-26", title: "阅读 Rust Book 第10章：泛型与Trait", done: false },
          { id: "task-1-2-2", date: "2026-06-27", title: "阅读 Rust Book 第11章：测试", done: false },
          { id: "task-1-2-3", date: "2026-06-28", title: "跟着 Rust by Example 练习", done: false },
        ],
      },
      {
        id: "step-1-3",
        title: "项目实战：命令行工具",
        completed: false,
        dailyTasks: [
          { id: "task-1-3-1", date: "2026-07-01", title: "设计CLI工具功能需求", done: false },
          { id: "task-1-3-2", date: "2026-07-02", title: "搭建项目骨架（clap + anyhow）", done: false },
          { id: "task-1-3-3", date: "2026-07-03", title: "实现核心功能模块", done: false },
        ],
      },
    ],
  },
  {
    id: "plan-2",
    title: "构建个人知识管理系统",
    description: "开发一个全栈的个人知识管理系统，支持Markdown笔记、标签分类、全文搜索和知识图谱展示。",
    deadline: "2026-10-15",
    color: "#81B29A",
    createdAt: "2026-06-15",
    steps: [
      {
        id: "step-2-1",
        title: "需求分析与技术选型",
        completed: false,
        dailyTasks: [
          { id: "task-2-1-1", date: "2026-06-25", title: "调研现有知识管理工具（Notion/Obsidian/Logseq）", done: true },
          { id: "task-2-1-2", date: "2026-06-26", title: "确定核心功能清单和技术栈", done: false },
          { id: "task-2-1-3", date: "2026-06-27", title: "绘制数据库ER图和API设计", done: false },
        ],
      },
      {
        id: "step-2-2",
        title: "后端开发",
        completed: false,
        dailyTasks: [
          { id: "task-2-2-1", date: "2026-06-28", title: "搭建 NestJS 项目骨架", done: false },
          { id: "task-2-2-2", date: "2026-06-29", title: "实现用户认证模块（JWT）", done: false },
          { id: "task-2-2-3", date: "2026-06-30", title: "实现笔记CRUD API", done: false },
        ],
      },
    ],
  },
];

export default defaultPlan;
