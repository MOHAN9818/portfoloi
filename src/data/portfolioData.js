/**
 * Portfolio Data Configuration for Galla Mohan Sai
 * 
 * Centralized configuration for all personal information, projects,
 * skills, education, certifications, and contact links.
 * 
 * Edit this file to update details or add your personal email and LinkedIn URLs.
 */

export const personalInfo = {
  name: "Galla Mohan Sai",
  shortName: "Mohan Sai",
  role: "Full Stack Developer | AI/ML Enthusiast",
  animatedRoles: [
    "Full Stack Developer",
    "React Developer",
    "AI/ML Enthusiast",
    "MERN Stack Builder"
  ],
  university: "VIT-AP University, Amaravati, Andhra Pradesh, India",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  graduationYear: 2027,
  intermediateYears: "2021–2023",
  intermediateScore: "96.5%",
  
  // Professional Links
  githubUrl: "https://github.com/MOHAN9818",
  
  // Professional Contact Details
  email: "mohangalla2006@gmail.com", 
  
  // Tip: Replace empty string with your actual LinkedIn URL e.g. "https://linkedin.com/in/gallamohansai"
  linkedinUrl: "", 
  
  // Location of your resume PDF in the public directory (public/resume.pdf)
  resumePath: "/resume.pdf",

  heroHeadline: "Building Digital Experiences with Code & Intelligence.",
  heroSupportingText: "I'm Galla Mohan Sai, a Computer Science and Engineering student at VIT-AP University, passionate about full-stack development and AI-powered applications. I enjoy turning ideas into practical, user-friendly products using modern web technologies.",

  aboutText: "I'm a Computer Science and Engineering student at VIT-AP University with a strong interest in full-stack web development and artificial intelligence. I enjoy building applications that solve practical problems, from expense tracking and social platforms to AI-powered interview preparation tools. Through my projects, I have gained hands-on experience in frontend development, backend APIs, database integration, authentication, and deploying applications to the web. I'm continuously learning and looking for opportunities to grow as a software developer.",

  highlights: [
    {
      title: "B.Tech CSE Graduate",
      detail: "Graduating in 2027 from VIT-AP University"
    },
    {
      title: "Full-Stack Web Dev",
      detail: "MERN Stack, REST APIs & JWT Authentication"
    },
    {
      title: "AI-Powered Systems",
      detail: "Gemini API, RAG Architecture & Embeddings"
    },
    {
      title: "Live Production Deploys",
      detail: "Hands-on experience deploying on Vercel & cloud"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for algorithmic problem solving and system development",
    skills: ["Java", "JavaScript"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Crafting performant, accessible, and responsive user interfaces",
    skills: ["HTML5", "CSS3", "React.js", "Responsive Web Design"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    description: "Designing scalable server architectures, secure APIs, and session management",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Data modeling, schema design, and persistent storage management",
    skills: ["MongoDB", "Mongoose","SQL"]
  },
  {
    category: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Integrating intelligent models, semantic search, and context augmentation",
    skills: [
      "Generative AI integration",
      "Google Gemini API",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings & semantic similarity",
      "Machine learning fundamentals"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Modern developer workflow, version control, testing, and deployment",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman"]
  }
];

export const featuredProjects = [
  {
    id: "ai-mock-interviewer",
    title: "AI Mock Interviewer",
    featuredBadge: "Featured AI Project",
    isPrimaryHighlight: true,
    description: "An AI-powered interview preparation platform designed to help candidates practice interviews, receive evaluation feedback, and identify areas for improvement.",
    liveUrl: "https://mock-interview-taupe.vercel.app/",
    githubUrl: "https://github.com/MOHAN9818/mock-interview",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
      "RAG Architecture",
      "JWT Auth"
    ],
    features: [
      "Resume and job-description-based interview preparation",
      "AI-generated interview questions adapted to role context",
      "Real-time interview practice interface",
      "AI-assisted response evaluation and actionable suggestions",
      "Performance reports, scoring breakdowns, and analytics",
      "Interview history tracking across sessions",
      "PDF report generation for offline review",
      "Adaptive interview question flow"
    ],
    previewType: "ai-interview",
    accentColor: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
    borderHighlight: "border-indigo-500/40 hover:border-indigo-400"
  },
  {
    id: "fin-tracker",
    title: "Fin Tracker",
    featuredBadge: "Full-Stack FinTech",
    isPrimaryHighlight: false,
    description: "A full-stack expense tracking application that helps users manage their income and expenses, review transactions, and understand their monthly financial activity through a dashboard.",
    liveUrl: "https://expensetrackernew-silk.vercel.app/",
    githubUrl: "https://github.com/MOHAN9818/expensetrackernew",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication"
    ],
    features: [
      "User authentication and secure session management",
      "Income and expense tracking with categorized breakdowns",
      "Interactive transaction management and history logs",
      "Dashboard with financial summaries and balance indicators",
      "Monthly income vs. expense statistics",
      "Savings-rate visualization to guide financial goals",
      "Reminder functionality and scheduled email alerts"
    ],
    previewType: "finance-dashboard",
    accentColor: "from-blue-500/20 via-cyan-500/20 to-emerald-500/20",
    borderHighlight: "border-blue-500/40 hover:border-blue-400"
  },
  {
    id: "x-clone",
    title: "X Clone",
    featuredBadge: "Social Web App",
    isPrimaryHighlight: false,
    description: "A social media web application inspired by X, built to explore modern social interface design and interactive web application development.",
    liveUrl: "https://xclone-nine.vercel.app/",
    githubUrl: null, // Source code private / unverified repository URL
    techStack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    features: [
      "Social feed interface with dynamic timeline rendering",
      "Post creation, media layout, and real-time feed updates",
      "User profile views and personalized user metrics",
      "Interactive sidebar and tabbed navigation",
      "Fully responsive social media layout optimized for mobile and desktop"
    ],
    previewType: "social-feed",
    accentColor: "from-slate-700/20 via-blue-500/15 to-violet-500/20",
    borderHighlight: "border-slate-600/40 hover:border-slate-400"
  }
];

export const academicProject = {
  title: "Privacy Preserving Traffic Sign Recognition using Federated Learning and Differential Privacy",
  status: "In Progress",
  category: "Academic Machine Learning Research",
  description: "An academic machine learning project exploring privacy-preserving traffic sign recognition using distributed training and differential privacy techniques.",
  areasOfExploration: [
    "GTSRB (German Traffic Sign Recognition Benchmark) dataset",
    "Federated Learning for decentralized collaborative training",
    "Differential Privacy noise injection for gradient protection",
    "CNN & MobileNetV2-based lightweight image classification",
    "Federated optimization approaches (FedAvg / client aggregation)"
  ]
};

export const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh, India",
    period: "2023 – 2027",
    status: "Currently Pursuing (Expected Graduation: 2027)",
    highlights: [
      "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks",
      "Active member in technical development and student coding initiatives",
      "Hands-on focus in Full-Stack Web Development & Applied Artificial Intelligence"
    ]
  },
  {
    degree: "Intermediate Education (Class XI & XII)",
    institution: "Intermediate Education",
    location: "Andhra Pradesh, India",
    period: "2021 – 2023",
    status: "Completed",
    score: "96.5%",
    highlights: [
      "Outstanding academic performance with 96.5% score",
      "Strong foundation in Mathematics, Physics, and analytical problem-solving"
    ]
  }
];

export const certificationsData = [
  {
    id: "mern-cert",
    title: "MERN Full Stack Web Development",
    issuer: "Full Stack Development Program",
    type: "Professional Certification",
    focus: "React.js, Node.js, Express.js, MongoDB, JWT Authentication, RESTful Architecture, and Cloud Deployment",
    description: "Comprehensive hands-on training focusing on building end-to-end web applications, schema modeling, API development, and secure production deployment."
  },
  {
    id: "prodigy-internship",
    title: "Web Development Internship",
    issuer: "Prodigy InfoTech",
    type: "Internship & Letter of Recommendation",
    focus: "Web Application Development & Frontend Engineering",
    description: "Completed web development internship delivering practical web applications, responsive layouts, and received an official Letter of Recommendation."
  },
  {
    id: "nptel-ai",
    title: "AI: Search Methods for Problem Solving",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    type: "Academic Certification",
    score: "60 / 100",
    focus: "State space search, heuristic search algorithms, adversarial search, and optimization",
    description: "Rigorous coursework and examination covering foundational and heuristic AI search algorithms for complex computational problem-solving."
  }
];
