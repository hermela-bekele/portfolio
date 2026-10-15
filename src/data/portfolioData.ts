export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "Full-Stack" | "Cloud & DevOps" | "Fintech & Web3";
  featured: boolean;
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: "work" | "education";
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; icon: string }[];
}

export const personalInfo = {
  name: "Hermela Bekele",
  title: "Full-Stack Software Engineer",
  tagline: "Architecting scalable cloud systems and crafted, high-performance web experiences.",
  bio: "I'm a full-stack engineer passionate about building resilient, production-ready distributed applications and fluid, accessible user interfaces. With expertise spanning modern React/Next.js architectures, high-throughput Node.js microservices, and database engineering, I turn complex requirements into elegant, high-impact digital products.",
  location: "Addis Ababa, Ethiopia / Remote",
  email: "hermela.bekele.dev@gmail.com",
  github: "https://github.com/hermela-bekele",
  linkedin: "https://linkedin.com/in/hermela-bekele",
  status: "Open to High-Impact Full-Stack & Engineering Roles",
  avatar: "/images/hermela.jpg",
  stats: [
    { label: "Years of Experience", value: "4+" },
    { label: "Production Apps Built", value: "20+" },
    { label: "API Requests Served Daily", value: "10M+" },
    { label: "Average Test Coverage", value: "95%" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "cloudpulse",
    title: "CloudPulse",
    tagline: "Autonomous Cloud Observability & Telemetry Platform",
    description: "A distributed monitoring engine with real-time latency heatmaps, Kubernetes cluster health nodes, and automated anomaly detection.",
    longDescription: "CloudPulse ingests millions of telemetry events per second across multi-region microservice deployments. Built with Next.js App Router, streaming WebSockets, ClickHouse for high-throughput time-series analytics, and custom canvas-based heatmaps that render 60fps graphs seamlessly.",
    image: "/images/project-cloudpulse.jpg",
    tags: ["Next.js 16", "TypeScript", "Node.js", "ClickHouse", "WebSockets", "Docker", "Tailored CSS"],
    category: "Cloud & DevOps",
    featured: true,
    demoUrl: "https://cloudpulse-demo.vercel.app",
    githubUrl: "https://github.com/hermela-bekele/cloudpulse",
    highlights: [
      "Sub-50ms latency metrics streaming using binary WebSocket protocol",
      "Dynamic cluster map rendering over 500+ container nodes concurrently",
      "Automated incident alert dispatch with webhook and Slack integrations"
    ],
    metrics: [
      { label: "Event Throughput", value: "120k evt/s" },
      { label: "P99 Response", value: "42ms" },
      { label: "Telemetry Accuracy", value: "99.98%" }
    ]
  },
  {
    id: "devsync",
    title: "DevSync",
    tagline: "Real-time Collaborative Engineering Workspace",
    description: "Multiplayer code editor, integrated Kanban board, and live team execution terminal with conflict-free CRDT synchronization.",
    longDescription: "DevSync brings distributed engineering teams together with real-time pair programming, live terminal sessions, and automated Kanban sprint tracking. Powered by Yjs CRDTs, Monaco Editor, WebRTC peer fallback, and an event-driven Node.js backend.",
    image: "/images/project-devsync.jpg",
    tags: ["React 19", "Next.js", "TypeScript", "Yjs CRDT", "Monaco Editor", "PostgreSQL", "Redis"],
    category: "Full-Stack",
    featured: true,
    demoUrl: "https://devsync-workspace.vercel.app",
    githubUrl: "https://github.com/hermela-bekele/devsync",
    highlights: [
      "Zero-conflict multi-user concurrent typing using state vectors & Yjs",
      "Integrated virtual terminal with sandboxed container execution",
      "Fine-grained role-based access control (RBAC) and team presence indicators"
    ],
    metrics: [
      { label: "Sync Latency", value: "<15ms" },
      { label: "Active Team Nodes", value: "1,500+" },
      { label: "Daily PR Commits", value: "8,000+" }
    ]
  },
  {
    id: "finflow",
    title: "FinFlow",
    tagline: "High-Performance Financial Ledger & Settlement Engine",
    description: "Enterprise treasury dashboard supporting multi-currency conversion, real-time transaction ticker, and immutable audit trails.",
    longDescription: "FinFlow handles double-entry multi-currency accounting with zero rounding drift and sub-second settlement verification. Features live currency ticker feeds, automated ledger audits, and an interactive risk matrix for enterprise treasury management.",
    image: "/images/project-finflow.jpg",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis Cache", "Financial APIs", "Microservices"],
    category: "Fintech & Web3",
    featured: true,
    demoUrl: "https://finflow-ledger.vercel.app",
    githubUrl: "https://github.com/hermela-bekele/finflow",
    highlights: [
      "ACID-compliant double-entry ledger architecture with idempotency keys",
      "Real-time FX currency conversion with rate caching & failover feeds",
      "Exportable regulatory compliance logs and cryptographic hash verification"
    ],
    metrics: [
      { label: "Processed Volume", value: "$42M+" },
      { label: "Settlement Speed", value: "Instant" },
      { label: "System Uptime", value: "99.99%" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Web Architecture",
    description: "Modern, reactive, accessible interfaces with silky-smooth micro-animations.",
    skills: [
      { name: "React 19 / Next.js 16", level: 95, icon: "Layers" },
      { name: "TypeScript", level: 94, icon: "Code2" },
      { name: "Vanilla Modern CSS / Modules", level: 92, icon: "Palette" },
      { name: "State Management (Zustand, TanStack Query)", level: 90, icon: "Cpu" },
      { name: "WebSockets & Realtime UX", level: 88, icon: "Radio" },
      { name: "Performance & Core Web Vitals", level: 92, icon: "Zap" }
    ]
  },
  {
    title: "Backend & Systems Design",
    description: "Scalable APIs, resilient microservices, and distributed streaming workflows.",
    skills: [
      { name: "Node.js & Express", level: 92, icon: "Server" },
      { name: "RESTful & GraphQL APIs", level: 90, icon: "Network" },
      { name: "Python / FastAPI", level: 85, icon: "Terminal" },
      { name: "Authentication (OAuth2, JWT, Auth.js)", level: 88, icon: "Lock" },
      { name: "Microservices Architecture", level: 86, icon: "Boxes" },
      { name: "Message Queues (BullMQ / RabbitMQ)", level: 82, icon: "Workflow" }
    ]
  },
  {
    title: "Databases & Data Stores",
    description: "High-integrity relational schemas, fast in-memory caches, and document stores.",
    skills: [
      { name: "PostgreSQL & Prisma / Drizzle ORM", level: 90, icon: "Database" },
      { name: "Redis In-Memory Caching", level: 88, icon: "Zap" },
      { name: "MongoDB / NoSQL", level: 86, icon: "HardDrive" },
      { name: "Database Schema Migrations & Indexing", level: 85, icon: "GitBranch" },
      { name: "ClickHouse & Time-Series Data", level: 80, icon: "BarChart3" }
    ]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "Automated delivery pipelines, containerization, and reliable production deployments.",
    skills: [
      { name: "Docker & Container Orchestration", level: 86, icon: "Box" },
      { name: "CI/CD (GitHub Actions)", level: 88, icon: "GitCommit" },
      { name: "AWS (S3, ECS, Lambda, CloudFront)", level: 82, icon: "Cloud" },
      { name: "Vercel & Edge Functions", level: 92, icon: "Globe" },
      { name: "Monitoring & Log Telemetry", level: 84, icon: "Activity" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "Apex Labs & Cloud Solutions",
    location: "Remote / Hybrid",
    period: "2024 — Present",
    current: true,
    type: "work",
    description: [
      "Engineered multi-tenant SaaS dashboard in Next.js App Router and TypeScript, reducing initial load latency by 45%.",
      "Architected real-time telemetry streaming pipeline processing over 10M records daily using Node.js and Redis Pub/Sub.",
      "Spearheaded database optimization and indexing strategy on PostgreSQL, improving complex reporting query execution by 3.2x.",
      "Mentored 4 junior engineers on React architecture, clean code standards, and automated end-to-end testing."
    ],
    technologies: ["Next.js", "TypeScript", "React 19", "Node.js", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Software Engineer",
    company: "FinTech Synergy Technologies",
    location: "Addis Ababa, Ethiopia",
    period: "2022 — 2024",
    current: false,
    type: "work",
    description: [
      "Developed secure transaction processing microservices handling high-volume daily financial settlements.",
      "Created reusable frontend component design system ensuring WCAG 2.1 AA accessibility compliance across all client portals.",
      "Implemented idempotent webhook delivery engine with automatic exponential backoff retry mechanics.",
      "Integrated automated CI/CD pipelines on GitHub Actions, cutting release deployment cycle from 2 hours to 12 minutes."
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Jest", "GitHub Actions"]
  },
  {
    id: "exp-3",
    role: "Software Engineer (Frontend Focus)",
    company: "Novus Digital Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "2021 — 2022",
    current: false,
    type: "work",
    description: [
      "Built responsive, performance-driven web interfaces for enterprise clients across healthcare and logistics.",
      "Refactored legacy codebases to modern React hooks and modular CSS, cutting bundle sizes by 35%.",
      "Collaborated closely with UI/UX product designers to prototype interactive web experiments and smooth animations."
    ],
    technologies: ["JavaScript (ES6+)", "React", "CSS3 / Sass", "REST APIs", "Git"]
  },
  {
    id: "edu-1",
    role: "B.Sc. in Computer Science & Software Engineering",
    company: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2017 — 2021",
    current: false,
    type: "education",
    description: [
      "Graduated with Distinction in Software Engineering & Algorithms.",
      "Capstone Project: Distributed peer-to-peer file verification system with cryptographic checksums.",
      "Active member of Tech Innovators Society and Competitive Programming Club."
    ],
    technologies: ["Data Structures & Algorithms", "Distributed Systems", "Database Design", "Operating Systems"]
  }
];
