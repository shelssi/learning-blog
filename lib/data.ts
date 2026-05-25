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
    id: "web-fundamentals",
    category: "🌐 Web 基础",
    description: "互联网和网络通信的核心概念",
    topics: [
      {
        title: "HTTP 协议",
        reason: "HTTP是Web通信的基础协议。理解请求/响应模型、状态码、请求方法对于任何Web开发都是必须的。",
        subtopics: ["HTTP methods (GET/POST/PUT/DELETE)", "Status codes (2xx/3xx/4xx/5xx)", "Headers", "Cookies and sessions", "HTTPS and SSL/TLS"],
      },
      {
        title: "浏览器基础",
        reason: "了解浏览器如何工作，包括DOM、事件循环、Cookie存储等，对于前端开发至关重要。",
        subtopics: ["DOM structure", "Event loop", "Local Storage vs Session Storage", "Cookies (Set-Cookie, credentials)", "CORS"],
      },
    ],
  },
  {
    id: "sql",
    category: "🗄️ 数据库基础",
    description: "数据持久化和查询",
    topics: [
      {
        title: "SQL 教程",
        reason: "数据库查询语言是全栈工程师必须掌握的基础。SQL是与关系数据库交互的主要方式。",
        subtopics: ["SELECT", "WHERE", "JOIN (INNER/LEFT/RIGHT)", "GROUP BY", "ORDER BY", "Subqueries", "Aggregation functions"],
      },
      {
        title: "PostgreSQL 入门实战",
        reason: "PostgreSQL是功能强大的开源数据库。理解索引、事务、约束和迁移对构建生产级应用至关重要。",
        subtopics: ["Indexes and query optimization", "Transactions (ACID)", "Foreign keys and relations", "Migrations", "Connection pooling", "JSON support"],
      },
    ],
  },
  {
    id: "javascript-basics",
    category: "📜 JavaScript 基础",
    description: "现代JavaScript的核心特性",
    topics: [
      {
        title: "async / await",
        reason: "现代异步JavaScript的首选方式。用于处理API调用、数据库查询，避免回调地狱。",
        subtopics: ["Promise states (pending/fulfilled/rejected)", "Error handling with try/catch", "Promise.all/race/allSettled", "Parallel vs sequential execution"],
      },
      {
        title: "Promise",
        reason: "JavaScript异步编程的基础。理解Promises是学习async/await的前提。",
        subtopics: ["Promise constructor", "then() and catch()", "Promise.all/race", "Promise chaining", "Microtask queue"],
      },
      {
        title: "Array Methods",
        reason: "这些方法是JavaScript中最常用的数据转换工具，几乎每个项目都会用到。",
        subtopics: ["map()", "filter()", "reduce()", "forEach()", "find() and findIndex()", "some() and every()", "flatMap() and flat()"],
      },
      {
        title: "Object Destructuring",
        reason: "现代JavaScript语法，使代码更简洁易读。广泛用于函数参数、API响应处理等。",
        subtopics: ["Object destructuring", "Array destructuring", "Nested destructuring", "Default values", "Renaming variables"],
      },
      {
        title: "Modules (import/export)",
        reason: "ES6模块系统对代码组织至关重要。理解模块化可以构建可维护的大型应用。",
        subtopics: ["Named exports", "Default exports", "Re-exporting", "Dynamic imports", "Module resolution"],
      },
      {
        title: "Error Handling",
        reason: "正确的错误处理可以构建健壮的应用。理解error types和自定义错误防止silent failures。",
        subtopics: ["try/catch/finally", "Error types (Error, TypeError, ReferenceError)", "Custom error classes", "Error propagation", "Logging errors"],
      },
    ],
  },
  {
    id: "http-apis",
    category: "🔄 HTTP & API 通信",
    description: "客户端-服务器通信",
    topics: [
      {
        title: "fetch API",
        reason: "浏览器原生API，用于发送HTTP请求。是现代前端必须掌握的技能。",
        subtopics: ["GET/POST/PUT/DELETE methods", "Request headers and body", "Response parsing (JSON, text, blob)", "Error handling", "Timeout and abort"],
      },
      {
        title: "axios",
        reason: "流行的HTTP客户端库。相比fetch提供更好的错误处理、拦截器等功能。",
        subtopics: ["Instance configuration", "Request/response interceptors", "Automatic JSON transformation", "Timeout and retry", "BaseURL setup"],
      },
    ],
  },
  {
    id: "session-management",
    category: "🔐 会话管理 & 用户认证流程",
    description: "理解登录后前端如何保持用户状态",
    explanation: `
## 完整的用户认证流程

### 1️⃣ 注册/登录流程
\`\`\`
前端 → 输入 email/password → 提交到 POST /auth/login
后端 → 验证 email 和 password 是否正确
     → 如果正确，生成 session 或 JWT token
     → 返回给前端

后端两种常见方案：
┌─────────────────────────────────────────────────────────┐
│ 方案 A: Session + Cookie (传统)                          │
├─────────────────────────────────────────────────────────┤
│ 1. 后端验证 email/password                              │
│ 2. 创建 session，存储在服务器内存/Redis中               │
│ 3. 返回 Set-Cookie header: sessionId=xxx; HttpOnly      │
│ 4. 浏览器自动存储 cookie                                │
│ 5. 后续请求自动带上 cookie                              │
│ 优点: 服务器可随时主动删除 session                       │
│ 缺点: 无法水平扩展（需要共享 session store）             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ 方案 B: JWT Token (现代)                                 │
├─────────────────────────────────────────────────────────┤
│ 1. 后端验证 email/password                              │
│ 2. 创建 JWT: header.payload.signature                   │
│    payload 包含: { userId, email, exp (过期时间) }      │
│ 3. 返回 token 给前端                                    │
│ 4. 前端存储到 localStorage/sessionStorage               │
│ 5. 后续请求手动添加: Authorization: Bearer <token>     │
│ 优点: 无状态，易于扩展                                   │
│ 缺点: 无法主动注销（需要黑名单或等待过期）              │
└─────────────────────────────────────────────────────────┘
\`\`\`

### 2️⃣ 后续请求 - 验证身份
\`\`\`
前端发送受保护接口请求:
GET /api/user/profile

方案 A (Cookie):
GET /api/user/profile
Cookie: sessionId=xxx
↓
后端验证 sessionId 是否存在/有效
↓
有效 → 返回用户数据
无效 → 返回 401 Unauthorized

方案 B (JWT):
GET /api/user/profile
Authorization: Bearer eyJhbG...
↓
后端验证签名是否正确 + 是否过期
↓
有效 → 返回用户数据
无效 → 返回 401 Unauthorized
\`\`\`

### 3️⃣ 前端代码示例
\`\`\`javascript
// 方案 A: Cookie (自动带)
const response = await fetch('/api/user/profile', {
  credentials: 'include'  // 重要! 让浏览器自动带上 cookie
});

// 方案 B: JWT Token (手动添加)
const token = localStorage.getItem('token');
const response = await fetch('/api/user/profile', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});
\`\`\`

### 4️⃣ 注销
\`\`\`
方案 A (Cookie):
POST /auth/logout
← 后端删除服务器上的 session
← 返回 Set-Cookie: sessionId=; Max-Age=0  (清除 cookie)

方案 B (JWT):
POST /auth/logout
← 前端删除 localStorage 中的 token
← (可选) 服务器添加 token 到黑名单
\`\`\`
    `,
    topics: [
      {
        title: "Session vs JWT 对比",
        reason: "理解两种认证方案的优缺点，根据项目需求选择合适的方案。",
        subtopics: ["Session: 有状态、可主动撤销", "JWT: 无状态、易扩展", "混合方案 (Refresh tokens)", "Token 过期和刷新"],
      },
      {
        title: "Cookie 机制",
        reason: "理解Cookie的工作原理对于实现安全的session管理至关重要。",
        subtopics: ["Set-Cookie header", "HttpOnly flag (XSS防护)", "Secure flag (HTTPS)", "SameSite attribute (CSRF防护)", "Domain and Path"],
      },
    ],
  },
  {
    id: "backend-fundamentals",
    category: "⚙️ 后端基础",
    description: "服务器应用开发的核心",
    topics: [
      {
        title: "REST API 设计",
        reason: "RESTful API是Web应用的标准。理解REST原则能设计出清晰、易用的API。",
        subtopics: ["资源导向设计", "HTTP methods 语义", "Status codes (200/201/400/404/500)", "Request/Response format", "API versioning"],
      },
      {
        title: "路由 (Routing)",
        reason: "路由定义了API端点。理解路由匹配、参数提取、中间件顺序对构建正确的API至关重要。",
        subtopics: ["路由定义", "路径参数 (:id)", "查询参数 (?key=value)", "路由分组和前缀", "路由优先级"],
      },
      {
        title: "控制器 (Controllers)",
        reason: "控制器处理业务逻辑。将路由与业务逻辑分离使代码更可维护。",
        subtopics: ["接收请求参数", "调用服务层", "格式化响应", "错误处理和验证", "HTTP status code"],
      },
      {
        title: "服务层 (Services)",
        reason: "服务层包含核心业务逻辑。将业务逻辑与HTTP层分离使其可重用和可测试。",
        subtopics: ["业务逻辑实现", "数据库操作", "外部API调用", "数据转换和验证", "单一职责原则"],
      },
      {
        title: "中间件 (Middleware)",
        reason: "中间件在请求到达控制器前后执行，用于跨切关注点的处理。",
        subtopics: ["日志中间件", "错误处理中间件", "CORS中间件", "认证中间件", "请求验证中间件"],
      },
      {
        title: "认证 (Authentication)",
        reason: "认证验证用户的身份。这是任何需要用户账户的应用的基础。",
        subtopics: ["注册流程", "登录流程", "密码哈希 (bcrypt)", "JWT 或 Session", "用户角色", "受保护路由"],
      },
      {
        title: "授权 (Authorization)",
        reason: "授权检查用户是否有权访问资源。在认证之后执行。",
        subtopics: ["基于角色的访问控制 (RBAC)", "基于属性的访问控制 (ABAC)", "权限检查", "资源所有权验证"],
      },
      {
        title: "请求验证 (Validation)",
        reason: "验证确保输入数据的正确性和安全性。防止垃圾数据进入系统。",
        subtopics: ["Schema validation (Zod/Joi)", "类型检查", "自定义验证规则", "错误消息", "Sanitization"],
      },
      {
        title: "错误处理",
        reason: "好的错误处理能提供有用的反馈给前端。避免服务器崩溃和信息泄露。",
        subtopics: ["自定义错误类", "全局错误处理", "错误日志", "适当的HTTP状态码", "用户友好的错误消息"],
      },
      {
        title: "日志 (Logging)",
        reason: "日志帮助调试问题和监控应用。好的日志实践是生产就绪的要求。",
        subtopics: ["日志级别 (debug/info/warn/error)", "结构化日志", "日志存储 (文件/服务)", "日志轮转", "敏感信息过滤"],
      },
      {
        title: "环境变量",
        reason: "环境变量用于存储敏感信息和配置。不同环境（开发/测试/生产）使用不同配置。",
        subtopics: ["dotenv 文件", "敏感信息管理", "环境特定配置", "默认值处理"],
      },
    ],
  },
  {
    id: "authentication-advanced",
    category: "🔑 认证系统详解",
    description: "深入理解用户认证的各个方面",
    topics: [
      {
        title: "注册 (Sign Up)",
        reason: "注册是用户进入系统的第一步。需要验证email唯一性、密码强度等。",
        subtopics: ["Email 唯一性检查", "密码强度验证", "Email 验证 (发送验证链接)", "初始角色分配"],
      },
      {
        title: "登录 (Sign In)",
        reason: "登录是用户身份验证的过程。必须安全地处理密码和返回正确的凭证。",
        subtopics: ["Email 和密码查询", "密码对比验证", "创建 session/token", "记住我功能"],
      },
      {
        title: "密码哈希 (Password Hashing)",
        reason: "密码必须被哈希存储，而不是明文。这是网络安全的基本原则。",
        subtopics: ["bcrypt 库", "Salting", "Hash vs Encryption", "密码重置流程"],
      },
      {
        title: "JWT Tokens",
        reason: "JWT是现代API认证的标准。理解JWT的结构和工作原理对现代Web开发至关重要。",
        subtopics: ["Header.Payload.Signature", "Claims 和 Payload", "过期时间 (exp)", "刷新 Token (Refresh Token)", "Token 撤销 (黑名单)"],
      },
      {
        title: "用户角色 (Roles)",
        reason: "不同用户有不同权限。基于角色的访问控制(RBAC)是常见的授权方案。",
        subtopics: ["定义角色 (Admin/User/Guest)", "分配角色给用户", "角色继承", "权限清单"],
      },
      {
        title: "受保护路由",
        reason: "某些路由只有认证用户才能访问。需要在路由或中间件层进行验证。",
        subtopics: ["认证中间件", "Token 验证", "角色检查", "访问决策逻辑"],
      },
      {
        title: "权限控制 (Authorization)",
        reason: "即使用户已认证，也需要检查他们是否有权访问特定资源。",
        subtopics: ["资源所有权检查", "角色权限映射", "动态权限", "权限缓存"],
      },
      {
        title: "注销 (Logout)",
        reason: "安全的注销确保用户无法继续访问资源。",
        subtopics: ["Session 删除", "Token 黑名单", "前端 token 删除", "CSRF 令牌清除"],
      },
    ],
  },
  {
    id: "typescript",
    category: "📘 TypeScript",
    description: "类型安全的JavaScript",
    topics: [
      {
        title: "类型注解 (Type Annotations)",
        reason: "TypeScript的核心功能。类型注解在编译时捕获错误，提高代码质量。",
        subtopics: ["基本类型 (string, number, boolean)", "Union types (|)", "Intersection types (&)", "类型别名 (type)"],
      },
      {
        title: "接口 (Interface)",
        reason: "接口定义对象的结构。对构建可扩展和可维护的应用至关重要。",
        subtopics: ["对象接口", "可选属性 (?)", "只读属性 (readonly)", "接口继承 (extends)"],
      },
      {
        title: "泛型 (Generics)",
        reason: "泛型使代码更通用和可重用。构建类型安全的库的必须技能。",
        subtopics: ["泛型函数", "泛型类和接口", "泛型约束 (extends)", "条件类型"],
      },
      {
        title: "可选字段 & 可空类型",
        reason: "正确处理可选和可空值防止null引用错误。对类型安全至关重要。",
        subtopics: ["可选参数 (?)", "可选链 (?.)", "空值合并 (??)", "非空断言 (!)"],
      },
      {
        title: "API 响应类型",
        reason: "给API响应添加类型确保整个应用中的类型安全。防止运行时错误。",
        subtopics: ["响应接口", "错误响应类型", "区分联合 (Discriminated Union)", "类型守卫"],
      },
    ],
  },
  {
    id: "frontend-advanced",
    category: "⚛️ 前端进阶",
    description: "现代前端开发的高级概念",
    topics: [
      {
        title: "状态管理",
        reason: "应用状态复杂时，需要专门的状态管理解决方案。选择合适的方案影响性能和可维护性。",
        subtopics: ["本地组件状态", "Context API", "Redux/Zustand", "服务器状态 (TanStack Query)"],
      },
      {
        title: "表单处理",
        reason: "表单是Web应用的基础。正确的表单处理包括验证、错误显示和提交。",
        subtopics: ["受控组件", "React Hook Form", "验证库 (Zod/Yup)", "错误消息"],
      },
      {
        title: "性能优化",
        reason: "快速的应用改善用户体验和转化率。持续的性能优化是必须的。",
        subtopics: ["代码分割 (Code splitting)", "懒加载 (Lazy loading)", "记忆化 (Memoization)", "虚拟化列表"],
      },
    ],
  },
  {
    id: "fullstack-complete",
    category: "🚀 全栈进阶",
    description: "构建生产级应用的完整技能",
    topics: [
      {
        title: "数据库关系 & Schema 设计",
        reason: "正确的schema设计是数据库性能的基础。理解关系防止数据完整性问题。",
        subtopics: ["一对多关系", "多对多关系", "外键约束", "数据库正规化", "迁移管理"],
      },
      {
        title: "测试 (Unit/Integration/E2E)",
        reason: "测试确保代码质量和防止回归。不同测试类型发现不同问题。",
        subtopics: ["单元测试 (Jest)", "集成测试", "E2E测试 (Playwright/Cypress)", "测试覆盖率"],
      },
      {
        title: "API 设计 & REST 约定",
        reason: "设计干净、可预测的API对全栈开发至关重要。REST原则指导好的设计。",
        subtopics: ["资源导向设计", "HTTP状态码", "错误响应格式", "API文档化", "版本控制"],
      },
      {
        title: "DevOps & 部署",
        reason: "理解应用部署和维护是全栈工程师的必备技能。",
        subtopics: ["Docker 容器化", "CI/CD 管道", "环境配置", "数据库备份", "监控告警"],
      },
      {
        title: "安全最佳实践",
        reason: "安全漏洞的后果严重。理解OWASP Top 10和安全原则至关重要。",
        subtopics: ["XSS 防护", "CSRF 防护", "SQL 注入防护", "密码安全", "CORS配置", "速率限制"],
      },
    ],
  },
];