export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "Full-Stack" | "Enterprise & ERP" | "Mobile & AI";
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  isPrivateRepo: boolean;
  demoType: "live" | "case_study" | "request";
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

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; icon: string }[];
}

export const personalInfo = {
  name: "Hermela Bekele",
  title: "Software Engineer | Full-Stack & Mobile Developer",
  tagline: "Building scalable web & mobile systems, enterprise ERP solutions, and AI-enabled digital products.",
  bio: "Software Engineer with a BSc in Software Engineering and professional experience building full-stack web and mobile applications with React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL. Experienced in delivering ERP, supply chain, and inventory systems, integrating RESTful APIs, and collaborating in agile, cross-functional teams with a passion for AI-enabled products and requirements engineering.",
  location: "Addis Ababa, Ethiopia",
  email: "hermelabekeleabebe@gmail.com",
  phone: "+251 975 064 109",
  github: "https://github.com/hermela-bekele",
  linkedin: "https://linkedin.com/in/hermela-bekele",
  portfolioShowcase: "https://hermelabekele.my.canva.site/brown-vintage-watercolor-creative-portfolio-presentation",
  status: "Available for Full-Time & High-Impact Engineering Roles",
  avatar: "/images/hermela.jpg",
  stats: [
    { label: "Professional Experience", value: "1+ Year" },
    { label: "GitHub Repositories", value: "30+" },
    { label: "ERP & Enterprise Modules", value: "8+" },
    { label: "Industry Certifications", value: "4" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "smartrecruit",
    title: "SmartRecruit",
    tagline: "Intelligent Applicant Tracking & Recruitment Dashboard",
    description: "An applicant tracking dashboard for HR professionals to monitor candidate application progress through recruitment stages with automated decision notifications.",
    longDescription: "SmartRecruit is a full-featured recruitment tracking platform designed for modern HR departments. Built with React on the frontend and NestJS with PostgreSQL and TypeORM on the backend, it delivers visual candidate kanban pipelines, interview status monitoring, candidate evaluation workflows, and automated email notifications for rapid acceptance and rejection dispatch.",
    image: "/images/project-smartrecruit.jpg",
    tags: ["React", "NestJS", "PostgreSQL", "TypeORM", "TypeScript", "REST APIs", "Node.js"],
    category: "Full-Stack",
    featured: true,
    isPrivateRepo: true,
    demoType: "case_study",
    demoUrl: "",
    githubUrl: "",
    highlights: [
      "Built an applicant tracking dashboard for HR professionals to monitor application progress through the recruitment process",
      "Implemented email notifications for acceptance and rejection decisions within one week",
      "Engineered robust schema and relational persistence layer using NestJS, PostgreSQL, and TypeORM"
    ],
    metrics: [
      { label: "Notification Turnaround", value: "<1 Week" },
      { label: "Backend Core", value: "NestJS & TypeORM" },
      { label: "Architecture", value: "Modular APIs" }
    ]
  },
  {
    id: "scm-system",
    title: "Supply Chain Management (SCM)",
    tagline: "Enterprise Procurement, Sourcing & SOA Reconciliation Engine",
    description: "Full-stack enterprise supply chain management platform handling sourcing, procurement approvals, supplier payables, and SOA financial statement reconciliation.",
    longDescription: "Engineered at IE Networks Solution to support business operations and improve system efficiency. Built frontend and backend features for procurement, sourcing, multi-tiered approvals, payables, supplier management, and automated Statement of Accounts (SOA) processing. Developed responsive interfaces, integrated APIs, handled database operations, and supported stakeholders.",
    image: "/images/project-scm.jpg",
    tags: ["Laravel", "PHP", "SQL", "JavaScript", "REST APIs", "Enterprise ERP", "Git"],
    category: "Enterprise & ERP",
    featured: true,
    isPrivateRepo: true,
    demoType: "case_study",
    demoUrl: "",
    githubUrl: "",
    highlights: [
      "Built frontend and backend features for procurement, sourcing, approvals, payables, supplier management, and statement of accounts (SOA) processing",
      "Developed responsive interfaces, integrated APIs, handled database operations, and improved system workflows",
      "Debugged, tested, and optimized application performance while supporting users and stakeholders"
    ],
    metrics: [
      { label: "System Focus", value: "Enterprise ERP" },
      { label: "Core Subsystems", value: "Procurement & SOA" },
      { label: "Performance", value: "High-Volume SQL" }
    ]
  },
  {
    id: "prime-eduai",
    title: "PRIME-EduAI",
    tagline: "AI-Enabled Education ERP & Academic Intelligence Platform",
    description: "Full-stack AI-enabled ERP system for educational institutions, streamlining academic planning, student assessments, and automated administrative operations.",
    longDescription: "Developed for Prime Integrated Services, PRIME-EduAI integrates modern frontend and backend architectures with artificial intelligence. The platform powers core school ERP modules, automated grade analytics, teacher assistance workflows, and database interactions designed for high reliability and scalability.",
    image: "/images/project-prime-eduai.jpg",
    tags: ["TypeScript", "React", "Node.js", "AI Integration", "PostgreSQL", "REST APIs"],
    category: "Full-Stack",
    featured: true,
    isPrivateRepo: true,
    demoType: "case_study",
    demoUrl: "",
    githubUrl: "",
    highlights: [
      "Developed frontend and backend features for an AI-enabled education ERP system",
      "Built and integrated APIs and database operations to support core ERP modules",
      "Architected modular TypeScript components for classroom scheduling and performance tracking"
    ],
    metrics: [
      { label: "Architecture", value: "AI-Augmented ERP" },
      { label: "Frontend/Backend", value: "Full-Stack TypeScript" },
      { label: "Delivery", value: "Agile Sprints" }
    ]
  },
  {
    id: "educonnect",
    title: "EduConnect",
    tagline: "Adaptive Mobile Learning Platform Powered by Machine Learning",
    description: "Cross-platform mobile application using machine learning models to tailor computer science materials and adaptive practice problems to individual student performance.",
    longDescription: "EduConnect represents Hermela's senior software engineering capstone. It utilizes machine learning algorithms to personalize computer science curriculum pathways based on learner speed, quiz accuracy, and concept mastery. Built with React Native for cross-platform mobile experiences, Firebase for backend real-time data, and Python for the machine learning recommendation pipeline.",
    image: "/images/project-educonnect.jpg",
    tags: ["React Native", "Firebase", "Python", "Machine Learning", "Mobile App"],
    category: "Mobile & AI",
    featured: true,
    isPrivateRepo: true,
    demoType: "case_study",
    demoUrl: "",
    githubUrl: "",
    highlights: [
      "Developed a mobile learning app that uses machine learning to tailor computer science materials to each learner's performance",
      "Designed fluid mobile user experience with responsive interactive components in React Native",
      "Integrated Firebase authentication, real-time database, and cloud services"
    ],
    metrics: [
      { label: "Target Platform", value: "iOS & Android" },
      { label: "AI Capability", value: "Adaptive Curriculum" },
      { label: "State Engine", value: "Firebase Realtime" }
    ]
  },
  {
    id: "fayda-digital-id",
    title: "Fayda Digital ID Portal",
    tagline: "National Identity Onboarding & Telebirr Mobile Integration",
    description: "Partner onboarding portal and mobile app interfaces for Ethiopia's National ID Program (Fayda), replicating Telebirr mini-app capabilities.",
    longDescription: "Developed during engineering internship at the National ID Program (Fayda Digital ID). Contributed to updates on the official Fayda Digital ID website as a frontend engineer, engineered the partner onboarding portal for organizational integration, and constructed mobile app user interfaces replicating Fayda features on Telebirr.",
    image: "/images/project-fayda.jpg",
    tags: ["React", "TypeScript", "React Native", "Telebirr Mini App", "RESTful APIs"],
    category: "Mobile & AI",
    featured: false,
    isPrivateRepo: true,
    demoType: "live",
    demoUrl: "https://id.gov.et",
    githubUrl: "",
    highlights: [
      "Developed updates to the official Fayda Digital ID website as a frontend engineer",
      "Built user interfaces for pages of the Fayda mobile app, replicating Telebirr mini app features",
      "Designed an onboarding portal for clients and organizations partnering with the National ID Program"
    ],
    metrics: [
      { label: "Program Scope", value: "National Scale" },
      { label: "Portal", value: "Partner Onboarding" },
      { label: "Integration", value: "Telebirr Platform" }
    ]
  },
  {
    id: "inventory-management",
    title: "Inventory Management System (IMS)",
    tagline: "Real-Time Stock Tracking, Product Handling & Warehouse Operations",
    description: "Full-stack enterprise inventory system for real-time stock tracking, automated warehouse auditing, product cataloging, and user permissions.",
    longDescription: "Engineered at IE Networks Solution to streamline stock control and asset tracking. Built modules for inventory tracking, stock management, product handling, reporting, and user permissions. Implemented responsive UIs, integrated APIs, managed database interactions, and boosted warehouse workflow efficiency.",
    image: "/images/project-scm.jpg",
    tags: ["React", "Node.js", "SQL", "RESTful APIs", "Full-Stack", "Git"],
    category: "Enterprise & ERP",
    featured: false,
    isPrivateRepo: true,
    demoType: "case_study",
    demoUrl: "",
    githubUrl: "",
    highlights: [
      "Built modules for inventory tracking, stock management, product handling, reporting, and user management",
      "Developed responsive UIs, integrated APIs, and managed database interactions",
      "Assisted with performance optimization and debugging to improve application speed and reliability"
    ],
    metrics: [
      { label: "Functionality", value: "Stock & Warehousing" },
      { label: "Database", value: "Relational SQL" },
      { label: "Workflow", value: "Optimized Efficiency" }
    ]
  },
  {
    id: "project-management-system",
    title: "Project Management System",
    tagline: "Bill of Quantities (BOQ), Project Creation & Budget Handling",
    description: "Enterprise project management platform supporting end-to-end project lifecycles, bill of quantities (BOQ) tracking, and budget execution.",
    longDescription: "Developed at IE Networks Solution to empower project managers and engineering teams. Features project creation pipelines, bill of quantities management, budget allocation, and milestone verification. Debugged, tested, and optimized performance to ensure mission-critical modules run seamlessly.",
    image: "/images/project-prime-eduai.jpg",
    tags: ["Full-Stack", "React", "TypeScript", "SQL", "Budgeting & BOQ"],
    category: "Enterprise & ERP",
    featured: false,
    isPrivateRepo: true,
    demoType: "case_study",
    demoUrl: "",
    githubUrl: "",
    highlights: [
      "Developed frontend and backend functionality for project creation, bill of quantities management, and budget handling",
      "Debugged, tested, and optimized performance; provided support to stakeholders to keep modules running smoothly",
      "Collaborated with project managers and designers to align functionality with business requirements"
    ],
    metrics: [
      { label: "Core Feature", value: "BOQ & Budgeting" },
      { label: "Stack", value: "Full-Stack" },
      { label: "Collaboration", value: "Cross-Functional" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile Development",
    description: "Responsive web architectures, mobile cross-platform applications, and intuitive UI components.",
    skills: [
      { name: "React & Next.js", level: 94, icon: "Layers" },
      { name: "React Native (Mobile)", level: 88, icon: "Cpu" },
      { name: "TypeScript & JavaScript", level: 92, icon: "Code2" },
      { name: "HTML5, CSS3 & Tailwind CSS", level: 90, icon: "Palette" },
      { name: "Reusable UI Systems", level: 92, icon: "Boxes" },
      { name: "RESTful API Integration", level: 95, icon: "Network" }
    ]
  },
  {
    title: "Backend & Systems Engineering",
    description: "Scalable server architectures, enterprise API design, and modular backend services.",
    skills: [
      { name: "Node.js & Express.js", level: 90, icon: "Server" },
      { name: "NestJS (Certified)", level: 88, icon: "Boxes" },
      { name: "Laravel & PHP", level: 85, icon: "Terminal" },
      { name: "RESTful API Architecture", level: 92, icon: "Network" },
      { name: "TypeORM & ORM Modeling", level: 86, icon: "Workflow" },
      { name: "Authentication & Authorization", level: 88, icon: "Lock" }
    ]
  },
  {
    title: "Databases & Data Management",
    description: "Relational schema design, SQL query tuning, and cloud data synchronization.",
    skills: [
      { name: "PostgreSQL", level: 90, icon: "Database" },
      { name: "MySQL & Relational SQL", level: 88, icon: "HardDrive" },
      { name: "Firebase & Realtime DB", level: 84, icon: "Zap" },
      { name: "Database Migrations & Modeling", level: 86, icon: "GitBranch" },
      { name: "Query Optimization", level: 85, icon: "BarChart3" }
    ]
  },
  {
    title: "Tools, AI & Project Practices",
    description: "Agile collaboration, machine learning fundamentals, and software delivery standards.",
    skills: [
      { name: "Git & GitHub Version Control", level: 92, icon: "GitCommit" },
      { name: "Agile / Scrum Methodologies", level: 90, icon: "Activity" },
      { name: "Machine Learning (Python, Scikit-Learn)", level: 82, icon: "Cpu" },
      { name: "AI-Enhanced Project Management", level: 88, icon: "Sparkles" },
      { name: "Testing, Debugging & QA", level: 88, icon: "Zap" },
      { name: "Requirements Gathering & Technical Docs", level: 90, icon: "Globe" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Technical Engineer",
    company: "IE Networks Solution",
    location: "Addis Ababa, Ethiopia",
    period: "04/2026 — Present",
    current: true,
    type: "work",
    description: [
      "Design, develop, and maintain scalable full-stack software solutions that support business operations and improve system efficiency.",
      "Collaborate with developers, designers, project managers, and stakeholders to deliver solutions aligned with business requirements.",
      "Contribute to system architecture, database management, API development, and deployment processes.",
      "Monitor, troubleshoot, and resolve technical issues to maintain system reliability, performance, and security.",
      "Take part in requirements gathering, technical documentation, testing, and software optimization.",
      "Apply version control, code reviews, and agile workflows; identify process inefficiencies and propose technical improvements."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Laravel", "REST APIs", "Git", "Agile"]
  },
  {
    id: "exp-2",
    role: "Fullstack Developer",
    company: "Prime Integrated Services",
    location: "Remote (Part-Time)",
    period: "10/2025 — Present",
    current: true,
    type: "work",
    description: [
      "Develop frontend and backend features for an AI-enabled education ERP system.",
      "Build and integrate APIs and database operations to support core ERP modules.",
      "Collaborate with remote cross-functional teams in agile sprints to deliver robust full-stack features."
    ],
    technologies: ["TypeScript", "React", "Node.js", "NestJS", "AI Integration", "PostgreSQL", "REST APIs"]
  },
  {
    id: "exp-3",
    role: "Junior Frontend Developer",
    company: "IE Networks Solution",
    location: "Addis Ababa, Ethiopia",
    period: "07/2025 — 04/2026",
    current: false,
    type: "work",
    description: [
      "Developed responsive, user-friendly web applications using React, Next.js, JavaScript, and TypeScript.",
      "Designed and implemented reusable UI components that improved development efficiency and consistency across applications.",
      "Integrated RESTful APIs and optimized data flow between frontend and backend systems.",
      "Contributed to backend development, database operations, and full-stack feature implementation.",
      "Assisted with debugging, testing, and performance optimization to improve application speed, reliability, and user experience.",
      "Collaborated with designers, backend developers, and project managers to deliver scalable solutions."
    ],
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "RESTful APIs", "UI Components", "Debugging", "Git"]
  },
  {
    id: "exp-4",
    role: "Software Engineer Intern",
    company: "National ID Program (Fayda Digital ID)",
    location: "Addis Ababa, Ethiopia",
    period: "10/2024 — 01/2025",
    current: false,
    type: "work",
    description: [
      "Developed updates to the official Fayda Digital ID website as a frontend engineer.",
      "Built user interfaces for pages of the Fayda mobile app, replicating the features of the Fayda mini app on Telebirr, under the supervision of the senior frontend team.",
      "Designed an onboarding portal for clients and organizations partnering with the National ID Program."
    ],
    technologies: ["React", "TypeScript", "React Native", "Telebirr Mini App", "Mobile UI", "Portal Design"]
  },
  {
    id: "edu-1",
    role: "BSc in Software Engineering",
    company: "Hilcoe School of Computer Science and Technology",
    location: "Addis Ababa, Ethiopia",
    period: "01/2021 — 02/2025",
    current: false,
    type: "education",
    description: [
      "Graduated with a Bachelor of Science in Software Engineering.",
      "Capstone Project: EduConnect – Adaptive Mobile Learning System utilizing Python Machine Learning algorithms for curriculum recommendation.",
      "Completed rigorous curriculum in Software Architecture, Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Engineering, and Machine Learning."
    ],
    technologies: ["Software Engineering", "Algorithms & Data Structures", "Database Systems", "Machine Learning", "System Design"]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Fundamentals of NestJS",
    issuer: "NestJS",
    date: "June 2025"
  },
  {
    id: "cert-2",
    title: "Certified React Developer",
    issuer: "W3Schools",
    date: "May 2025"
  },
  {
    id: "cert-3",
    title: "AI Enhanced Project Management",
    issuer: "10Academy",
    date: "October 2024"
  },
  {
    id: "cert-4",
    title: "AI Career Essentials",
    issuer: "ALX Ethiopia",
    date: "August 2024"
  }
];
