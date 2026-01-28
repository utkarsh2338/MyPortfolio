import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Pre-final year CSE student at IIIT Trichy specializing in full-stack development and competitive programming. Proficient in MERN stack with strong problem-solving skills — LeetCode rating 1872, Codeforces Pupil, solved 1000+ DSA problems.`;

export const HERO_HIGHLIGHTS = [
  "💻 MERN Stack (MongoDB, Express, React, Node.js) + Next.js & TypeScript",
  "🏆 LeetCode 1872 rating • Codeforces Pupil • 1000+ problems solved",
  "🚀 Built scalable web apps with responsive UI/UX and REST APIs"
];


export const ABOUT_TEXT = `I'm a pre-final year Computer Science student at IIIT Trichy with a passion for building efficient, user-centric web applications and solving algorithmic challenges. My journey combines competitive programming excellence with full-stack development expertise, allowing me to architect robust solutions from frontend to backend. I thrive in collaborative environments and continuously explore emerging technologies to deliver impactful projects.`;

export const ABOUT_HIGHLIGHTS = [
  "🎓 B.Tech CSE at IIIT Trichy (2023-2027) — CGPA: 8.5+",
  "💼 Joint Secretary, Student Council — Leadership & Event Management",
  "🔧 Tech Stack: React, Node.js, MongoDB, Express, Next.js, TypeScript, Git",
  "📊 Strong foundation in Data Structures, Algorithms, Dynamic Programming & Graph Theory",
  "🌐 Experienced in REST APIs, responsive design, database optimization & deployment"
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full-Stack Developer & Competitive Programmer",
    college: "IIIT Trichy",
    description: `Building production-ready web applications using MERN stack with focus on scalability and performance. Achieved LeetCode rating of 1872 and Codeforces Pupil rank through consistent problem-solving.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript", "Git"],
  },
  {
    year: "2024",
    role: "Joint Secretary, Student Council",
    college: "IIIT Trichy",
    description: `Led technical and cultural events for 500+ students, coordinating cross-functional teams and managing event budgets. Developed organizational leadership and communication skills.`,
    technologies: ["Leadership", "Event Management", "Team Coordination"],
  },
  {
    year: "2023 - 2024",
    role: "Student Developer",
    college: "IIIT Trichy",
    description: `Mastered data structures and algorithms through 500+ LeetCode problems. Built foundational web development skills with responsive designs and modern JavaScript frameworks.`,
    technologies: ["C++", "DSA", "HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "NexMeet - Video Conferencing Platform",
    image: project1,
    problem: "A video conferencing solution to facilitate remote communication and collaboration.",
    description:
      "NexMeet is a scalable video conferencing web application enabling high-quality video calls, screen sharing, chat, and meeting scheduling. Built with WebRTC for real-time communication and a Node.js backend for session management.",
    contribution: "Developed frontend with React, implemented WebRTC integration, designed RESTful APIs for user management and meeting scheduling.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Clerk", "WebRTC"],
    liveDemo: "https://nex-meet-ten.vercel.app/",
    github: "https://github.com/utkarsh2338/NexMeet",
  },
  {
    title: "Real-Time Collaborative Task Manager",
    image: project2,
    problem: "Teams need efficient real-time collaboration tools for project tracking.",
    description:
      "Project management application with real-time updates, task assignment, progress tracking, deadline reminders, and team collaboration features using WebSocket technology.",
    contribution: "Built real-time sync with Socket.io, created drag-and-drop Kanban board, implemented role-based access control.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    liveDemo: "#",
    github: "https://github.com/utkarsh2338/collab-platform",
  },
  {
    title: "Developer Portfolio with CMS",
    image: project3,
    problem: "Developers need modern portfolios with easy content management.",
    description:
      "Responsive portfolio website with dark mode, smooth animations, SEO optimization, and custom CMS for managing projects and blog posts without code changes.",
    contribution: "Designed UI/UX with Framer Motion animations, implemented dark mode toggle, optimized for Lighthouse score 95+.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    liveDemo: "#",
    github: "https://github.com/utkarsh2338",
  },
  {
    title: "Blogging Platform with Markdown Editor",
    image: project4,
    problem: "Content creators need a simple platform for writing and sharing technical blogs.",
    description:
      "Medium-style blogging platform with rich markdown editor, syntax highlighting for code, commenting system, user profiles, and social features.",
    contribution: "Developed markdown editor with live preview, implemented commenting system, created RESTful API with authentication.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    liveDemo: "#",
    github: "https://github.com/utkarsh2338",
  },
];

export const CONTACT = {
  address: "Mirzapur, Uttar Pradesh, India",
  phoneNo: "+91 79053*****",
  email: "utkarshshukla102005@gmail.com",
  linkedin: "https://www.linkedin.com/in/utkarsh-shukla-3613bb28a/",
  github: "https://github.com/utkarsh2338",
  twitter: "https://x.com/UtkarshShu72261",
};

export const TECH_STACK = {
  Frontend: ["React", "Next.js", "TailwindCSS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "REST APIs", "Socket.io"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "Tools & DevOps": ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"],
  Languages: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
};
