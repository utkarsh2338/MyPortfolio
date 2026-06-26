import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Final year CSE student at IIIT Trichy specializing in full-stack development and competitive programming. Proficient in MERN stack with strong problem-solving skills — LeetCode rating 1872, Codeforces Pupil, solved 1500+ DSA problems.`;

export const HERO_HIGHLIGHTS = [
  "💻 MERN Stack (MongoDB, Express, React, Node.js) + Next.js & TypeScript",
  "🏆 LeetCode 1872 rating • Codeforces Pupil • 1500+ problems solved",
  "🚀 Built scalable web apps with responsive UI/UX and REST APIs"
];


export const ABOUT_TEXT = `I'm a final year Computer Science student at IIIT Trichy with a passion for building efficient, user-centric web applications and solving algorithmic challenges. My journey combines competitive programming excellence with full-stack development expertise, allowing me to architect robust solutions from frontend to backend. I thrive in collaborative environments and continuously explore emerging technologies to deliver impactful projects.`;

export const ABOUT_HIGHLIGHTS = [
  "🎓 B.Tech CSE at IIIT Trichy (2023-2027) — CGPA: 8.71",
  "    Technical Lead at Atyant - Mentorship platform for engineers",
  "🏆 LeetCode 1872 rating • Codeforces Pupil • 1500+ problems solved",
  "Built 4+ full-stack projects with modern technologies",
  "🔧 Tech Stack: React, Node.js, MongoDB, Express, Next.js, TypeScript, Git",
  "📊 Strong foundation in Data Structures, Algorithms, Dynamic Programming & Graph Theory",

  "🌐 Developed scalable web apps with responsive UI/UX and REST APIs"
];

export const EXPERIENCES = [
  {
    year: "Mid 2026- present",
    role: "Technical Lead at Atyant",
    description: `Leading the technical development of Atyant, a mentorship platform for engineers. Mentoring and guiding the team to build scalable and efficient web applications.`,
    technologies: ["Atyant", "Full Stack Development", "Team Leadership", "Mentorship", "Strategic Planning",],
  },
  {
    year: "2024 - Mid 2026",
    role: "Full-Stack Developer & Competitive Programmer",
    college: "IIIT Trichy",
    description: `Built production-ready web applications using MERN stack with focus on scalability and performance. Achieved LeetCode rating of 1872 and Codeforces Pupil rank through consistent problem-solving.`,
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
    title: "VisionGuard AI — Real-Time Traffic Violation Detection",
    image: project2,
    problem: "Bengaluru's high vehicle density overw  helms traffic police — manual CCTV monitoring is labor-intensive, error-prone, and lets violations like helmetless riding, triple riding, and red-light crossings go unnoticed, leading to high accident rates and delayed challan issuance.",
    description:
      "VisionGuard AI is an AI-powered traffic violation detection platform that ingests live CCTV feeds and runs on-device TensorFlow.js (COCO-SSD) object detection with dynamic image preprocessing (CLAHE, BM3D noise reduction, motion deblurring). It detects 8 distinct violations — helmet non-compliance, triple riding, seatbelt violations, red-light crossing, stop-line encroachment, wrong-side driving, illegal parking, and ANPR — then auto-generates Karnataka-compliant e-challans. Features include a real-time Leaflet.js hotspot map, Recharts analytics, a confidence-gated human-AI review workflow, and a Gemini-powered AI assistant for Motor Vehicle Act queries and patrol deployment.",
    contribution: "Architected the full React + Vite frontend, integrated TensorFlow.js COCO-SSD for edge inference, built the violation classification heuristic engine, implemented the interactive Leaflet.js geospatial map, developed the Gemini AI chatbot integration, and designed the officer dashboard with challan PDF export.",
    technologies: ["React", "TensorFlow.js", "Vite", "Leaflet.js", "Recharts", "Gemini API", "Tailwind CSS"],
    liveDemo: "https://flipkart-gridlock-round2.vercel.app/",
    github: "https://github.com/utkarsh2338/Flipkart_gridlock_round2",
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
