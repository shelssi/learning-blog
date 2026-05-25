export const roadmapItems = [
  {
    title: "SQL Basics",
    category: "Database",
    status: "Completed",
    progress: 100,
    description: "SELECT, JOIN, GROUP BY, subqueries and basic database design.",
  },
  {
    title: "PostgreSQL",
    category: "Database",
    status: "Learning",
    progress: 45,
    description: "Indexes, transactions, relations, migrations and practical usage.",
  },
  {
    title: "React + TypeScript",
    category: "Frontend",
    status: "Learning",
    progress: 35,
    description: "Components, hooks, forms, API calls and state management.",
  },
  {
    title: "Next.js",
    category: "Full-stack",
    status: "Learning",
    progress: 30,
    description: "App Router, server components, route handlers and deployment.",
  },
  {
    title: "Docker",
    category: "DevOps",
    status: "Not Started",
    progress: 0,
    description: "Docker Compose for local PostgreSQL and deployment workflow.",
  },
];

export const progressEntries = [
  {
    date: "2026-05-25",
    title: "Started SQL learning plan",
    content: "Reviewed SELECT, WHERE, ORDER BY and basic JOIN concepts.",
    tags: ["SQL", "Database"],
  },
  {
    date: "2026-05-26",
    title: "Built the first version of learning blog",
    content: "Created Next.js project, added Tailwind, shadcn/ui and basic pages.",
    tags: ["Next.js", "React", "Portfolio"],
  },
];

export const projects = [
  {
    title: "Personal Learning Blog",
    description:
      "A full-stack learning journal with roadmap, progress tracking and portfolio pages.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "In Progress",
  },
  {
    title: "Job Platform",
    description:
      "A future full-stack project for practicing authentication, CRUD, search and database relations.",
    stack: ["React", "Node.js", "PostgreSQL"],
    status: "Planned",
  },
];