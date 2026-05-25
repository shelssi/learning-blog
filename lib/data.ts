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

export const learningList = [
  {
    id: "sql",
    category: "Database",
    topics: [
      {
        title: "SQL 教程",
        reason: "Database fundamentals are essential for any full-stack engineer. SQL is the backbone for querying and managing relational databases.",
        subtopics: ["SELECT", "WHERE", "JOIN", "GROUP BY", "Subqueries"],
      },
      {
        title: "PostgreSQL 入门实战",
        reason: "PostgreSQL is a powerful open-source database. Understanding indexes, transactions, migrations and practical usage is crucial for building production-ready applications.",
        subtopics: ["Indexes", "Transactions", "Relations", "Migrations", "Performance tuning"],
      },
    ],
  },
  {
    id: "javascript-basics",
    category: "JavaScript Fundamentals",
    topics: [
      {
        title: "async / await",
        reason: "Modern asynchronous JavaScript. Essential for handling API calls, database queries, and avoiding callback hell.",
        subtopics: ["Promise states", "Error handling", "Promise.all", "Parallel requests"],
      },
      {
        title: "Promise",
        reason: "Core asynchronous programming pattern. Understanding Promises is fundamental to async/await and modern JavaScript.",
        subtopics: ["Promise constructor", "then/catch", "Promise.all/race", "Chaining"],
      },
      {
        title: "Array Methods",
        reason: "These methods are fundamental for data transformation and manipulation in any JavaScript application.",
        subtopics: ["map()", "filter()", "reduce()", "forEach()", "find()", "some()", "every()"],
      },
      {
        title: "Object Destructuring",
        reason: "Modern JavaScript syntax for extracting values from objects and arrays. Makes code more readable and concise.",
        subtopics: ["Object destructuring", "Array destructuring", "Nested destructuring", "Default values"],
      },
      {
        title: "Modules (import/export)",
        reason: "Essential for organizing code into reusable modules. Modern JavaScript uses ES6 modules for better code organization and maintainability.",
        subtopics: ["Named exports", "Default exports", "Re-exporting", "Dynamic imports"],
      },
      {
        title: "Error Handling",
        reason: "Proper error handling is critical for building robust applications. Understanding try/catch, error types, and custom errors prevents silent failures.",
        subtopics: ["try/catch/finally", "Error types", "Custom errors", "Error propagation"],
      },
    ],
  },
  {
    id: "http-apis",
    category: "HTTP & API Communication",
    topics: [
      {
        title: "fetch API",
        reason: "Native browser API for making HTTP requests. Essential for frontend-backend communication without external dependencies.",
        subtopics: ["GET/POST/PUT/DELETE", "Headers", "Request body", "Response parsing", "Error handling"],
      },
      {
        title: "axios",
        reason: "Popular HTTP client library with better error handling and interceptor support than fetch. Useful for complex API scenarios.",
        subtopics: ["Instance configuration", "Interceptors", "Request/response transformation", "Timeout handling"],
      },
    ],
  },
  {
    id: "typescript",
    category: "TypeScript",
    topics: [
      {
        title: "Type Annotations",
        reason: "TypeScript's core feature. Type annotations catch errors at compile-time, improving code quality and developer experience.",
        subtopics: ["Primitive types", "Union types", "Type inference", "Type aliases"],
      },
      {
        title: "Interface",
        reason: "Interfaces define contracts for objects. Essential for building scalable and maintainable TypeScript applications.",
        subtopics: ["Object interfaces", "Extending interfaces", "Optional properties", "Readonly properties"],
      },
      {
        title: "Generics",
        reason: "Generics enable flexible, reusable code components. Essential for building type-safe libraries and avoiding repetition.",
        subtopics: ["Generic functions", "Generic interfaces", "Generic constraints", "Utility types"],
      },
      {
        title: "Optional Fields & Nullable Types",
        reason: "Handling optional and nullable values properly prevents null reference errors. Critical for type safety.",
        subtopics: ["Optional parameters", "Optional chaining", "Nullish coalescing", "Non-null assertion"],
      },
      {
        title: "API Response Typing",
        reason: "Typing API responses ensures type safety throughout the application. Prevents runtime errors from unexpected API data.",
        subtopics: ["Response types", "Error response types", "Discriminated unions", "Type guards"],
      },
    ],
  },
  {
    id: "fullstack-advanced",
    category: "Full-Stack Engineering (Advanced)",
    topics: [
      {
        title: "State Management",
        reason: "Managing application state efficiently becomes critical as apps scale. Different patterns for different use cases.",
        subtopics: ["Local state", "Context API", "Redux/Zustand", "Server state (TanStack Query)"],
      },
      {
        title: "Form Handling",
        reason: "Forms are fundamental to most web applications. Proper form handling includes validation, error display, and submission.",
        subtopics: ["Form libraries (React Hook Form)", "Validation", "Submission handling", "Complex forms"],
      },
      {
        title: "Authentication & Authorization",
        reason: "Security is paramount. Understanding JWT, sessions, OAuth, and proper authentication/authorization patterns is essential.",
        subtopics: ["JWT tokens", "Session management", "OAuth 2.0", "Authorization patterns", "Security best practices"],
      },
      {
        title: "API Design & REST Conventions",
        reason: "Designing clean, predictable APIs is crucial for full-stack development. REST principles guide good API design.",
        subtopics: ["RESTful conventions", "Status codes", "Error responses", "API versioning", "Documentation"],
      },
      {
        title: "Database Relations & Schema Design",
        reason: "Proper schema design is fundamental to database performance. Understanding relationships prevents data integrity issues.",
        subtopics: ["One-to-many", "Many-to-many", "Foreign keys", "Normalization", "Migrations"],
      },
      {
        title: "Testing (Unit, Integration, E2E)",
        reason: "Testing ensures code quality and prevents regressions. Different test types catch different issues.",
        subtopics: ["Jest/Vitest", "React Testing Library", "Integration testing", "E2E with Playwright/Cypress"],
      },
      {
        title: "Performance Optimization",
        reason: "Building fast applications improves user experience and conversion rates. Performance optimization is an ongoing process.",
        subtopics: ["Code splitting", "Lazy loading", "Memoization", "Database indexing", "Caching strategies"],
      },
      {
        title: "DevOps & Deployment",
        reason: "Understanding how to deploy and maintain applications is essential for full-stack engineers.",
        subtopics: ["Docker", "CI/CD pipelines", "Environment variables", "Database backups", "Monitoring"],
      },
      {
        title: "Security Best Practices",
        reason: "Security vulnerabilities can have serious consequences. Understanding OWASP top 10 and security principles is critical.",
        subtopics: ["XSS prevention", "CSRF protection", "SQL injection", "Password security", "CORS", "Rate limiting"],
      },
    ],
  },
];