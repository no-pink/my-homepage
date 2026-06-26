const defaultPlan = [
  {
    id: "plan-1",
    title: "Mastering Rust: Systems Programming",
    description: "A systematic deep-dive into Rust — from ownership and borrowing semantics to async runtime internals. End goal: build a production-grade CLI tool from scratch.",
    deadline: "2026-09-01",
    color: "#E07A5F",
    createdAt: "2026-06-01",
    steps: [
      {
        id: "step-1-1",
        title: "Core Language: Syntax & Ownership",
        completed: false,
        dailyTasks: [
          { id: "task-1-1-1", date: "2026-06-20", title: "Read The Rust Book Ch.1-3: Fundamentals", done: true },
          { id: "task-1-1-2", date: "2026-06-21", title: "Complete Rustlings exercises 1-30", done: true },
          { id: "task-1-1-3", date: "2026-06-22", title: "Read The Rust Book Ch.4: Ownership deep-dive", done: true },
          { id: "task-1-1-4", date: "2026-06-23", title: "Write a blog post explaining Rust's ownership model", done: false },
          { id: "task-1-1-5", date: "2026-06-24", title: "Complete Rustlings exercises 31-55", done: false },
          { id: "task-1-1-6", date: "2026-06-25", title: "Read The Rust Book Ch.5-6: Structs & Enums", done: false },
        ],
      },
      {
        id: "step-1-2",
        title: "Intermediate: Lifetimes, Generics & Traits",
        completed: false,
        dailyTasks: [
          { id: "task-1-2-1", date: "2026-06-26", title: "Read The Rust Book Ch.10: Generics & Traits", done: false },
          { id: "task-1-2-2", date: "2026-06-27", title: "Read The Rust Book Ch.11: Testing strategies", done: false },
          { id: "task-1-2-3", date: "2026-06-28", title: "Work through Rust by Example exercises", done: false },
        ],
      },
      {
        id: "step-1-3",
        title: "Capstone: Build a CLI Tool",
        completed: false,
        dailyTasks: [
          { id: "task-1-3-1", date: "2026-07-01", title: "Design CLI tool requirements & architecture", done: false },
          { id: "task-1-3-2", date: "2026-07-02", title: "Scaffold project with clap + anyhow", done: false },
          { id: "task-1-3-3", date: "2026-07-03", title: "Implement core functionality modules", done: false },
        ],
      },
    ],
  },
  {
    id: "plan-2",
    title: "Personal Knowledge Management System",
    description: "Building a full-stack knowledge management platform with Markdown editing, semantic tagging, full-text search, and knowledge graph visualization.",
    deadline: "2026-10-15",
    color: "#81B29A",
    createdAt: "2026-06-15",
    steps: [
      {
        id: "step-2-1",
        title: "Requirements & Architecture Design",
        completed: false,
        dailyTasks: [
          { id: "task-2-1-1", date: "2026-06-25", title: "Survey existing tools: Notion, Obsidian, Logseq", done: true },
          { id: "task-2-1-2", date: "2026-06-26", title: "Define core feature set and finalize tech stack", done: false },
          { id: "task-2-1-3", date: "2026-06-27", title: "Design DB schema (ER diagram) and REST API spec", done: false },
        ],
      },
      {
        id: "step-2-2",
        title: "Backend Development",
        completed: false,
        dailyTasks: [
          { id: "task-2-2-1", date: "2026-06-28", title: "Scaffold NestJS project with module structure", done: false },
          { id: "task-2-2-2", date: "2026-06-29", title: "Implement authentication layer (JWT + refresh tokens)", done: false },
          { id: "task-2-2-3", date: "2026-06-30", title: "Build Notes CRUD API with validation", done: false },
        ],
      },
    ],
  },
];

export default defaultPlan;
